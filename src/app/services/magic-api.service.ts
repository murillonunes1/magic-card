import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MagicApiService {

  private baseUrl = 'https://api.magicthegathering.io/v1';

  constructor() { }

  async getSets(filters: { name: string, block: string }): Promise<any> {
    try {
      const query = [];
      if (filters.name) {
        query.push(`name=${filters.name}`);
      }
      if (filters.block) {
        query.push(`block=${filters.block}`);
      }
      const response = await axios.get(`${this.baseUrl}/sets?${query.join('|')}`);
      return response.data.sets;
    } catch (error) {
      console.error('Error fetching sets:', error);
      throw error;
    }
  }

  async getBooster(setId: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/sets/${setId}/booster`);
      return response.data.cards;
    } catch (error) {
      console.error('Error fetching booster:', error);
      throw error;
    }
  }
}