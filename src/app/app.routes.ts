import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Liste } from './liste/liste';
import { Gestion } from './gestion/gestion';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'liste', component: Liste },
  { path: 'gestion', component: Gestion },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
