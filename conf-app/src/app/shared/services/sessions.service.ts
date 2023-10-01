import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Session} from "../models/session";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private _sessionsServiceHttp: HttpClient) { }

  getData() {
    return this._sessionsServiceHttp.get<Session[]>('https://devfest-nantes-2018-api.cleverapps.io/sessions');
  }
}
