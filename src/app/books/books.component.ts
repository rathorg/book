import { Component, OnInit } from '@angular/core';

interface book {
  name : string
  author : string
  image : string
  amount : number
}


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

books: book[] = [
  {
    name : 'Verity',
  author : 'Colleen Hoover',
  image : 'https://images-na.ssl-images-amazon.com/images/I/41d1gVUK1yL._SX331_BO1,204,203,200_.jpg',
  amount : 600,
  },
  {
    name : 'Fairy Tale',
    author: 'Stephen King',
    image : 'https://images-na.ssl-images-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg',
    amount : 800,
  }
]
  
  
  


  isShowing:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


}

