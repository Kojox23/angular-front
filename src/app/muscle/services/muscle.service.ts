import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Muscle } from '../models/muscle';

@Injectable({
  providedIn: 'root',
})
export class MuscleService {
  constructor(private http: HttpClient) {}

  get(): Observable<Muscle[]> {
    return this.http.get<Muscle[]>(environment.iutApiBaseUrl + '/muscles');
  }
}
