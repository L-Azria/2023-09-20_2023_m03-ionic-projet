import { Component, OnInit } from '@angular/core';
import {Session} from "../../shared/models/session";
import {SessionsService} from "../../shared/services/sessions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-session-detail',
  templateUrl: './sessions-detail.component.html',
  styleUrls: ['./sessions-detail.component.scss'],
})
export class SessionsDetailComponent implements OnInit {
  session: Session = {};
  imgUrl: string = "https://devfest2018.gdgnantes.com/";

  constructor( private _route: ActivatedRoute,
               private _sessionsService: SessionsService) { }

  ngOnInit() {
    const id = parseInt(<string>this._route.snapshot.paramMap.get('id'));

    this._sessionsService.getData().subscribe(session => {
      this.session = session[id];
      console.log(this.session)
    });

  }


}
