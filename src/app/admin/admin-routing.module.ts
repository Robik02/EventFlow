import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventListComponent} from './event-list/event-list.component';
import {EventEditComponent} from './event-edit/event-edit.component';
import {EventAddComponent} from './event-add/event-add.component';
import {authGuard} from "../guards/auth.guard";

const routes: Routes = [
  {path: 'events', component: EventListComponent},
  {path: 'event/add', component: EventAddComponent, canActivate: [authGuard]},
  {path: 'event/edit/:id', component: EventEditComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
