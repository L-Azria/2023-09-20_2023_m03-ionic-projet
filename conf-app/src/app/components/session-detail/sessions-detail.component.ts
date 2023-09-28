import { Component, OnInit } from '@angular/core';
import {Session} from "../../shared/models/session";
import {SessionsService} from "../../shared/services/sessions.service";

@Component({
  selector: 'app-session-detail',
  templateUrl: './sessions-detail.component.html',
  styleUrls: ['./sessions-detail.component.scss'],
})
export class SessionsDetailComponent implements OnInit {
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
