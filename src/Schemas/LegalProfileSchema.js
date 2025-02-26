import { z } from "zod";

export const LegalProfileSchema = z.object({
  companyName: z
  .string({ required_error: "نام شرکت را وارد کنید" })
  .nonempty("نام شرکت الزامی است")
  .regex(/^[آ-ی\s]+$/, {
    message: ".نام شرکت فقط باید شامل حروف فارسی باشد",
  }),

  companyNationalId: z
  .string({ required_error: "شماره ملی شرکت را وارد کنید" })
  .nonempty("شماره ملی الزامی است")
  .min(11, { message: "شماره ملی شرکت باید حداقل 11 کاراکتر باشد" })
  .max(11, { message: "شماره ملی شرکت باید حداکثر 11 کاراکتر باشد" })
  .regex(/^\d+$/, {
    message: "شماره ملی شرکت فقط باید شامل اعداد باشد",
  }),

  workNumber: z
  .string()
  .regex(/^09\d{9}$/, {
    message: "فرمت شماره تماس معتبر نیست. لطفاً شماره معتبر وارد کنید",
  })
  .optional()
  .or(z.literal("")),

  companyEmail: z
  .string({ required_error: "ایمیل را وارد کنید" })
  .nonempty("ایمیل الزامی است")
  .max(255,{ message: "ایمیل نباید بیشتر از 255 کاراکتر باشد" } )
  .email({ message: "ایمیل نامعتبر است" }),

  connectorName: z
  .string({ required_error: "نام و نام خانوادگی معرف را وارد کنید" })
  .regex(/^[آ-ی\s]+$/, {
    message: ".نام و نام خانوادگی معرف فقط باید شامل حروف فارسی باشد",
  })
  .optional()
  .or(z.literal("")),

  connectorNationalCode: z
  .string({ required_error: "کد ملی معرف را وارد کنید" })
  .min(10, { message: "کد ملی معرف باید حداقل 10 کاراکتر باشد" })
  .max(10, { message: "کد ملی معرف باید حداکثر 10 کاراکتر باشد" })
  .regex(/^\d+$/, {
    message: "کد ملی معرف فقط باید شامل اعداد باشد",
  })
  .optional()
  .or(z.literal("")),

  connectorPhoneNumber: z
  .string()
  .regex(/^09\d{9}$/, {
    message: "فرمت شماره تماس معتبر نیست. لطفاً شماره معتبر وارد کنید",
  })
  .optional()
  .or(z.literal("")),

  officialNewspaper: z
  .any()
  .refine(
    (files) => files instanceof FileList && files.length > 0,
    "آپلود روزنامه رسمی الزامی است"
  ),

  role: z.enum(["مدیر", "نماینده شرکت"]),
});
