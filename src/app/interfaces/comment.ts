import { User } from "./user";

export interface Comment {
    _id: string;
    text: string;
    parent: Comment | null;
    likes: number | null;
    user: User
}

export interface createComment{
    text: string;
    userId?: string;
    parentId?: null | string;
}
