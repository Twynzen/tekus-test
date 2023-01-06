import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { REGISTER_USER } from "src/app/shared/constants/endpoints.constants";
import { userRegister } from "src/app/shared/interfaces/user-register.interface";
import { RequestService } from "src/app/shared/services/request.service";


@Injectable({providedIn: 'root'})

export class AuthService  {

  constructor(
    private requestService: RequestService
  ) {

  }

  async signIn(){

  }

  async signUp(body: userRegister) {
    this.requestService.post(REGISTER_USER,body).subscribe(
      (res:any)=>{
        try {
          console.log(res,"reees");

        } catch (error) {
          console.log(error);

        }
      }
    )
  }

  singOut(){

  }


}
