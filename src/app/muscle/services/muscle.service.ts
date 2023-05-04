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

  delete(id: number): Observable<string> {
    return this.http.delete<string>(
      environment.iutApiBaseUrl + '/muscles/' + id
    );
  }

  update(muscle: Muscle): Observable<string> {
    return this.http.put<string>(
      environment.iutApiBaseUrl + '/muscles/' + muscle.id,
      muscle
    );
  }

  create(muscle: Muscle): Observable<string> {
    return this.http.post<string>(
      environment.iutApiBaseUrl + '/muscles',
      muscle
    );
  }

  getById(id: number): Observable<Muscle> {
    return this.http.get<Muscle>(environment.iutApiBaseUrl + '/muscles/' + id);
  }
}
