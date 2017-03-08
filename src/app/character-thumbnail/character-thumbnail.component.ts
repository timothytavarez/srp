import { Component, OnInit } from '@angular/core';

import { Character } from '../characters/character';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-character-thumbnail',
  templateUrl: './character-thumbnail.component.html',
  styleUrls: ['./character-thumbnail.component.css'],
  providers: [CharactersService]
})
export class CharacterThumbnailComponent implements OnInit {
  characters: Character[];

  constructor(private charService: CharactersService) {
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characters = this.charService.getCharacters();

    console.log(this.characters);
  }

}
