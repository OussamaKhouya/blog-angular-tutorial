import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'blogPost/:id', component: BlogpostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
