import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpaceProgramService } from './services/space-program.service'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpaceProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
