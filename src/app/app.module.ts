import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component'

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
