import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
 contacts!:Contact[];
 constructor(private contactService: ContactService){}
  ngOnInit(): void {
    this.contacts=this.contactService.getAllContact();
  }
  deleteContact(id:number){
    this.contactService.deleteContactById(id);
  }
}
