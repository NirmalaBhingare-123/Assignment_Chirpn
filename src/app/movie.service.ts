import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MovieService {
  constructor(private https: HttpClient) {}

  getMovieList() {
    return this.https.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41"
    );
  }
}
