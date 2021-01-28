import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MovielistComponent } from "./movielist/movielist.component";
import { MoviedetailsComponent } from "./moviedetails/moviedetails.component";
import { RouterModule, Routes } from "@angular/router";
import { MovieService } from "./movie.service";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  { path: "movielist", component: MovielistComponent },
  { path: "details/:id", component: MoviedetailsComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MovielistComponent,
    MoviedetailsComponent
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  providers: [MovieService]
})
export class AppModule {}
