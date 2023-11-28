import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifs: Gif[] = [];
  private _tagHistory: string[] = [];

  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory() {
    return [...this._tagHistory];
  }

  private orginizeHistory(phrase: string){
    phrase = phrase.toLowerCase();
    console.log(this._tagHistory);
    this._tagHistory = this.tagHistory.filter(x => x !== phrase);
    this._tagHistory.unshift(phrase);
    this._tagHistory.splice(10)
    this.saveLocalStorage();
  }

  getList(phrase : string): void {
    if (!phrase) return;
    if (phrase.length === 0) return;

    this.orginizeHistory(phrase);

    this.gifs = [
      { title: phrase, images: { downsized_medium:  { url: './assets/image.svg'}} },
      { title: 'Title 1', images: { downsized_medium:  { url: './assets/image.svg'}}},
      { images: { downsized_medium:  { url: './assets/image.svg'}}},
    ];

    return;

    const params = new HttpParams()
      .set("key", "123")
      .set("q", phrase);

    this.httpClient.get<SearchResponse>("", { params })
      .subscribe(response =>
      {
        this.gifs = response.data;
      });
  }

  private saveLocalStorage(): void {
    localStorage.setItem('gifs-history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    const temp = localStorage.getItem('gifs-history');
    if (!temp) return;
    this._tagHistory = JSON.parse(temp);
  }
}
