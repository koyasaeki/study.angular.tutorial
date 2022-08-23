import type { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  constructor() {}

  ngOnInit(): void {}
}
