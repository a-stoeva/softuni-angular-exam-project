import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TalesComponent } from './tales/tales.component';
import { ErrorComponent } from './error/error.component';
import { TaleDetailsComponent } from './tale-details/tale-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tales', children: [
        {path: '', component: TalesComponent},
        {path: ':taleId', component: TaleDetailsComponent}
    ]},
    // {path: 'tales/details', component: TaleDetailsComponent},
    {path: 'create', component: CreateComponent},
    {path: 'edit', component: EditComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'}
];
