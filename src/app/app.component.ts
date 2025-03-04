import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lektion_9';

  // prepare API
  // detta kommer bli vår JSON
  productData: any;

  // private - för att komma åt utanför scopet
  constructor(private httpClient: HttpClient) {}

  // on creation of component -- så fort komponenten skapas
  // ngOnInit = always executes once
  ngOnInit() {
    console.log('Hello World');

    // subscribe: invänta data -> lite som ett promise -> inväntandet sker per automatik
    this.httpClient
      .get('https://fakestoreapi.com/products')
      .subscribe((response) => {
        this.productData = response;
      });
  }
}
