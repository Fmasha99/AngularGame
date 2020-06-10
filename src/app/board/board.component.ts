import { Component, OnInit } from '@angular/core';
import { MainLogicService } from 'src/app/main-logic.service';

export interface Cell {
  serialNumber?: string;
  id: number;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  cells: Cell[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.cells.push({id: i});
    }
  }

  ngOnInit(): void {
  }

}
