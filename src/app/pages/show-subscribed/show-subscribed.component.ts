import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.services';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-show-subscribed',
  templateUrl: './show-subscribed.component.html',
  styleUrls: ['./show-subscribed.component.scss']
})
export class ShowSubscribedComponent implements AfterViewInit{
  accesToken: string = '';


  constructor(
    private authService: AuthService
  ){


  }
  ngAfterViewInit() {
    this.getAccesToken();
  }

  getAccesToken(){
   this.accesToken = this.authService.getGlobalToken();
  }

}