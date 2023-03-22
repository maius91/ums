import { Observable } from 'rxjs';
import { User } from './../classes/user';
import { style } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls : ['./users.component.css']
})
export class UsersComponent implements OnInit{
    title = 'Users'
    public users: Observable<User[]> = this.service.getUsers();
    @Output() updateUser = new EventEmitter<User>();

    constructor(private service:UserService)
    {
        
    }

    ngOnInit(): void {
    }

    onDeleteUser(user: User) {
      this.service.deleteUser(user).subscribe(response => {
        location.reload();
      });
    }

    onSelectUser(user: User) {
      const userCopy = Object.assign({}, user);
      this.updateUser.emit(userCopy);
    }
}
