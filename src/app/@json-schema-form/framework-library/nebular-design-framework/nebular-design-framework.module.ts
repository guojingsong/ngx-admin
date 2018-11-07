import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatStepperModule, MatTabsModule, MatTooltipModule,
} from '@angular/material';
export const ANGULAR_NEBULAR_MODULES = [
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatStepperModule, MatTabsModule, MatTooltipModule,
];
/**
 * unused @angular/material modules:
 * MatDialogModule, MatGridListModule, MatListModule, MatMenuModule,
 * MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
 * MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule,
 * MatToolbarModule,
 */

import { JsonSchemaFormService } from '../../json-schema-form.service';
import { WidgetLibraryModule } from '../../widget-library/widget-library.module';
import { Framework } from '../framework';
import { NEBULAR_FRAMEWORK_COMPONENTS } from './index';
import { NebularDesignFramework } from './nebular-design.framework';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule,
    ...ANGULAR_NEBULAR_MODULES, WidgetLibraryModule, ThemeModule
  ],
  declarations:    [ ...NEBULAR_FRAMEWORK_COMPONENTS ],
  exports:         [ ...NEBULAR_FRAMEWORK_COMPONENTS ],
  entryComponents: [ ...NEBULAR_FRAMEWORK_COMPONENTS ],

})
export class NebularDesignFrameworkModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NebularDesignFrameworkModule,
      providers: [
        { provide: Framework, useClass: NebularDesignFramework, multi: true }
      ]
    };
  }
}
