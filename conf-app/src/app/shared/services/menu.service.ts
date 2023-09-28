import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  currentPage: string = "home";

  currentPageSource = new BehaviorSubject<string>("");
  $currentPage = this.currentPageSource.asObservable();


  getCurrentPage(){
    return this.currentPage;
  }

  setCurrentPage(name : string){
    this.currentPage = name;
  }

  updateCurrentPageSource(name : string){
    this.currentPageSource.next(name);
  }

}
