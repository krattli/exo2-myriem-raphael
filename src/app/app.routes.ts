import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Liste } from './liste/liste';
import { Gestion } from './gestion/gestion';
import { Contact } from './contact/contact';
import { Error404 } from './error404/error404';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'liste', component: Liste },
  { path: 'gestion', component: Gestion },
  { path: 'contact', component: Contact },
  { path: 'error', component: Error404 },
  { path: '**', component: Homepage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
