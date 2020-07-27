import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontsizechanceComponent } from './fontsizechance/fontsizechance.component';
import { PetinfoComponent } from './petinfo/petinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    FontsizechanceComponent,
    PetinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
