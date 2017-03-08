import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterThumbnailComponent } from './character-thumbnail/character-thumbnail.component';

import { CharactersService } from './characters/characters.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
