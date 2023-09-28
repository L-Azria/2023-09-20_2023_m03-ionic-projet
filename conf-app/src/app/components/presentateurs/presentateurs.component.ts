import { Component, OnInit } from '@angular/core';
import {PresentateursService} from "../../shared/services/presentateurs.service";

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent  implements OnInit {

  constructor( private _prensentateursService: PresentateursService) { }

  ngOnInit() {
    this._prensentateursService.getData().subscribe(data => {
      console.log(data); // Faites quelque chose avec les données ici
    });
  }

}
