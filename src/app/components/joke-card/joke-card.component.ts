import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit {
  @Input() jokeAddedToFavourite: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
