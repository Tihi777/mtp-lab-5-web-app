import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Id } from '../../constants/grid-cell';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ background: '#ef9a2c', transform: 'scale(1.05)' })),
      state('out', style({ background: 'transparent', transform: 'scale(1)' })),
      transition('in <=> out', [animate('300ms')]),
    ]),
  ],
})
export class GridCellComponent implements AfterViewChecked {
  @Input() id: Id;
  @Input() isActive: boolean;

  @Output() cellHover = new EventEmitter<Id>();

  @ViewChild('buttonElement') buttonElement: ElementRef<HTMLButtonElement>;

  handleCellClick(event: MouseEvent) {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const id: Id = +event.target.dataset.id!;

    console.log('Click ar rect ', id);
  }

  handleMouseEnter() {
    this.buttonElement.nativeElement.focus();

    this.cellHover.emit(this.id);
  }

  ngAfterViewChecked(): void {
    if (this.isActive) {
      this.buttonElement.nativeElement.focus();
    }
  }
}
