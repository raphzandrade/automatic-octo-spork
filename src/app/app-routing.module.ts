import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ListPageAsyncComponent } from './pages/list-page-async/list-page-async.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PagesModule } from './pages/pages.module';
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';

const routes: Routes = [
  {path: 'minha-lista', component: ListPageComponent, canActivate: [AuthGuard] },
  {path: 'minha-lista-async', component: ListPageAsyncComponent},
  {path: 'cadastrar-item', component: FormPageComponent},
  {path: 'pipes', component: PipesPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '**', redirectTo: 'minha-lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
