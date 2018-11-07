import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheamFormsComponent } from './scheam-forms.component';
import { EditComponent } from './edit/edit.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
const routes: Routes = [{
  path: '',
  component: ScheamFormsComponent,
  children: [{
    path: 'edit',
    component: EditComponent,    
  },
  {
    path: 'dictionary',
    component: DictionaryComponent,    
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  ScheamFormsComponent,
];
