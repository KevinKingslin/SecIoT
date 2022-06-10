import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { AngularMaterialModule } from './angular-material.module';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { NmapresultComponent } from './result/nmapresult/nmapresult.component';
import { OpenvasresultComponent } from './result/openvasresult/openvasresult.component';
import { SpikeresultComponent } from './result/spikeresult/spikeresult.component';
import { MetasploitresultComponent } from './result/metasploitresult/metasploitresult.component';
import { NmapformComponent } from './frontpage/nmapform/nmapform.component';
import { SpikeformComponent } from './frontpage/spikeform/spikeform.component';
import { MetasploitformComponent } from './frontpage/metasploitform/metasploitform.component';
import { OpenvasformComponent } from './frontpage/openvasform/openvasform.component';

import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FrontpageComponent,
    ResultComponent,
    NmapresultComponent,
    OpenvasresultComponent,
    SpikeresultComponent,
    MetasploitresultComponent,
    NmapformComponent,
    MetasploitformComponent,
    SpikeformComponent,
    OpenvasformComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
