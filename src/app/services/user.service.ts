import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from '../environment';
import { tap } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)
  storageService = inject(StorageService)

  constructor() { }

  createUser(name: String){
    return this.http.post<User>(`${environment.apiBaseURL}/user`,{
      name
    }).pipe(
      tap((user => {
        this.storageService.saveUserToStorage(user)
      }))
    )
  }

}
