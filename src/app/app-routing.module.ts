import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';


const routes: Routes = [];
const routeOptions: ExtraOptions = {enableTracing: false};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
