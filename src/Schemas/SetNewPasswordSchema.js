import { z } from "zod";

export const SetNewPasswordSchema = z.object({
  password: z
  .string({ required_error: "رمز عبور را وارد کنید" })
  .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
  .max(50,{ message: "نام کاربری باید حداکثر 50 کاراکتر باشد" } )
  .regex(/[A-Z]/, { message: "رمز عبور باید شامل حداقل یک حرف بزرگ باشد" })
  .regex(/[a-z]/, { message: "رمز عبور باید شامل حداقل یک حرف کوچک باشد" })
  .regex(/[0-9]/, { message: "رمز عبور باید شامل حداقل یک عدد باشد" }),
repeatpassword: z
  .string({ required_error: "تکرار رمز عبور مورد نیاز است" })
})
.superRefine(({ repeatpassword, password }, ctx) => {
  if (repeatpassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "رمزهای عبور وارد شده، باید یکسان باشند",
      path: ["repeatpassword"],
    });
  }
});
