import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop'; 

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
