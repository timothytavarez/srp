import { Component } from '@angular/core';
import { CharacterThumbnailComponent } from './character-thumbnail/character-thumbnail.component';

import { CharactersService } from './characters/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharactersService]
})
export class AppComponent {
  title = 'app works!';
}
