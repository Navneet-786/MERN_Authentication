const { z } = require("zod");

//creating an object schema
const registerSchema = z.object({
  userName: z
    .string({ required_error: "name must be required!" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(15, "name must be less than 15 characters"),

  email: z
    .string({ required_error: "email must require" })
    .email({ message: "Invalid email address" })
    .trim()
    .min(3, { message: "Email must be at least 3 Characters" })
    .max(20, { message: "email must be less than 20 characters" }),

  password: z
    .string({ required_error: "password Must be filled" })
    .trim()
    .min(6, { message: "Password must be at least 6 character long " })
    .max(12, { message: "Password must be less than 12 characters" }),
});

module.exports = { registerSchema };
