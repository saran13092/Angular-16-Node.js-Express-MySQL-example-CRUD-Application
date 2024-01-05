import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Cars } from './cars';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'  
})
export class CarsService {

  constructor(private http:HttpClient) { }

  baseUrl='http://localhost:3000/'

  postdata(car:Cars):Observable<Cars>{
   return this.http.post<Cars>(`${this.baseUrl}postdata`,car);
  
  }

  getAll():Observable<Cars[]> {
    return this.http.get<Cars[]>(`${this.baseUrl}getAll`);
    }

    getByid(id:number):Observable<Cars> {
      return this.http.get<Cars>(`${this.baseUrl}getById/${id}`)
    }

    deleteById(id:number):Observable<Cars> {
      return this.http.delete<Cars>(`${this.baseUrl}deleteById/${id}`)
    } 
    
    update(id:number,car:Cars):Observable<Cars> {
      return this.http.put<Cars>(`${this.baseUrl}update/${id}`,car);
    }
    
  }
