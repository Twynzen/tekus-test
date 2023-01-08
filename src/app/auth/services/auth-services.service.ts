import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { BehaviorSubject, Observable } from "rxjs";
import { REGISTER_USER } from "src/app/shared/constants/endpoints.constants";
import { userRegister } from "src/app/shared/interfaces/user-register.interface";
import { RequestService } from "src/app/shared/services/request.service";


@Injectable({ providedIn: 'root' })

export class AuthService {
  @BlockUI() blockUI!: NgBlockUI;
  globalToken: any;
  globalTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('')



  constructor(
    private requestService: RequestService,
    private router: Router

  ) {
  }

  async signUp() {
  }

  async signIn(body: userRegister) {
    this.blockUI.start();
    this.requestService.post(REGISTER_USER, body).subscribe(
      (res: any) => {
        this.blockUI.stop();
        try {
          if (res.Token) {
            this.globalToken = res.Token;
            localStorage.setItem('globalToken', this.globalToken);
            this.globalTokenSubject.next(this.globalToken);
            this.router.navigate(['/show-subscribed']);
          }

        } catch (error) {
          console.log(error);
        }
      }
    )
  }
  getGlobalTokenObservable() {
    return this.globalTokenSubject.asObservable();
  }

  singOut() {

  }


}
