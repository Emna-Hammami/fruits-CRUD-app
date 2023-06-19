import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  categoryForm: Category = {
    id: 0,
    name: '',
    description: '',
  };
 
  constructor(private cs:CategoryService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  createFruit(){
    this.cs.create(this.categoryForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/category/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }


}
