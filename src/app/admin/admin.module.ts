import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MatTableModule } from '@angular/material/table';


import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { UserManagementModule } from './user-management/user-management.module';
import { OrderModule } from './order/order.module';
import { MenuModule } from './menu/menu.module';




@NgModule({
  declarations: [
    AdminComponent,
    DashbordComponent,
    AdminNavComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    OrderModule,
    UserManagementModule,
    MenuModule
  ]
})
export class AdminModule { }
