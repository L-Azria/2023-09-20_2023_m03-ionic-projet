import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {MenuService} from "../../shared/services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  currentPage: string = "home";


  private _subscription = new Subscription;
  constructor(private _navService: MenuService) { }



  ngOnInit() {}

}
