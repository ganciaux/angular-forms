import { Routes } from '@angular/router';
import { FormListComponent } from './core/features/form/components/form-list/form-list.component';
import { FormAddComponent } from './core/features/form/components/form-add/form-add.component';
import { FormEditComponent } from './core/features/form/components/form-edit/form-edit.component';
import { FormViewComponent } from './core/features/form/components/form-view/form-view.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
      path: 'forms',
      canActivateChild: [],
      children: [
        {
          path: '', 
          component: FormListComponent,
          title: 'forms',
  
        },
        {
          path: 'add', 
          component: FormAddComponent,
          title: 'form add',
  
        },
        {
          path: 'edit/:id',
          component: FormEditComponent,
          title: 'form edit',
        },
        {
          path: ':id', 
          component: FormViewComponent,
          title: 'form view',
        },
      ],
    },
    { path: '',  title: 'forms', redirectTo: '/forms', pathMatch: 'full' },
    { path: '**',  title: 'Page not found', component: PageNotFoundComponent },
  ];