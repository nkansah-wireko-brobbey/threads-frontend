import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  baseUserStorageKey = environment.userStorageKey

  constructor() { }

  getUserFromStorage(){
    const user = localStorage.getItem(this.baseUserStorageKey);

    return user ? JSON.parse(user) : null;
  }

  saveUserToStorage(user: User){
    localStorage.setItem(this.baseUserStorageKey, JSON.stringify(user))
  }
}
