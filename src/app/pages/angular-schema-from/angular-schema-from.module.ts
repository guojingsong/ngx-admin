import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { EditComponent } from './edit/edit.component';
import { AngularSchemaRoutingModule, routedComponents } from './angular-schema-from-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularSchemaRoutingModule
  ],
  declarations: [DictionaryComponent, EditComponent]
})
export class AngularSchemaFromModule { }
