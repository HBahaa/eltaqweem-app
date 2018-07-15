import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { EntitiesComponent } from './pages/entities/entities.component';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';


const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'entities', component: EntitiesComponent},
	{path: 'data', component: DataComponent},
	{path: 'levels', component: LevelsComponent},
	{path: 'evaluations', component: EvaluationsComponent},
	{path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
