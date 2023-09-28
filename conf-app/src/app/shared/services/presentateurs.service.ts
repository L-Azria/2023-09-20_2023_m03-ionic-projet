import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Presentateur} from "../models/presentateur";


@Injectable({
  providedIn: 'root'
})
export class PresentateursService {

  constructor(private _presentateursServiceHttp: HttpClient) { }

  getData() {
    return this._presentateursServiceHttp.get<Presentateur[]>('https://devfest-nantes-2018-api.cleverapps.io/speakers');
  }
}
