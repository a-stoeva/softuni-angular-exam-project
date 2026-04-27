import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { ownerGuard } from './guards/owner.guard';
import { guestGuard } from './guards/guest.guard';
import { HomeComponent } from './components/home/home.component';
import { TalesComponent } from './components/tales/tales.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tales', children: [
        {path: '', component: TalesComponent},
        {path: ':taleId/details', loadComponent: () =>
            import('./components/tale-details/tale-details.component').then(t => t.TaleDetailsComponent)}
    ]},
    {path: 'my-tales', loadComponent: () =>
        import('./components/my-tales/my-tales.component').then(t => t.MyTalesComponent),
    canActivate: [authGuard]},
    // {path: 'tales/details', component: TaleDetailsComponent},
    {path: 'create', component: CreateComponent, canActivate: [authGuard]},
    {path: 'tales/:taleId/edit', component: EditComponent, canActivate: [authGuard, ownerGuard]},
    {path: 'login', component: LoginComponent, canActivate: [guestGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [guestGuard]},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'}
];
