import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { HandsonTableComponent } from './handson-table/handson-table.component';
import { HotTableModule } from '../../@handsontable/ce/src/public_api';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    HotTableModule.forRoot(),    
  ],
  declarations: [
    ...routedComponents,
    HandsonTableComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
