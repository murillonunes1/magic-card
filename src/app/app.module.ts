import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOpenerComponent } from './components/card-opener/card-opener.component';
import { CardFiltersComponent } from './components/card-filters/card-filters.component';
import { CardSearchComponent } from './components/card-search/card-search.component';
import { CardDisplayComponent } from './components/card-display/card-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOpenerComponent,
    CardFiltersComponent,
    CardSearchComponent,
    CardDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
