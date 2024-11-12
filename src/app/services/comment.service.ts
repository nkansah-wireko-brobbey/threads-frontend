import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environment';
import { Comment, createComment } from '../interfaces/comment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  storageService = inject(StorageService)
  http = inject(HttpClient)
  constructor() { }

  getComments(parentId: string = ''){
   let url = `${environment.apiBaseURL}/comments`
   if (parentId){
    url += `?parentId=${parentId}`
   }

   return this.http.get<Comment[]>(url);
  }

  createComment(createComment: createComment){
    const url = `${environment.apiBaseURL}/comments`

    const user = this.storageService.getUserFromStorage()

    if(!user){
      return;
    }

    createComment = {...createComment, userId: user._id}

    return this.http.post<Comment>(url,{...createComment});
  }
}
