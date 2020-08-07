import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Cell } from "../app/board/board.component";

@Injectable({
	providedIn: "root",
})
export class MainLogicService {
	private arrayOfCells: Cell[][];
	public counterValue: number;
	private activeCells: Cell[] = [];
	public title = "";

	public getInitialArray() {
		this.arrayOfCells = [];
		const arrayLength = 10;
		for (let i = 0; i < arrayLength; i++) {
			this.arrayOfCells[i] = [];
			for (let j = 0; j < arrayLength; j++) {
				const cell: Cell = { x: i, y: j, counterValue: null };
				this.arrayOfCells[i][j] = cell;
			}
		}
		return this.arrayOfCells;
	}

	public onCellClick(x: number, y: number) {
		const selectedCell = this.arrayOfCells[x][y];
		if (this.title === "") {
			if (
				(selectedCell.counterValue === null && selectedCell.isActive) ||
				this.activeCells.length === 0
			) {
				this.deletePreviousSteps();
				this.increment();
				selectedCell.counterValue = this.counterValue;
				this.showNextSteps(x, y);
				this.checkIfGameFinished();
			}
		}
	}

	public showNextSteps(x: number, y: number) {
		this.activeCells = this.findCoordinates(x, y);
		this.activeCells.forEach(
			(cell) => (this.arrayOfCells[cell.x][cell.y].isActive = true)
		);
	}

	public deletePreviousSteps() {
		this.activeCells.forEach(
			(cell) => (this.arrayOfCells[cell.x][cell.y].isActive = false)
		);
		this.activeCells = [];
	}

	public findCoordinates(x: number, y: number) {
		const result: Cell[] = [];
		if (y - 2 >= 0) {
			if (x - 1 >= 0) {
				if (this.arrayOfCells[x - 1][y - 2].counterValue === null) {
					result.push({ x: x - 1, y: y - 2, counterValue: null });
				}
			}
			if (x + 1 < 10) {
				if (this.arrayOfCells[x + 1][y - 2].counterValue === null) {
					result.push({ x: x + 1, y: y - 2, counterValue: null });
				}
			}
		}
		if (x + 2 < 10) {
			if (y - 1 >= 0) {
				if (this.arrayOfCells[x + 2][y - 1].counterValue === null) {
					result.push({ x: x + 2, y: y - 1, counterValue: null });
				}
			}
			if (y + 1 < 10) {
				if (this.arrayOfCells[x + 2][y + 1].counterValue === null) {
					result.push({ x: x + 2, y: y + 1, counterValue: null });
				}
			}
		}
		if (x - 2 >= 0) {
			if (y - 1 >= 0) {
				if (this.arrayOfCells[x - 2][y - 1].counterValue === null) {
					result.push({ x: x - 2, y: y - 1, counterValue: null });
				}
			}
			if (y + 1 < 10) {
				if (this.arrayOfCells[x - 2][y + 1].counterValue === null) {
					result.push({ x: x - 2, y: y + 1, counterValue: null });
				}
			}
		}
		if (y + 2 < 10) {
			if (x - 1 >= 0) {
				if (this.arrayOfCells[x - 1][y + 2].counterValue === null) {
					result.push({ x: x - 1, y: y + 2, counterValue: null });
				}
			}
			if (x + 1 < 10) {
				if (this.arrayOfCells[x + 1][y + 2].counterValue === null) {
					result.push({ x: x + 1, y: y + 2, counterValue: null });
				}
			}
		}
		return result;
	}

	public increment() {
		this.counterValue++;
	}

	public changeBackgroundColor(x: number, y: number) {
		if (this.arrayOfCells[x][y].counterValue != null) {
			return "#16a0a0";
		} else if (this.arrayOfCells[x][y].isActive === true) {
			return "#7febf3";
		} else {
			return "#1fcacabd";
		}
	}

	public checkIfGameFinished() {
		if (this.counterValue === 100) {
			this.title = "you win!";
		} else if (this.activeCells.length === 0 && this.counterValue != null) {
			this.title = "you lose(";
		}
	}

	public routeToAboutPage() {
		this.route.navigate(["./about"]);
	}

	public routeToHomePage() {
		this.route.navigate([""]);
	}

	public constructor(public route: Router) {
		this.counterValue = 0;
	}
}
