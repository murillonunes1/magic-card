import { Component, OnInit } from '@angular/core';
import { MagicApiService } from 'src/app/services/magic-api.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {
  filters = { name: '', block: '' };
  sets: any[] = [];
  selectedSetId: string = '';
  creatures: any[] = [];

  constructor(private magicApiService: MagicApiService) { }

  ngOnInit(): void { }

  async onFiltersChanged(filters: { name: string, block: string }) {
    this.filters = filters;
    await this.searchSets();
  }

  async searchSets() {
    this.sets = await this.magicApiService.getSets(this.filters);
  }

  async selectSet(setId: string) {
    this.selectedSetId = setId;
    await this.fetchCreatures();
  }

  async fetchCreatures() {
    this.creatures = [];
    while (this.creatures.length < 30) {
      const cards = await this.magicApiService.getBooster(this.selectedSetId);
      const creatures = cards.filter(card => card.types.includes('creature'));
      this.creatures = [...this.creatures, ...creatures];
    }
    this.creatures = this.creatures.slice(0, 30); //
  }
}
