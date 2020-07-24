import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PadParamStoreService {
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;

  showFilter: boolean = false;
  pads: any[] = [];

  constructor() { }
}