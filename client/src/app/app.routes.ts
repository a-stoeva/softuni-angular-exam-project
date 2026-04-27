import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TalesComponent } from './tales/tales.component';
import { ErrorComponent } from './error/error.component';
import { TaleDetailsComponent } from './tale-details/tale-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { authGuard } from './guards/auth.guard';
import { ownerGuard } from './guards/owner.guard';
import { guestGuard } from './guards/guest.guard';
import { MyTalesComponent } from './my-tales/my-tales.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tales', children: [
        {path: '', component: TalesComponent},
        {path: ':taleId/details', loadComponent: () =>
            import('./tale-details/tale-details.component').then(t => t.TaleDetailsComponent)}
    ]},
    {path: 'my-tales', loadComponent: () =>
        import('./my-tales/my-tales.component').then(t => t.MyTalesComponent),
    canActivate: [authGuard]},
    // {path: 'tales/details', component: TaleDetailsComponent},
    {path: 'create', component: CreateComponent, canActivate: [authGuard]},
    {path: 'tales/:taleId/edit', component: EditComponent, canActivate: [authGuard, ownerGuard]},
    {path: 'login', component: LoginComponent, canActivate: [guestGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [guestGuard]},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'}
];
