import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bugarray-recipe-app';
  public recipesData :Array<any>=[
    {name:"Easy Sugar Cookies"},
    {
      name:"Easy Sugar Cookies"
    },
    {
      name:"Sausage Balls"
    },
    {
      name:"Raspberry and Almond Shortbread Thumbprints"
    },
    {
      name:"Baked Macaroni and Cheese"
    },

    {
      name:"Big Soft Ginger Cookies"
    },

  ]
  ngOnInit(): void {
      console.log(this.recipesData)
  }
}
