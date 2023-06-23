import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/models/contacts';
import { ContactsService } from 'src/services/contacts.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contactsList: Contact[] = [];
  isAdd = false;
  form!: FormGroup;
  isUpdate = false;

  constructor(public contactService: ContactsService) {}

  ngOnInit(): void {
    this.getContactsList();
    this.initializeForm();
  }


  initializeForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  getContactsList() {
    this.contactService.getContacts().subscribe(response => {
      this.contactsList = response;
      console.log(this.contactsList);
    });
  }

  get f(){
    return this.form.controls;
  }

  add() {
    this.form.value.id = this.contactsList.length;
    console.log(this.form.value);
    this.contactsList.push(this.form.value);
  }

  update(id: number) {
    this.isUpdate = true;
    // this.contactsList.find(item => item.id !== id);
  }

  delete(id: number) {
    this.contactsList = this.contactsList.filter(item => item.id !== id);
  }
}
