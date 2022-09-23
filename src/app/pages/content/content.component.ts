import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg';
  contentTitle: string = 'Senhor dos Anéis: Retorno do Rei';
  contentDescription: string = 'Sinopse do filme';

  constructor() {}

  ngOnInit(): void {}
}
