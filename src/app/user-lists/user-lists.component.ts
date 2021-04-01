import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {
  users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadDataUser();
  
  }

  loadDataUser(){
    this.userService.getUsers().subscribe((response:any) => { /* recuperer les data returner dans le service sous forme de response/ le fait de mettre un any c'est pour dire qu'il peut accepter tt comme réponse  par exemple: "response.results",  rxjs doc à voir.....*/
      this.users = response.results
      // console.log(response);
  });
  }

}
