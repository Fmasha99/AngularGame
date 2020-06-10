import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../board.component';
import { MainLogicService } from 'src/app/main-logic.service';


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() arrayOfCells: Cell;

  constructor() { }

  ngOnInit(): void {
  }

}
