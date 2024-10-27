import jwt from "jsonwebtoken";

// Generate a short-lived access token (5 minutes)
export const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "5m" });
  return token;
};

// Generate a long-lived refresh token (7 days)
export const generateRefreshToken = (id) => {
  const refreshToken = jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
  return refreshToken;
};

