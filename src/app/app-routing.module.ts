import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { TravelsComponent } from './travels/travels.component';


const routes: Routes = [

  {
          path: '', component: HomepageComponent
  },
  {
          path: 'blog', component: BlogpageComponent
  },
  {
          path: 'travels', component: TravelsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
