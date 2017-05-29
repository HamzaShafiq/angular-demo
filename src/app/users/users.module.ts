import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { UsersComponent } from "./users.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    /*
     Gives access to common directives(e.g ngclass) In app module there is browser module which is combination
     of common module and things which require during starting of app so it should be in app module only.
     */
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class UsersModule {

}
