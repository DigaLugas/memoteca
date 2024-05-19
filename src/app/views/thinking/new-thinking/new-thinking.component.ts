import { Component, OnInit } from '@angular/core';
import { Think } from '../pensamento';

@Component({
  selector: 'app-new-thinking',
  templateUrl: './new-thinking.component.html',
  styleUrls: ['./new-thinking.component.css']
})
export class NewThinkingComponent implements OnInit {
  think: Think ={
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

createThink(){

}
  constructor() { }

  ngOnInit(): void {
  }

}
