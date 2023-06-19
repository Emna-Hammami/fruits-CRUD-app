import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

declare var window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCategories: Category[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private cs: CategoryService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    console.log('before get  : ');
    this.get();
  }
 
  get() {
    this.cs.get().subscribe((data) => {
      console.log('data : ', data);
      this.allCategories = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.cs.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCategories = this.allCategories.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
