import { Injectable } from "@angular/core";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { BehaviorSubject, Observable } from "rxjs";
import { REGISTER_USER } from "src/app/shared/constants/endpoints.constants";
import { userRegister } from "src/app/shared/interfaces/user-register.interface";
import { RequestService } from "src/app/shared/services/request.service";


@Injectable({providedIn: 'root'})

export class AuthService  {
  @BlockUI() blockUI!: NgBlockUI;
  globalToken: string = '';


  constructor(
    private requestService: RequestService
  ) {

  }

  async signUp(){

  }

  async signIn(body: userRegister) {
    this.blockUI.start();
    this.requestService.post(REGISTER_USER,body).subscribe(
      (res:any)=>{
        this.blockUI.stop();
        try {
          this.globalToken = res.token;
        } catch (error) {
          console.log(error);
        }
      }
    )
  }
  getGlobalToken(){
    return this.globalToken;
  }

  singOut(){

  }


}
