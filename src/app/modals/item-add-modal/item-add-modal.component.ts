import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-add-modal',
  templateUrl: './item-add-modal.component.html',
  styleUrls: ['./item-add-modal.component.css']
})
export class ItemAddModalComponent implements OnInit {
  itemForm: FormGroup;
  numberOfItems = 0;


  constructor(private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      name: ""
    });
   }

  ngOnInit(): void {
  }

  saveToList() {
    console.log(this.itemForm.value)
 }

}
