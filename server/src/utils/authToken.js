import jwt from "jsonwebtoken";

// Generate a short-lived access token 
export const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
  return token;
};

// Generate a long-lived refresh token 
export const generateRefreshToken = (id) => {
  const refreshToken = jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
  return refreshToken;
};

