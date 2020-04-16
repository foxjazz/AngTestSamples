import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputStuffComponent } from './input-stuff/input-stuff.component';
import { ControlStuffComponent } from './control-stuff/control-stuff.component';
import {FormsModule} from '@angular/forms';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    InputStuffComponent,
    ControlStuffComponent,
    StartComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
