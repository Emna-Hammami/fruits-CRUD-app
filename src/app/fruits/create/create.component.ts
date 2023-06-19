import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  allCategories: Category[] = [];
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category: {
      id: 0,
      name: '',
      description: '',
    },
  };
  
 
  constructor(private fruitService:FruitsService,
    private router:Router, private cs:CategoryService) {}
 
  ngOnInit(): void {this.get();
  }
 
  get() {
    this.cs.get().subscribe((data) => {
      console.log('data : ', data);
      this.allCategories = data;
    });
  }
 
  createFruit(){
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruits/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
