import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "../board/board.component";
import { CellComponent } from "../board/cell/cell.component";

const routes: Routes = [
	{
		path: "",
		component: BoardComponent,
	},
];

@NgModule({
	declarations: [BoardComponent, CellComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GameModule {}
