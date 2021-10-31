import { Component, HostListener } from '@angular/core';
import { GRID_CELLS, GridCell, Id } from '../../constants/grid-cell';
import { KeyCode } from '../../constants/key-code';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  gridCells: GridCell[] = GRID_CELLS;
  activeCell: GridCell = GRID_CELLS[0];

  @HostListener('document:keydown', ['$event.keyCode'])
  handleKeyDown(keyCode: number) {
    let nextActiveCellId: Id | null = null;
    const { destination } = this.activeCell;

    if (keyCode === KeyCode.ArrowLeft) {
      nextActiveCellId = destination.left;
    }

    if (keyCode === KeyCode.ArrowRight) {
      nextActiveCellId = destination.right;
    }

    if (keyCode === KeyCode.ArrowUp) {
      nextActiveCellId = destination.up;
    }

    if (keyCode === KeyCode.ArrowDown) {
      nextActiveCellId = destination.down;
    }

    if (nextActiveCellId) {
      this._setActiveCell(nextActiveCellId);
    }
  }

  handleHover(id: Id) {
    this._setActiveCell(id);
  }

  private _setActiveCell(id: Id) {
    this.activeCell = this.gridCells.find((cell) => cell.id === id)!;
  }
}
