import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './scheam-forms-routing.module';
import { JsonSchemaFormModule } from '../../@json-schema-form/json-schema-form.module';
import { MaterialDesignFrameworkModule } from '../../@json-schema-form/framework-library/material-design-framework/material-design-framework.module';

import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    MaterialDesignFrameworkModule,
    JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule),    
  ],
  declarations: [
    ...routedComponents,
    EditComponent,
  ],
})
export class ScheamFormsModule { }
