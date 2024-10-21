import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    accessSecretExpires_in: process.env.JWT_ACCESS_SECRET_EXPIRES_IN,
    refresh_secret: process.env.REFRESH_SECRET,
    refresh_expires_in: process.env.REFRESH_EXPIRES_IN,
    passwordResetTokenExpirationTime: process.env.PASS_RESET_EXPIRATION_TIME,
  },
  //   reset_link: process.env.RESET_LINK,
  //   email: process.env.EMAIL,
  //   app_pass: process.env.APP_PASS,
  bycrypt_salt_rounds: process.env.SALT_ROUND,

  //   cloudinary: {
  //     cloud_name: process.env.CLOUD_NAME,
  //     api_key: process.env.API_KEY,
  //     api_secret: process.env.API_SECRET
  //   }
};
