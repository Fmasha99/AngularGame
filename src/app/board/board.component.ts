import { Component, OnInit } from '@angular/core';
import { MainLogicService } from '../main-logic.service';

export interface Cell {
  x: number;
  y: number;
  counterValue?: number;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  cells: Cell[][];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public mainLogicService: MainLogicService) {
    this.cells = mainLogicService.getInitialArray();
  }

  onCellClick(x: number, y: number) {
    const selectedCell = this.cells[x][y];
    if (selectedCell.counterValue === null) {
      this.mainLogicService.increment();
      selectedCell.counterValue = this.mainLogicService.counterValue;
    }
  }

  ngOnInit(): void {
  }

}
