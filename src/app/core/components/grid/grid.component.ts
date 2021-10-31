import { Component, HostListener } from '@angular/core';
import { GRID_CELLS, GridCell, Id } from '../../constants/grid-cell';
import { KeyCode } from '../../constants/key-code';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  gridCells = GRID_CELLS;
  activeCell: GridCell;

  constructor() {
    this.activeCell = GRID_CELLS[0];
  }

  @HostListener('document:keydown', ['$event.keyCode'])
  handleKeyDown(keyCode: number) {
    let nextActiveCellId: Id | null = null;

    if (keyCode === KeyCode.ArrowLeft) {
      nextActiveCellId = this.activeCell.destination.left;
    }

    if (keyCode === KeyCode.ArrowRight) {
      nextActiveCellId = this.activeCell.destination.right;
    }

    if (keyCode === KeyCode.ArrowUp) {
      nextActiveCellId = this.activeCell.destination.up;
    }

    if (keyCode === KeyCode.ArrowDown) {
      nextActiveCellId = this.activeCell.destination.down;
    }

    if (nextActiveCellId) {
      this.activeCell = this.gridCells.find(
        (cell) => cell.id === nextActiveCellId
      )!;
    }
  }

  handleCellClick(id: Id) {
    this.activeCell = this.gridCells.find((cell) => cell.id === id)!;
  }

  handleHover(id: Id) {
    this.activeCell = this.gridCells.find((cell) => cell.id === id)!;
  }
}
