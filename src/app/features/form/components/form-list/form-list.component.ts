import { Component, computed, inject, signal } from '@angular/core'
import { Form } from '../../models/form.model'
import { FormService } from '../../services/form.service'
import { FormCardComponent } from '../form-card/form-card.component'

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { RouterLink } from '@angular/router'
import { CardComponent } from '../../../../core/components/card/card.component'
import { DialogComponent } from '../../../../core/components/dialog/dialog/dialog.component'

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [
    CardComponent,
    FormCardComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    DialogComponent
  ],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css',
})
export class FormListComponent {
  valueInput = signal('')
  forms = signal<Form[]>([])
  formService = inject(FormService)
  formFilter = computed(() => {
    return this.forms().filter((f) =>
      f.title.toLowerCase().includes(this.valueInput().toLowerCase()),
    )
  })

  constructor() {
    this.loadForms().then(() => console.log(`All forms loaded:`, this.forms()))
  }

  async loadForms() {
    console.log('loadForms')
    try {
      const forms = await this.formService.loadForm({})
      this.forms.set(forms)
    } catch (err) {
      console.error(err)
    }
  }

  get value(): string {
    return this.valueInput()
  }

  set value(newValue: string) {
    this.valueInput.set(newValue)
  }

  formEmpty(value: string): string {
    return value
      ? `Aucun formulaire contient: ${value}`
      : 'Aucun formulaire trouvé'
  }
  onFormUpdated(updatedForm: Form) {
    console.log('onFormUpdated:', updatedForm)
    const forms = this.forms();
    const newForms = forms.map(form => (
      form.id === updatedForm.id ? updatedForm : form
    ));
    this.forms.set(newForms);
  }
}
