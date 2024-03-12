import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lesson:06 - Add Routing to separate Dashboard & Heroes Component
import { CommonModule } from '@angular/common';
// add myComponents
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
// Lesson:08: Hero-Details component
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },

  // Lesson:08
  { path: 'details/:id', component: HeroDetailsComponent }
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
