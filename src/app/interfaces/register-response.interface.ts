import { User } from "./user.interface";

export interface RegisterResponse {
    accessToken: string,
    user: User
}