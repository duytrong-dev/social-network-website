import { config } from 'dotenv'
import { z } from 'zod'
import fs from 'fs' // Dùng để làm việc với hệ thống tập tin: đọc, ghi, kiểm tra file hoặc thư mục có tồn tại không, tạo/xóa file, v.v.
import path from 'path' // Dùng để làm việc với đường dẫn tập tin: nối, phân tách, lấy phần mở rộng, v.v.
import chalk from 'chalk' // Dùng để in ra console với màu sắc (đẹp hơn, dễ debug hơn).

config({ path: '.env' })

// Kiểm tra sự tồn tại của file .env
if (!fs.existsSync(path.resolve('.env'))) { // trả về đường dẫn tuyệt đối đến file .env
  console.log(chalk.red('Không tìm thấy file môi trường .env'))
  process.exit(1)
}

// Định nghĩa schema cho các biến môi trường
const envSchema = z.object({
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z.string().url(),
  PASSWORD_HASH_SECRET: z.string(),
  ACCESS_TOKEN_SECRET: z.string(),
  ACCESS_TOKEN_EXPIRES_IN: z.string(),
  REFRESH_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_EXPIRES_IN: z.string(),
  EMAIL_VERIFY_TOKEN_SECRET: z.string(),
  EMAIL_VERIFY_TOKEN_EXPIRES_IN: z.string(),
  INITIAL_EMAIL_SERVER: z.string().email(),
  INITIAL_PASSWORD_SERVER: z.string(),
  DOMAIN: z.string(),
  PROTOCOL: z.enum(['http', 'https']),
  CORS_ORIGIN: z.string().url(),
  UPLOAD_FOLDER: z.string(),
  IS_UPLOAD_IN_SERVER: z.coerce.boolean().default(true),
})

// Kiểm tra xem process.env có hợp lệ với envSchema không
const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(chalk.red('Biến môi trường không hợp lệ!'))
  console.error(parsedEnv.error.format())
  process.exit(1) 
}

export const envConfig = parsedEnv.data
export const API_URL = `${envConfig.PROTOCOL}://${envConfig.DOMAIN}:${envConfig.PORT}`


// Optional: mở rộng ProcessEnv để có IntelliSense trong quá trình code
// declare global {
//   namespace NodeJS {
//     interface ProcessEnv extends z.infer<typeof envSchema> {} // Kế thừa từ schema đã định nghĩa 
//   }
// }

// z.infer<typeof envSchema>: Lấy kiểu TypeScript tự động từ schema envSchema của Zod.

// interface ProcessEnv extends ... {}: Kế thừa kiểu này để thay đổi kiểu process.env.

// Kết quả là khi bạn dùng process.env.PORT hay process.env.DATABASE_URL, TypeScript sẽ:

    // Hiểu rằng PORT là number (đã coerce từ chuỗi)

    // Hiểu DATABASE_URL là string hợp lệ dạng URL

    // Biết chính xác kiểu của từng biến môi trường khác theo envSchema


