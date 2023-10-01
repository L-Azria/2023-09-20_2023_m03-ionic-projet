import { Component, OnInit } from '@angular/core';
import {SessionsService} from "../../shared/services/sessions.service";
import {Session} from "../../shared/models/session";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent  implements OnInit {
 sessions: Session[] = [];


  constructor( private _sessionsService: SessionsService,
               private _router: Router) { }

  ngOnInit() {
    this.getDataSessions();

  }
  getDataSessions() {
    this._sessionsService.getData().subscribe(dataSessions => {
      this.sessions = Object.values(dataSessions);
    });
  }

  goToSessionDetail(id: number | undefined) {
    this._router.navigate(['/sessions', id]);
  }

}
