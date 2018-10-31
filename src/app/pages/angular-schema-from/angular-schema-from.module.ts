import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DictionaryComponent, EditComponent]
})
export class AngularSchemaFromModule { }
