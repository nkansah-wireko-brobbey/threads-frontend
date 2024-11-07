import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  storageService = inject(StorageService);

  constructor() {}

  ngOnInit(): void {
    const user = this.storageService.getUserFromStorage();

    if (!user) {
      console.log('No User');
      const newUsername = 'user_' + Math.random() * 7000 + 1000;

      this.userService.createUser(newUsername).subscribe((data) => {
        console.log(data);
      });
    }
  }

  title = 'threads-frontend';
}
