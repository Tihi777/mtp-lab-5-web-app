import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Id } from '../../constants/grid-cell';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
})
export class GridCellComponent implements AfterViewInit, OnChanges {
  @Input() id: Id;
  @Input() isActive: boolean;

  @Output() cellClick = new EventEmitter<Id>();
  @Output() cellHover = new EventEmitter<Id>();

  @ViewChild('buttonElement') buttonElement: ElementRef<HTMLButtonElement>;

  @HostListener('keydown', ['$event'])
  test(event: any) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isActive && this.buttonElement) {
      this.buttonElement.nativeElement.focus();
    }
  }

  ngAfterViewInit() {
    if (this.isActive) {
      this.buttonElement.nativeElement.focus();
    }
  }

  handleCellClick(event: MouseEvent) {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const id: Id = +event.target.dataset.id!;

    console.log('Click ar rect ', id);

    this.cellClick.emit(id);
  }

  handleMouseEnter() {
    this.buttonElement.nativeElement.focus();

    this.cellHover.emit(this.id);
  }
}
