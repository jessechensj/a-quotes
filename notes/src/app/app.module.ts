import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceService } from './service.service'

import { AppComponent } from './app.component';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NotesListComponent } from './notes-list/notes-list.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NotesAddComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
