import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { JsonFromDemoComponent } from './json-from-demo/json-from-demo.component';
import { JsonSchemaFormModule } from '../@json-schema-form/json-schema-form.module';
import { MaterialDesignFrameworkModule } from '../@json-schema-form/framework-library/material-design-framework/material-design-framework.module';
import { G6FromDemoComponent } from './g6-from-demo/g6-from-demo.component';
import { AngularSchemaFromComponent } from './angular-schema-from/angular-schema-from.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    MaterialDesignFrameworkModule,
    JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    JsonFromDemoComponent,
    G6FromDemoComponent,
    AngularSchemaFromComponent,
  ],
})
export class PagesModule {
}
