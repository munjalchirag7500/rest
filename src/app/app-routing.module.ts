import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { 
   path: 'admin',
   loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule)
  },
 { 
   path: '', 
   loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
