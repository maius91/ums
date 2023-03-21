import { User } from './../classes/user';
import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private userCopy = new User();
  private __user = new User();
  @Input() set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user(){
    return this.__user;
  }

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    if(this.user.id > 0)
    {
      this.userService.updateUser(this.user)
    }
    else
    {
      this.userService.createUser(this.user);
    }
  }

  resetUser(form:any): void {
    if(this.user.id === 0)
    {
      this.user = new User();
    }
    else
    {
      this.user = this.userCopy;
    }
  }

}
