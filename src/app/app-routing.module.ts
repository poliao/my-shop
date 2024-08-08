import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MenuComponent } from './menu/menu.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ProductComponent } from './product/product.component';
import { HistorysaleComponent } from './historysale/historysale.component';

const routes: Routes = [
  { path: '',  component: LoginComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'changepassword', component: ChangepasswordComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'addproduct', component: AddproductComponent},
  { path: 'allproduct', component: AllproductComponent},
  { path: 'calculate', component:CalculateComponent},
  { path: 'product', component:ProductComponent},
  { path: 'historysale', component:HistorysaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
