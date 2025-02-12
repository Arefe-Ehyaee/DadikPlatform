import { z } from "zod";

export const InitialSignUpSchema = z.object({
    username: z
      .string({ required_error: "نام کاربری (شماره همراه) را وارد کنید" })
      .min(1, { message: "شماره تلفن همراه را وارد کنید" }) 
      .regex(/^09\d{9}$/, {
        message: "فرمت شماره تماس معتبر نیست. لطفاً شماره معتبر وارد را کنید", 
      }),
  
    password: z
      .string({ required_error: "رمز عبور را وارد کنید." })
      .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
      .max(50, { message: "رمز عبور باید حداکثر 50 کاراکتر باشد" })
      .regex(/^[a-zA-Z0-9]*$/, {
        message: "رمز عبور باید فقط شامل حروف انگلیسی بزرگ، کوچک یا عدد باشد",
      })
      .regex(/[A-Z]/, {
        message: "رمز عبور باید شامل حداقل یک حرف بزرگ باشد",
      })
      .regex(/[a-z]/, {
        message: "رمز عبور باید شامل حداقل یک حرف کوچک باشد",
      })
      .regex(/[0-9]/, {
        message: "رمز عبور باید شامل حداقل یک عدد باشد",
      }),
  });
  