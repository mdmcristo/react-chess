import logo from '../../assets/black-king.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FiguresNames {
	FIGURE = 'Фигура',
	KING = 'Король',
	KNIGHT = 'Конь',
	PAWN = 'Пешка',
	QUEEN = 'Ферзь',
	ROOK = 'Ладья',
	BISHOP = 'Слон',
}

export class Figure {
	color: Colors;
	logo: typeof logo | null;
	cell: Cell;
	name: FiguresNames;
	id: number;

	constructor(color: Colors, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.logo = null;
		this.name = FiguresNames.FIGURE;
		this.id = Math.random();
	}

	canMove(target: Cell): boolean {
		if (target.figure?.color === this.color) {
			return false;
		}

		if (target.figure?.name === FiguresNames.KING) {
			return false
		}

		return true;
	}

	moveFigure(target: Cell) {}
}
