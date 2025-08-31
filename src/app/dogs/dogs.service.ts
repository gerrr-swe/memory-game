import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../shared/ImageService';
import { Dog } from './dog.type';

@Injectable({
  providedIn: 'root'
})
export class DogsService implements ImageService {

  private apiUrl = "https://dog.ceo/api/breeds/image/random";
  public images: string[] = [];
  
  constructor(private http: HttpClient) { }
  
  public getImages(){
    const imageCount = 8;
    for (let i = 0; i < 8; i++) {
      this.http.get<Dog>(this.apiUrl).subscribe({
        next: (dog) => {
          this.images.push(dog.message);
        },
        error: (e) => { throw new Error(e) },
      });
    }
  };
}
