import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WallComponent} from '../component/wall/wall.component';
import {LoginComponent} from '../component/login/login.component';
import {AuthGuard} from '../guard/auth.guard';
import {DashboardComponent} from '../component/dashboard/dashboard.component';
import {AccountComponent} from '../component/account/account.component';
import {GlobalFeedComponent} from '../component/global-feed/global-feed.component';
import {AuthorPageComponent} from '../component/author-page/author-page.component';
import {SubscriptionComponent} from '../component/subscription/subscription.component';
import {RegisterComponent} from '../component/register/register.component';


const routes: Routes = [
  { path: 'wall', component: WallComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: GlobalFeedComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'author/:author-id', component: AuthorPageComponent, canActivate: [AuthGuard]},
  { path: 'subscriptions', component: SubscriptionComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
