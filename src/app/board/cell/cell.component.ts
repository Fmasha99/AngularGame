import { Component, Input, OnInit } from "@angular/core";
import { MainLogicService } from "src/app/main-logic.service";
import { Cell } from "../board.component";


@Component({
	selector: "app-cell",
	templateUrl: "./cell.component.html",
	styleUrls: ["./cell.component.scss"]
})
export class CellComponent {

	@Input() public serialNumber: number;
	@Input() public isActive: boolean;
	@Input() public x: number;
	@Input() public y: number;

	// tslint:disable-next-line:no-shadowed-variable
	public constructor(public mainLogicService: MainLogicService) {
	}
}
