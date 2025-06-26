import { z } from "zod";

// đăng ký
export const RegisterBody = z.object({
  email: z.string().trim().email({ message: "Email không đúng định dạng!" }),
  password: z.string().trim().min(8, { message: "Mật khẩu có 8 kí tự trở lên!" })
             .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, { message: "Mật khẩu phải chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số!" }),
  confirmPassword: z.string().trim().min(8, "Mật khẩu có 8 kí tự trở lên!"),
  name: z.string().trim().min(1, "Tên người dùng là bắt buộc!"),
  birthDate: z.coerce.date().refine((date) => date <= new Date(), {
    message: "Ngày sinh phải là ngày trong quá khứ!"  
  }),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER'], { message: "Giới tính không hợp lệ!" })
})
.strict()
.refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Xác nhận mật khẩu không khớp!"
})

export type RegisterBodyType = z.infer<typeof RegisterBody>


// đăng nhập
export const LoginBody = z.object({
  email: z.string().trim().email({ message: "Email không đúng định dạng!" }),
  password: z.string().trim().min(8, { message: "Mật khẩu có 8 kí tự trở lên!" })
                      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, { message: "Mật khẩu phải chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số!" })
})
.strict()

export type LoginBodyType = z.infer<typeof LoginBody>

// đăng xuất
export const LogoutBody = z.object({
    refreshToken: z.string().nullable()
}).strict()

export type LogoutBodyType = z.TypeOf<typeof LogoutBody>

// email verify 
export const EmailVerifyBody = z.object({
    emailVerifyToken: z.string().nullable()
}).strict()

export type EmailVerifyBodyType = z.TypeOf<typeof EmailVerifyBody>
