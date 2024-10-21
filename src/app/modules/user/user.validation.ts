import { error } from "console";
import { z } from "zod";

const registerUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is Required",
    }),
    // role: z.string({
    //   required_error: "Role is Required",
    // }),
    email: z.string({
      required_error: "Email is Required",
    }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password Must be 6 character"),
  }),
});

export const userValidations = {
  registerUserValidationSchema,
};
