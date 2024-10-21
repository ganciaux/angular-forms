import { Routes } from '@angular/router'
import { FormListComponent } from './features/form/components/form-list/form-list.component'
import { FormAddComponent } from './features/form/components/form-add/form-add.component'
import { FormEditComponent } from './features/form/components/form-edit/form-edit.component'
import { FormViewComponent } from './features/form/components/form-view/form-view.component'
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'
import { AuthComponent } from './features/auth/components/auth.component'
import { authGuard } from './core/guards/auth/auth.guard'
import { loginGuard } from './core/guards/auth/login.guard'
import { UserAccountComponent } from './features/user/components/user-account/user-account.component'

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [loginGuard],
    component: AuthComponent,
    title: 'login',
  },
  {
    path: 'users',
    canActivateChild: [authGuard],
    children: [
      {
        path: 'account',
        component: UserAccountComponent,
        title: 'account',
      },
    ],
  },
  {
    path: 'forms',
    canActivateChild: [authGuard],
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
  { path: '', title: 'forms', redirectTo: '/forms', pathMatch: 'full' },
  { path: '**', title: 'Page not found', component: PageNotFoundComponent },
]
