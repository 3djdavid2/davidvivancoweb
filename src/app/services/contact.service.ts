import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URI = 'http://localhost:3000/send-email'

  constructor(private http: HttpClient) { }

  sendMessage({nombre, asunto, email, mensaje}:any) {
    const bodyRequest = {nombre, asunto, email, mensaje}
    
    return this.http.post<any>(this.URI, bodyRequest);
  }
}
