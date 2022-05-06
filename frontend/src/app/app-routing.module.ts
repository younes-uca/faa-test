import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { AuthGuard } from './controller/guards/auth.guard';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import { HomeComponent } from './demo/view/home/home.component';
import {LoginChercheurComponent} from './module/chercheur/login-chercheur/login-chercheur.component';
import {RegisterChercheurComponent} from './module/chercheur/register-chercheur/register-chercheur.component';
import {LoginAdminComponent} from './module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from './module/admin/register-admin/register-admin.component';
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
          { path: '', component: HomeComponent },
        {path: 'chercheur/login', component: LoginChercheurComponent },
        {path: 'chercheur/register', component: RegisterChercheurComponent },
        {path: 'admin/login', component: LoginAdminComponent },
        {path: 'admin/register', component: RegisterAdminComponent },
         {
          path: 'app', // '\'' + root + '\'',
          component: AppMainComponent,
          children: [
            {
              path: 'chercheur',
              loadChildren: './module/chercheur/chercheur-routing.module#ChercheurRoutingModule',
              canActivate: [AuthGuard],
            },
            {
              path: 'admin',
              loadChildren: './module/admin/admin-routing.module#AdminRoutingModule',
              canActivate: [AuthGuard],
            },
            { path: 'denied', component: AccessDeniedComponent },
          ],
          canActivate: [AuthGuard]
        },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
