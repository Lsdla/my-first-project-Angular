import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<any>; /* */
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.loadDadaUser();
  }

  loadDadaUser(){
      // First get the user id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const userId:string = routeParams.get('userId');
  this.user$ = this.userService.getUser(userId); /* recuperer les data returner dans le service sous forme de response/ le fait de mettre un any c'est pour dire qu'il peut accepter tt comme réponse  par exemple: "response.results",  rxjs doc à voir.....*/
 
  

  }

}
