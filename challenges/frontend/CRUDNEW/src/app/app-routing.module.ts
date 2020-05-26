import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [{path:'create',component:CreateComponent},
{path:'search',component:SearchComponent},
{path: 'update',component:UpdateComponent},
{path:'delete',component:DeleteComponent},
{path: 'hello',component:HelloComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
