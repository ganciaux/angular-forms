import { Component, inject, signal } from '@angular/core';
import { Form } from '@angular/forms';
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {
  forms = signal<Form[]>([]);
  formService = inject(FormService);

  constructor(){
    this.loadForms()
      .then(() => console.log(`All courses loaded:`, this.forms()));
  }

  async loadForms() {
    try {
      const forms = await this.formService.loadForm({});
      this.forms.set(forms);
    }
    catch(err) {
      console.error(err);
    }
  }
}
