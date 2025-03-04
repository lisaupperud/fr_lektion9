import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './types/Product';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lektion_9';
  // prepare API
  // detta kommer bli vår JSON
  // productData --> måste ha ett grundvärde, annars Product[] | undefined
  productData: Product[] = [];

  // private - för att komma åt utanför scopet
  constructor(private httpClient: HttpClient) {}

  // on creation of component -- så fort komponenten skapas
  // ngOnInit = always executes once
  ngOnInit() {
    console.log('Hello World');

    // subscribe: invänta data -> lite som ett promise -> inväntandet sker per automatik
    this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products') // typesafety == achieved
      .subscribe((response: Product[]) => {
        this.productData = response;
      });
  }
}
