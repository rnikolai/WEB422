import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { Employee, Position } from "./vm-typicode" // Emlpoyee not used

@Injectable()
export class PositionService {
  private url = "https://protected-wildwood-80515.herokuapp.com";

  private positions: string[] = [];

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/positions`)
  }

}
