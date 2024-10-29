import userDb from "../../models/userSchema.js";
import userJoiValidation from "../../joiValidations/userValidation.js";
import { comparePassword, hashPassword } from "../../utils/bcryptService.js";
import { generateRefreshToken, generateToken } from "../../utils/authToken.js";

export const userSignUp = async (req, res) => {
  try {
    
    // Extract terms (if present) and form data from request body
    const { terms, ...formData } = req.body;

    // Validate user input with Joi
    const { value, error } = userJoiValidation.validate(formData);


    if (error) {
      return res.status(400).json({success:false, message: `All fields are required. -${error.message}` });
    }

    const { fullName, email, designation, password } = value;

    // Check if user already exists
    const existingUser = await userDb.findOne({ email });

    if (existingUser) {
      return res.status(409).json({success:false, message: `User already exist`});
    };

    // Hash the password before storing it in the database
    const hashedPassword = await hashPassword(password);

    // Create a new user instance and save it to the database
    const user = new userDb({
      fullName,
      email,
      designation,
      password: hashedPassword,
    });

    await user.save();

    // Respond with a success message upon successful registration
    return res.status(200).json({success:true, message: "Registration Success", data:user});
  } catch (error) {
    // Handle unexpected errors
    return res.status(400).json({success:false, message: `Bad request:  ${error.message}` });
  }
};


export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await userDb.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "Invalid User. Create an account" });
    }
    
    // Compare provided password with stored hashed password
    const validPassword = await comparePassword(password, user.password);
    
    if (!validPassword) {
      return res.status(401).json({ success: false, message: "Invalid email or Password" });
    }

    // Check if the user's account is blocked
    if (user.is_blocked) {
      return res.status(403).json({ success: false, message: "Your account is suspended" });
    }

    // Generate access and refresh tokens
    const accessToken = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Set refresh token in an HTTP-only cookie for security
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({ success: true, message: "User Login Success", data: { user, accessToken, refreshToken } });

  } catch (error) {
    // Handle unexpected errors
    return res.status(500).json({ success: false, message: `Bad request: ${error.message}` });
  }
}

export const refreshToken = async (req, res) => {
 try {
   // Extract refresh token from cookies
   const refreshToken = req.cookies.refreshToken;
   res.status(403).json({success:false, message:"Access denied :no token provided"})
 
   // Verify the   token
   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
   if (err) return res.sendStatus(403); 
 
    // Generate a new access token
    const accessToken = generateToken(decoded.id);
    return res.status(200).json({ success: true, accessToken });
   });
 } catch (error) {
  // Handle unexpected errors
  return res.status(500).json({ success: false, message:`unexpcted error ${error.message}` });
 }
};


export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    // Find user by email
    const admin = await userDb.findOne({ email });

    // Check if admin exists and verify the role
    if (!admin || admin.role !== 'admin') {
      return res.status(404).json({ success: false, message: "Invalid User. Create an account or ensure you have admin access" });
    }
    
    // Compare provided password with stored hashed password
    const validPassword = await comparePassword(password, admin.password);
    
    if (!validPassword) {
      return res.status(401).json({ success: false, message: "Invalid email or Password" });
    }

    // Generate access and refresh tokens
    const accessToken = generateToken(admin._id);
    const refreshToken = generateRefreshToken(admin._id);

    // Set refresh token in an HTTP-only cookie for security
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return res.status(200).json({ success: true, message: "Admin Login Success", data: { admin, accessToken, refreshToken } });

  } catch (error) {
    // Handle unexpected errors
    return res.status(500).json({ success: false, message: `Bad request: ${error.message}` });
  }
}

