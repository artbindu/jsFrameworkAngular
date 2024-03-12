import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Lesson:06 - Add Routing to separate Dashboard & Heroes Component
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './components/message/message.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
// Lesson:13 - Enable HTTP & Simulate Data Service
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CustomDbService } from './services/custom-db.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    // Lesson:07
    MessageComponent,
    // Lesson:08
    HeroDetailsComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Lesson:06
    FormsModule,
    // Lesson:13
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(CustomDbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
