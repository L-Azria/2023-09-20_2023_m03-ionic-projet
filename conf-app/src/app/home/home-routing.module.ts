import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {SessionsComponent} from "../components/sessions/sessions.component";
import {PresentateursComponent} from "../components/presentateurs/presentateurs.component";
import {SessionsDetailComponent} from "../components/session-detail/sessions-detail.component";

const routes: Routes = [
  {path: '', component: HomePage, children: []},
  {path:'sessions', component: SessionsComponent},
  {path:'presentateurs', component: PresentateursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
