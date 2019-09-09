import { Component, OnInit } from '@angular/core';
import { PositionService } from "../position.service";

import { Position } from "../vm-typicode";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions: Position[];
  getPositionsSub: any;
  loadingError = false;

  constructor(private m: PositionService) { }

  ngOnInit() {
    this.getPositions();
  }

  ngOnDestroy() {
    if (this.getPositionsSub) {
      this.getPositionsSub.unsubscribe();
    }
  }

  getPositions(): void {
    try {
      this.getPositionsSub = this.m.getPositions().subscribe(positions => this.positions = positions)
    }
    catch(err) {
      this.loadingError = true;
    }
  }

}
