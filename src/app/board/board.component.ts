import { Component, OnInit } from "@angular/core";
import { MainLogicService } from "../main-logic.service";

export interface Cell {
	x: number;
	y: number;
	isActive?: boolean;
	counterValue: number;
}

@Component({
	selector: "app-board",
	templateUrl: "./board.component.html",
	styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
	public cells: Cell[][];

	public constructor(public mainLogicService: MainLogicService) {}

	public ngOnInit(): void {
		this.cells = this.mainLogicService.getInitialArray();
	}

	public startNewGame() {
		this.cells = this.mainLogicService.getInitialArray();
		this.mainLogicService.deletePreviousSteps();
		this.mainLogicService.counterValue = 0;
		this.mainLogicService.title = "";
	}
}
