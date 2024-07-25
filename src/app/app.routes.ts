import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChangeEventComponent } from './change-event/change-event.component';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [
    { path: "", redirectTo: "binding", pathMatch: "full" },
    { path: "binding", component: DataBindingComponent },
    { path: "changeEvent", component: ChangeEventComponent },
    { path: "directives", component: DirectivesComponent },
    { path: "dashboard", loadComponent: ()=> import('./dashboard/dashboard.component').then(m=> m.DashboardComponent) }
];
