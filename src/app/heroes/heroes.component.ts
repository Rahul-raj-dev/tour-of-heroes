import { Component, OnInit } from '@angular/core';
import {Hero} from '../heroes';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  // hero ='Don';
// hero: Hero = {
//   id:1,
//   name: 'Raju'
// }
heroes = HEROES;
selectedHero?: Hero;

constructor() { }

ngOnInit(): void {
}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}

