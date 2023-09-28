import { Component, OnInit } from '@angular/core';
import {SessionsService} from "../../shared/services/sessions.service";
import {Session} from "../../shared/models/session";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent  implements OnInit {
 sessions: Session[] = [];

  constructor( private _sessionsService: SessionsService) { }

  ngOnInit() {
    this.getDataSessions();

  }
  getDataSessions() {
    this._sessionsService.getData().subscribe(dataSessions => {
      this.sessions = Object.values(dataSessions);
    });
  }
}
