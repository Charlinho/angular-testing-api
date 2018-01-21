import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable()
export default class UserService {

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(`${environment.api}/users`);
  }
}