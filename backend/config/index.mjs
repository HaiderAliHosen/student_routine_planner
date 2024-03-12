import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const dbUri = process.env.MONGO_CONNECTION_URL;
export const jwtSecret = process.env.JWT_SECRET;

export const emailServiceID = process.env.EMAIL_SERVICE;
export const emailTemplateID = process.env.EMAIL_TEMPLATE;
export const emailPublicKey = process.env.EMAIL_USER;
