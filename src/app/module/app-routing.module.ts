import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WallComponent} from '../component/wall/wall.component';
import {LoginComponent} from '../component/login/login.component';
import {AuthGuard} from '../guard/auth.guard';
import {DashboardComponent} from '../component/dashboard/dashboard.component';
import {AccountComponent} from '../component/account/account.component';


const routes: Routes = [
  { path: 'wall', component: WallComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
