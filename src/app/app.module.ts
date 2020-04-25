import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LibNgxBrModule} from '../../projects/lib-ngx-br/src/lib/lib-ngx-br.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibNgxBrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
