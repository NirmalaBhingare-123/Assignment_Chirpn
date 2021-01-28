import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-moviedetails",
  templateUrl: "./moviedetails.component.html",
  styleUrls: ["./moviedetails.component.css"]
})
export class MoviedetailsComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log("id here", this.id);
  }
}
