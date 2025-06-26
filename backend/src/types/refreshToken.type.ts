export type NewRefreshTokenType = {
  id?: number;
  userId: number;
  token: string;
  userAgent?: string;
  ipAddress?: string;
  expiresAt?: Date;
  createdAt?: Date;
}