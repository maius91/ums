import { Observable } from 'rxjs';
import { AppRoutingModule } from './../app-routing.module';
import { User } from './../classes/user';
import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

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

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router)
  {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param['id']) {
        const id = Number(param['id']); // '12'
        this.userService.getUser(id)
          .subscribe(user => this.user = user)
      }
    });
  }

  saveUser(): void {
    let obs;
    if(this.user.id > 0)
    {
      obs = this.userService.updateUser(this.user)
    }
    else
    {
      obs = this.userService.createUser(this.user);
    }
    obs.subscribe(response => {
      this.__user = response;
      location.reload();
    })
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
