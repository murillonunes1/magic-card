import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-filters',
  templateUrl: './card-filters.component.html',
  styleUrls: ['./card-filters.component.css']
})
export class CardFiltersComponent {
  @Output() filtersChanged = new EventEmitter<{name: string, block: string}>();

  cardName: string = '';
  selectedBlock: string = '';

  blocks = ['Amonkhet', 'Ixalan', 'Zendikar', 'Ravnica', 'Onslaught'];

  onFiltersChange() {
    this.filtersChanged.emit({ name: this.cardName, block: this.selectedBlock });
  }

  selectBlock(block: string) {
    this.selectedBlock = block;
    this.onFiltersChange();
  }
}

