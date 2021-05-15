import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReverseComponent } from './reverse/reverse.component';
import { ReversePipe } from './reverse.pipe';
import { BuiltinpipeComponent } from './builtinpipe/builtinpipe.component';
import { MyPipe } from './my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseComponent,
    ReversePipe,
    BuiltinpipeComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
