import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel } from '../add-carousel/Carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselServiceService {
  private apiUrl = 'http://localhost:8088/carousel/photos/';
  constructor(private http: HttpClient) { }
  
  getAllPhotos():Observable<Carousel>{
    const url = `${this.apiUrl}getAllID`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }

  addCarousel(property_id:string){
    const myForm = new FormData();
    myForm.append('property_id',property_id);
    const url = `${this.apiUrl}add`;
    console.log("url: "+url);
    return this.http.post<any>(url, myForm);
  }

  removeCarousel(cid:string){
    const url = `${this.apiUrl}delete/${cid}`;
    console.log("url: "+url);
    return this.http.delete<any>(url);
  }
}
