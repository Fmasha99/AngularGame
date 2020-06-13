import { Injectable } from '@angular/core';
import { Cell } from '../app/board/board.component';
import { CellComponent } from './board/cell/cell.component';

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
        const cell: Cell = {x: i, y: j, counterValue: null};
        this.arrayOfCells[i][j] = cell;
      }
    }
    return this.arrayOfCells;
  }

  findCoordinates(x: number, y: number) {
    const result: Cell[] = [];
    if (y - 2 >= 0) {
      if (x - 1 >= 0) {
        result.push({x: x - 1, y: y - 2, counterValue: null});
      }
      if (x + 1 < 10) {
        result.push({x: x + 1, y: y - 2, counterValue: null});
      }
    }
    if (x + 2 < 10) {
      if (y - 1 >= 0) {
        result.push({x: x + 2, y: y - 1, counterValue: null});
      }
      if (y + 1 < 10) {
        result.push({x: x + 2, y: y + 1, counterValue: null});
      }
    }
    if (x - 2 >= 0) {
      if (y - 1 >= 0) {
        result.push({x: x - 2, y: y - 1, counterValue: null});
      }
      if (y + 1 < 10) {
        result.push({x: x - 2, y: y + 1, counterValue: null});
      }
    }
    if (y + 2 < 10) {
      if (x - 1 >= 0) {
        result.push({x: x - 1, y: y + 2, counterValue: null});
      }
      if (x + 1 < 10) {
        result.push({x: x + 1, y: y + 2, counterValue: null});
      }
    }
    return result;
  }

  increment() {
    this.counterValue++;
  }

  constructor() {
    this.counterValue = 0;
  }
}
