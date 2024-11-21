import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{speakers} from '../model/speaker'
@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private apiUrl = 'http://localhost:8081/speaker'; // URL de base pour les endpoints speaker

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un nouveau speaker
  addSpeaker(speaker: speakers): Observable<any> {
    return this.http.post(`${this.apiUrl}/addspeaker`, speaker, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Méthode pour récupérer tous les speakers
  getAllSpeakers(): Observable<speakers[]> {
    return this.http.get<speakers[]>(`${this.apiUrl}/getALL`);
  }

  // Méthode pour mettre à jour un speaker par son ID
  updateSpeaker(idS: number, speaker: speakers): Observable<any> {
    return this.http.put(`${this.apiUrl}/uporganisateur/${idS}`, speaker, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Méthode pour supprimer un speaker par son ID
  deleteSpeaker(idS: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${idS}`);
  }

  // Méthode pour ajouter plusieurs speakers
  addAllSpeakers(speakers: speakers[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/addall`, speakers, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
