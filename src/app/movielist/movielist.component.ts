import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movielist",
  templateUrl: "./movielist.component.html",
  styleUrls: ["./movielist.component.css"]
})
export class MovielistComponent implements OnInit {
  genersList: Array<any> = [];
  constructor(private router: Router, private movieList: MovieService) {}

  ngOnInit() {
    this.getMovieList();
  }
  getMovieList() {
    this.movieList.getMovieList().subscribe((data: any) => {
      this.genersList = data.genres;
    });
  }
  movieClick(id: number) {
    console.log("id here", id);
    this.router.navigate(["/details", id]);
  }
}
