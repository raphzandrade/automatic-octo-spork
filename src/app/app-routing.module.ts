import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path: 'minha-lista', component: ListPageComponent},
  {path: 'cadastrar-item', component: FormPageComponent},
  {path: '**', redirectTo: 'minha-lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
