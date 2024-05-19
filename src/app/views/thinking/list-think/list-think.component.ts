import { Component, OnInit } from '@angular/core';
import { Think } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-list-think',
  templateUrl: './list-think.component.html',
  styleUrls: ['./list-think.component.css']
})
export class ListThinkComponent implements OnInit {
  thinksList: Think[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((thinkList) => {
      this.thinksList = thinkList;
    });
  }
}
