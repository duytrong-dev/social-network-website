## Getting Started

Run the development server:

```bash
npm run dev
```

Run the production server:

```bash
npm run build
# and
npm start
```

Check and config the ESLint Rule:

```bash
npm run lint
# and
npm run lint:fix
```

Tạo migrate db

```bash
npx prisma migrate dev --name new_change
npx prisma generate
```