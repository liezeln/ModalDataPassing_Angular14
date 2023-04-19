import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-item-add-modal',
  templateUrl: './item-add-modal.component.html',
  styleUrls: ['./item-add-modal.component.css']
})
export class ItemAddModalComponent implements OnInit {
  itemForm: FormGroup;
  numberOfItems = 0;
  list: any[] = [];
  addNewItem = new EventEmitter();

  constructor(private formBuilder: FormBuilder, public bsModalRef: BsModalRef) {
    this.itemForm = this.formBuilder.group({
      name: ""
    });
   }

  ngOnInit(): void {
  }

  saveToList() {
    let newItem = this.itemForm.value.name;
    if (newItem != "") {
      this.addNewItem.emit(newItem);
    }
    this.bsModalRef.hide();
 }

}
