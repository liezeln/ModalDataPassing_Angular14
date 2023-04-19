import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ItemAddModalComponent } from '../modals/item-add-modal/item-add-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList = ["Book", "Pen"];
  bsModalRef: BsModalRef | undefined;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModalWithComponent() {
    const config = {
      class: 'modal-dialog-centered',
      initialState: {
        numberOfItems: this.itemList.length,
      }
    };
    this.bsModalRef = this.modalService.show(ItemAddModalComponent, config);
    this.bsModalRef.content.addNewItem.subscribe({
      next: (newItem: string) => this.itemList.push(newItem)
    })
  }
}
