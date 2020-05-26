import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//import { B } from '@angular/platform-browser'
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {HttpModule} from '@angular/http';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { HelloComponent } from './hello/hello.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent,
    UpdateComponent,
    DeleteComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
