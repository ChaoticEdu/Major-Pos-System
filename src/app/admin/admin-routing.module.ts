import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { loginGuardGuard } from '../guard/login-guard.guard';
import { UserManagementComponent } from './user-management/user-management.component';
import { MenuComponent } from './menu/menu.component';
import { AddUserComponent } from './user-management/add-user/add-user.component';
import { OrderComponent } from './order/order.component';
// import { TableCheckoutComponent } from './table-checkout/table-checkout.component';
import { CategoryComponent } from './add-category/category/category.component';
import { AddCategoryComponent } from './add-category/add-category/add-category.component';
import { TableComponent } from './table/table/table.component';
import { authGuard } from '../guard/authGuard/auth-guard.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  // { path: '', component: AdminComponent },
  // { path: 'dash', component: DashbordComponent },
  {path:'',component:AdminComponent ,   children:[

    {path:'dashboard',component:DashbordComponent, canActivate:[authGuard],data: { title: 'Dashboard',expectedRoles: ['admin'] } },

    {path:'user-management',component:UserManagementComponent,canActivate:[authGuard],data: { title: 'User Management',expectedRoles: ['admin'] },children:[
      {path:'add-employee',component:AddUserComponent,canActivate:[authGuard],data: { title: 'Add Employee',expectedRoles: ['admin'] } },

    ] },

    {path:'menu/:table_number',component:MenuComponent,data: { title: 'Menu' } },
    {
      path: 'menu',
      redirectTo: 'menu/default', // Redirect to default if no table_number provided
      pathMatch: 'full'
    },

    {path:'order',component:OrderComponent,data: { title: 'Order' } },
     { path: 'Take-Order/Checkout', component:CheckoutComponent },
    { path: 'catogory', component:CategoryComponent },
    { path: 'add-catogory', component:AddCategoryComponent },
    { path: 'table', component:TableComponent },
    {path:'payment',component:PaymentComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }






  ],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
