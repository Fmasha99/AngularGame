import { Component, OnInit } from '@angular/core';
import { MainLogicService } from '../main-logic.service';

export interface Cell {
  x: number;
  y: number;
  isActive?: boolean;
  counterValue: number;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  cells: Cell[][];

  constructor(public mainLogicService: MainLogicService) {
  }

  ngOnInit(): void {
    this.cells = this.mainLogicService.getInitialArray();
  }

}
