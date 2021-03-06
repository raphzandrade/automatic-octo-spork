import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { ComponentsModule } from '../components/components.module';
import { FormPageComponent } from './form-page/form-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { PipesPageComponent } from './pipes-page/pipes-page.component';
import { PipesModule } from '../pipes/pipes.module';
import { ListPageAsyncComponent } from './list-page-async/list-page-async.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    ListPageComponent,
    FormPageComponent,
    PipesPageComponent,
    ListPageAsyncComponent,
    LoginPageComponent
  ],
  exports: [
    ListPageComponent,
    FormPageComponent,
    PipesPageComponent,
    ListPageAsyncComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule
  ],
})
export class PagesModule { }
