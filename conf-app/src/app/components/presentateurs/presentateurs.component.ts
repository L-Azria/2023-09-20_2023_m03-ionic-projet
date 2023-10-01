import { Component, OnInit } from '@angular/core';
import {PresentateursService} from "../../shared/services/presentateurs.service";
import {Session} from "../../shared/models/session";
import {Presentateur} from "../../shared/models/presentateur";

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent  implements OnInit {
  presentateurs: Presentateur[] = [];
  constructor( private _prensentateursService: PresentateursService) { }

  ngOnInit() {
    this.getDataPresentateurs();
  }
  getDataPresentateurs(){
    this._prensentateursService.getData().subscribe(dataPresentateur => {
      this.presentateurs = Object.values(dataPresentateur) ;
    });

  }
  
}
