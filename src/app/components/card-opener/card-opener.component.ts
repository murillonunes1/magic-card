import { Component, OnInit } from '@angular/core';
import { MagicApiService } from 'src/app/services/magic-api.service.';

@Component({
  selector: 'app-card-opener',
  templateUrl: './card-opener.component.html',
  styleUrls: ['./card-opener.component.css']
})
export class CardOpenerComponent implements OnInit {
  setCode: string = '';
  cards: any[] = [];
  openedCards: any[] = [];

  constructor(private magicApiService: MagicApiService) { }

  ngOnInit(): void { }

  async openPack() {
    this.cards = await this.magicApiService.getCards(this.setCode);
    this.openedCards = this.cards.sort(() => 0.5 - Math.random()).slice(0, 15);
  }
}

