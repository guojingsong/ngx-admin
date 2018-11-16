import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderableDirective } from '../shared/orderable.directive';

import { JsonSchemaFormService } from '../json-schema-form.service';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule} from '../../@ng2-smart-table';
import { HotTableModule } from '../../@handsontable/ce/src/public_api';

import { BASIC_WIDGETS } from './index';

@NgModule({
  imports:         [ CommonModule, FormsModule, ReactiveFormsModule,
    Ng2SmartTableModule,
    HotTableModule.forRoot(),  ],
  declarations:    [ ...BASIC_WIDGETS, OrderableDirective ],
  exports:         [ ...BASIC_WIDGETS, OrderableDirective ],
  entryComponents: [ ...BASIC_WIDGETS ],
  providers:       [ JsonSchemaFormService , SmartTableService ]
})
export class WidgetLibraryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WidgetLibraryModule,
      providers: [ JsonSchemaFormService , SmartTableService ]
    };
  }
}
