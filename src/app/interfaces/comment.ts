import { user } from "./user";

export interface Comment {
    _id: string;
    text: string;
    parent: Comment | null;
    likes: number | null;
    user: user
}
