import { Component, Input, OnInit } from '@angular/core';
import { Think } from '../pensamento';

@Component({
  selector: 'app-think-card',
  templateUrl: './think-card.component.html',
  styleUrls: ['./think-card.component.css']
})
export class ThinkCardComponent implements OnInit {
 @Input() pensamento: Think = {
    id: 0,
    conteudo: " learning angular",
    autoria: "Digas",
    modelo: "modelo2"
  }
  constructor() { }

  ngOnInit(): void {
  }
  thinkWeight(): string{
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
      return 'pensamento-p'
  }

}
