import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularSchemaFromComponent } from './angular-schema-from.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{
  path: '',
  component: AngularSchemaFromComponent,
  children: [{
    path: 'dictionary',
    component: DictionaryComponent,
  }, {
    path: 'edit',
    component: EditComponent,
  },],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularSchemaRoutingModule { }

export const routedComponents = [
  AngularSchemaFromComponent,
  DictionaryComponent,
  EditComponent,
];
