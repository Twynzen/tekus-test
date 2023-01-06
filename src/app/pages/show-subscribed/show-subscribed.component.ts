import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.services';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-show-subscribed',
  templateUrl: './show-subscribed.component.html',
  styleUrls: ['./show-subscribed.component.scss']
})
export class ShowSubscribedComponent implements OnInit{
  accesToken: string = '';


  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {

   this.getToken();

  }



  async getToken(){
  this.authService.getGlobalTokenObservable().subscribe(token => {
    this.accesToken = token;
    console.log(this.accesToken,"token");

  });
  }





}
