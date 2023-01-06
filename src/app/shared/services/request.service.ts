import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { userRegister } from '../interfaces/user-register.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private Http_client: HttpClient,
  ) { }


  public get(endpoint:string){
    return this.Http_client.get(environment.url+endpoint);
  }
  public post(endpoint: string, body:any) {
    console.log(this.Http_client.post(environment.url + endpoint, body),"aaa");

    return this.Http_client.post(environment.url+endpoint, body);
  }


}
