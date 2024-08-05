import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MenuComponent } from './menu/menu.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { CalculateComponent } from './calculate/calculate.component';

const routes: Routes = [
  { path: '',  component: LoginComponent}, 
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'changepassword', component: ChangepasswordComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'addproduct', component: AddproductComponent},
  { path: 'allproduct', component: AllproductComponent},
  { path: 'calculate', component:CalculateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
