export const GenderValue = {
  MALE: "MALE",
  FEMALE: "FEMALE", 
  OTHER: "OTHER"
} as const

export type GenderType = (typeof GenderValue)[keyof typeof GenderValue]

export const HttpMethodValue = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
} as const

export type HttpMethodType = (typeof HttpMethodValue)[keyof typeof HttpMethodValue]

export const PostVisibilityValue = {
  ONLY_ME: "ONLY_ME",
  FRIENDS: "FRIENDS",
  PUBLIC: "PUBLIC"
} as const

export type PostVisibilityType = (typeof PostVisibilityValue)[keyof typeof PostVisibilityValue]

export const MediaTypeValue = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO"
} as const

export type MediaTypeType = (typeof MediaTypeValue)[keyof typeof MediaTypeValue]

export const ReactionTypeValue = {
  LIKE: "LIKE",
  LOVE: "LOVE",
  HAHA: "HAHA",
  WOW: "WOW",
  SAD: "SAD",
  ANGRY: "ANGRY"
} as const

export type ReactionTypeType = (typeof ReactionTypeValue)[keyof typeof ReactionTypeValue]

export const FriendRequestStatusValue = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED"
} as const

export type FriendRequestStatusType = (typeof FriendRequestStatusValue)[keyof typeof FriendRequestStatusValue]

export const NotificationTypeValue = {
  LIKE: "LIKE",
  COMMENT: "COMMENT",
  FRIEND_REQUEST: "FRIEND_REQUEST",
  MESSAGE: "MESSAGE",
  PAGE_POST: "PAGE_POST",
  SYSTEM: "SYSTEM"
} as const

export type NotificationTypeType = (typeof NotificationTypeValue)[keyof typeof NotificationTypeValue]

export const TokenTypeValue = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  EMAIL_VERIFY_TOKEN: "EMAIL_VERIFY_TOKEN",
  FORGOT_PASSWORD_TOKEN: "FORGOT_PASSWORD_TOKEN"
} as const

export type TokenType = (typeof TokenTypeValue)[keyof typeof TokenTypeValue]
