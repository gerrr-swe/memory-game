import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from './cat.type';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = "https://cataas.com/api/cats?type=square&skip=0&limit=8";
  public images: string[] = [];

  constructor(private http: HttpClient) { }

  public getImages() {
    this.http.get<Cat[]>(this.apiUrl).subscribe({
      next: (cats) => {
        cats.forEach( cat => {
          this.images.push("https://cataas.com/cat/"+cat.id);
        });
      },
      error: (e) => { throw new Error(e)},
    });
  }
}
