import { Injectable } from '@angular/core';
import { Cell } from '../app/board/board.component';

@Injectable({
  providedIn: 'root'
})

export class MainLogicService {

  public arrayOfCells: Cell[][];
  counterValue: number;

  getInitialArray() {
    this.arrayOfCells = [];
    const arrayLength = 10;
    for (let i = 0; i < arrayLength; i++) {
      this.arrayOfCells[i] = [];
      for (let j = 0; j < arrayLength; j++) {
        const cell: Cell = {x: i, y: j, counterValue: null };
        this.arrayOfCells[i][j] = cell;
      }
    }
    return this.arrayOfCells;
  }

  increment() {
    this.counterValue++;
  }

  constructor() {
    this.counterValue = 0;
  }
}
