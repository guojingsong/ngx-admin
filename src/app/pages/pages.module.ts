import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { JsonFromDemoComponent } from './json-from-demo/json-from-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule } from '@angular/material';

import { JsonSchemaFormModule, MaterialDesignFrameworkModule } from 'angular2-json-schema-form';

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
    BrowserModule, BrowserAnimationsModule, MatCardModule, MatToolbarModule,
    MaterialDesignFrameworkModule, JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule)
   ],
  declarations: [
    ...PAGES_COMPONENTS,
    JsonFromDemoComponent,
  ],
})
export class PagesModule {
}
