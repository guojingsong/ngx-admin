import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './scheam-forms-routing.module';
import { JsonSchemaFormModule } from '../../@json-schema-form/json-schema-form.module';
import { MaterialDesignFrameworkModule } from '../../@json-schema-form/framework-library/material-design-framework/material-design-framework.module';
import { NebularDesignFrameworkModule } from '../../@json-schema-form/framework-library/nebular-design-framework/nebular-design-framework.module';
import { Bootstrap4FrameworkModule } from '../../@json-schema-form/framework-library/bootstrap-4-framework/bootstrap-4-framework.module';
import { Bootstrap3FrameworkModule } from '../../@json-schema-form/framework-library/bootstrap-3-framework/bootstrap-3-framework.module';
import { NoFrameworkModule } from '../../@json-schema-form/framework-library/no-framework/no-framework.module';
import { EditComponent } from './edit/edit.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    MaterialDesignFrameworkModule,
    NebularDesignFrameworkModule,
    Bootstrap4FrameworkModule,
    Bootstrap3FrameworkModule,
    NoFrameworkModule,    
    JsonSchemaFormModule.forRoot(NoFrameworkModule,MaterialDesignFrameworkModule,NebularDesignFrameworkModule,Bootstrap3FrameworkModule,Bootstrap4FrameworkModule),    
  ],
  declarations: [
    ...routedComponents,
    EditComponent,
    DictionaryComponent,
  ],
})
export class ScheamFormsModule { }
