import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URI = environment.baseUrl

  constructor(private http: HttpClient) { }

  sendMessage({nombre, asunto, email, mensaje}:any){
    const bodyRequest = {nombre, asunto, email, mensaje}        
    return this.http.post<any>("https://34.198.236.213:3000/send-email", bodyRequest);
  }
}
