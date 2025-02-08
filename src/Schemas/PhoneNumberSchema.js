import { z } from "zod";

export const phoneNumberSchema = z.object({
  phone: z
    .string({
      required_error: "شماره تلفن همراه را وارد کنید", 
    })
    .min(1, { message: "شماره تلفن همراه را وارد کنید" }) 
    .regex(/^09\d{9}$/, {
      message: "فرمت شماره تماس معتبر نیست. لطفاً شماره معتبر وارد را کنید", 
    }),
});
