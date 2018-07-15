import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/****** components ********/
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { SchoolFilterComponent } from './components/school-filter/school-filter.component';
import { LayoutComponent } from './components/layout/layout.component';

/****** pages ******/
import { LoginComponent } from './pages/login/login.component';
import { EntitiesComponent } from './pages/entities/entities.component';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { LevelCardComponent } from './components/level-card/level-card.component';
import { EvaluationQuestionsComponent } from './components/evaluation-questions/evaluation-questions.component';
import { EvaluationOptionsComponent } from './components/evaluation-options/evaluation-options.component';
import { LevelFilterComponent } from './components/level-filter/level-filter.component';
import { EvaluationDataComponent } from './components/evaluation-data/evaluation-data.component';

/*************** servicers ****************/
import { AuthService } from './services/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    LoginComponent,
    SchoolFilterComponent,
    EntitiesComponent,
    EvaluationsComponent,
    HomeComponent,
    DataComponent,
    LevelsComponent,
    LevelCardComponent,
    EvaluationQuestionsComponent,
    EvaluationOptionsComponent,
    LevelFilterComponent,
    EvaluationDataComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
