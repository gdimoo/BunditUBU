import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectServiceComponent } from './select-service/select-service.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from "@angular/common/http";
import { CameraHomeComponent } from './camera-home/camera-home.component';
import { MakeupHomeComponent } from './makeup-home/makeup-home.component';
@NgModule({
  declarations: [
    AppComponent,
    SelectServiceComponent,
    CameraHomeComponent,
    MakeupHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
