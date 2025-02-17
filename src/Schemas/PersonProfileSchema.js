import { z } from "zod";

export const personProfileSchema = z.object({
  name: z
  .string({ required_error: "نام را وارد کنید" })
  .nonempty("نام الزامی است")
  .regex(/^[آ-ی\s]+$/, {
    message: ".نام فقط باید شامل حروف فارسی باشد",
  }),

  lastName: z
  .string({ required_error: "نام خانوادگی را وارد کنید" })
  .nonempty("نام خانوادگی الزامی است")
  .regex(/^[آ-ی\s]+$/, {
    message: ".نام خانوادگی فقط باید شامل حروف فارسی باشد",
  }),

  education: z
  .string({ required_error: "تحصیلات را وارد کنید" })
  .nonempty("تحصیلات الزامی است")
  .regex(/^[آ-ی\s]+$/, {
    message: ".تحصیلات فقط باید شامل حروف فارسی باشد",
  }),

  nationalCode: z
  .string({ required_error: "شماره ملی را وارد کنید." })
  .nonempty("شماره ملی الزامی است")
  .min(11, { message: "شماره ملی باید حداقل 11 کاراکتر باشد" })
  .max(11, { message: "شماره ملی باید حداکثر 11 کاراکتر باشد" })
  .regex(/^\d+$/, {
    message: "شماره ملی فقط باید شامل اعداد باشد",
  }),

  job: z.string()
  .regex(/^[آ-ی\s]+$/, {
    message: "شغل فقط باید شامل حروف فارسی باشد",
  })
  .optional()
  .or(z.literal("")),

  post: z.string()
  .regex(/^[آ-ی\s]+$/, {
    message: "سمت فقط باید شامل حروف فارسی باشد",
  })
  .optional()
  .or(z.literal("")),

  // username: z.string()
  // .min(3, { message: "نام کاربری باید حداقل 3 کاراکتر باشد" })
  // .max(30, { message: "نام کاربری باید حداکثر 30 کاراکتر باشد" })
  // .regex(/^[a-zA-Z0-9]+$/, {
  //   message: "نام کاربری فقط باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد",
  // })
  // .refine((s) => !s.includes(" "), {
  //   message: "نام کاربری نباید شامل فاصله باشد",
  // })
  // .optional()
  // .or(z.literal("")),

  // password: z.string()
  // .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
  // .max(50, { message: "رمز عبور باید حداکثر 50 کاراکتر باشد" })
  // .regex(/^[a-zA-Z0-9]*$/, {
  //   message: "رمز عبور باید فقط شامل حروف انگلیسی بزرگ، کوچک یا عدد باشد",
  // })
  // .regex(/[A-Z]/, {
  //   message: "رمز عبور باید شامل حداقل یک حرف بزرگ باشد",
  // })
  // .regex(/[a-z]/, {
  //   message: "رمز عبور باید شامل حداقل یک حرف کوچک باشد",
  // })
  // .regex(/[0-9]/, {
  //   message: "رمز عبور باید شامل حداقل یک عدد باشد",
  // })
  // .optional()
  // .or(z.literal("")),

  phone: z
  .string()
  .regex(/^09\d{9}$/, {
    message: "فرمت شماره تماس معتبر نیست. لطفاً شماره معتبر وارد کنید.",
  })
  .optional()
  .or(z.literal("")),

  workPhone: z
  .string()
  .regex(/^(0\d{2})\d{8}$/, {
    message: "فرمت شماره تلفن معتبر نیست. لطفاً شماره معتبر وارد کنید.",
  })
  .optional()
  .or(z.literal("")),
});
