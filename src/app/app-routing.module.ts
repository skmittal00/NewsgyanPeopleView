import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HeaderComponent} from './Layout/header/header.component';
import{TestComponent} from './test/test.component';

const routes: Routes = [
  {path:'',redirectTo:'/test',pathMatch:'full'},
  {path:'head',component:HeaderComponent },
  {path:'test',component:TestComponent}
];

@NgModule({
  
  imports:[ RouterModule.forRoot(routes, { useHash: true })],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
