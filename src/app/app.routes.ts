import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChangeEventComponent } from './change-event/change-event.component';

export const routes: Routes = [
    { path: "", redirectTo: "binding", pathMatch: "full" },
    { path: "binding", component: DataBindingComponent },
    { path: "changeEvent", component: ChangeEventComponent },
    { path: "dashboard", loadComponent: ()=> import('./dashboard/dashboard.component').then(m=> m.DashboardComponent) }
];
