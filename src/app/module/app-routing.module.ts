import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WallComponent} from '../component/wall/wall.component';
import {LoginComponent} from '../component/login/login.component';
import {AuthGuard} from '../guard/auth.guard';


const routes: Routes = [
  { path: 'wall', component: WallComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
