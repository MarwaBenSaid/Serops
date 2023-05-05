import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutclientComponent } from './dashboard/client/ajoutclient/ajoutclient.component';
import { ClientComponent } from './dashboard/client/client.component';
import { ListclientComponent } from './dashboard/client/listclient/listclient.component';
import { UpdateclientComponent } from './dashboard/client/updateclient/updateclient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutComponent } from './dashboard/project/ajout/ajout.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { ListprojectComponent } from './dashboard/project/listproject/listproject.component';
import { UpdateprojectComponent } from './dashboard/project/updateproject/updateproject.component';
import { AjoutemployeeComponent } from './dashboard/employee/ajoutemployee/ajoutemployee.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { ListemployeeComponent } from './dashboard/employee/listemployee/listemployee.component';
import { UpdateemployeeComponent } from './dashboard/employee/updateemployee/updateemployee.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: '' , redirectTo: '/dashboard' , pathMatch: 'full' },

  { path: 'dashboard' , canActivate: [ AuthenticationGuard ] ,component: DashboardComponent , children: [

    { path: '' , redirectTo: 'project' , pathMatch: 'full' },
    { path: 'project' , component: ProjectComponent , children: [

      { path: '' , redirectTo: 'list' , pathMatch: 'full' },
      { path: 'ajout', component: AjoutComponent },
      { path: 'list' , component: ListprojectComponent },
      { path: 'update/:id' , component: UpdateprojectComponent  }

    ] },


    { path: 'client' , component: ClientComponent , children:[
      { path: '' , redirectTo: 'list' , pathMatch: 'full' },
      { path: 'ajout', component: AjoutclientComponent },
      { path: 'list' , component: ListclientComponent },
      { path: 'update/:id' , component: UpdateclientComponent }

    ] },


    { path: 'employee' , component: EmployeeComponent , children: [

      { path: '' , redirectTo: 'list', pathMatch: 'full' },
      { path: 'ajout', component: AjoutemployeeComponent },
      { path: 'list' , component: ListemployeeComponent },
      { path: 'update/:id' , component: UpdateemployeeComponent }

    ] }


  ] },


 



  { path: 'login' , component: LoginComponent },

  { path: 'register', component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
