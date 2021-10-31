import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './core/components/grid/grid.component';
import { GridCellComponent } from './core/components/grid-cell/grid-cell.component';

@NgModule({
  declarations: [AppComponent, GridComponent, GridCellComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
