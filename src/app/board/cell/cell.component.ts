import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../board.component';
import { MainLogicService } from 'src/app/main-logic.service';


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  @Input() serialNumber: number;
  @Input() isActive: boolean;
  @Input() x: number;
  @Input() y: number;

  // tslint:disable-next-line:no-shadowed-variable
  constructor() {
  }
}
