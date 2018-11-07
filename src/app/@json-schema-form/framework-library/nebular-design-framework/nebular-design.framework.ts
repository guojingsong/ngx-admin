import { Injectable } from '@angular/core';

import { Framework } from '../framework';

// Nebular Design Framework
// https://github.com/angular/Nebular2
import { FlexLayoutRootComponent } from './flex-layout-root.component';
import { FlexLayoutSectionComponent } from './flex-layout-section.component';
import { NebularAddReferenceComponent } from './nebular-add-reference.component';
import { NebularOneOfComponent } from './nebular-one-of.component';
import { NebularButtonComponent } from './nebular-button.component';
import { NebularButtonGroupComponent } from './nebular-button-group.component';
import { NebularCheckboxComponent } from './nebular-checkbox.component';
import { NebularCheckboxesComponent } from './nebular-checkboxes.component';
import { NebularChipListComponent } from './nebular-chip-list.component';
import { NebularDatepickerComponent } from './nebular-datepicker.component';
import { NebularFileComponent } from './nebular-file.component';
import { NebularInputComponent } from './nebular-input.component';
import { NebularNumberComponent } from './nebular-number.component';
import { NebularRadiosComponent } from './nebular-radios.component';
import { NebularSelectComponent } from './nebular-select.component';
import { NebularSliderComponent } from './nebular-slider.component';
import { NebularStepperComponent } from './nebular-stepper.component';
import { NebularTabsComponent } from './nebular-tabs.component';
import { NebularTextareaComponent } from './nebular-textarea.component';
import { NebularDesignFrameworkComponent } from './nebular-design-framework.component';

@Injectable()
export class NebularDesignFramework extends Framework {
  name = 'nebular-design';

  framework = NebularDesignFrameworkComponent;

  stylesheets = [
    '//fonts.googleapis.com/icon?family=Nebular+Icons',
    '//fonts.googleapis.com/css?family=Roboto:300,400,500,700',
  ];

  widgets = {
    'root':            FlexLayoutRootComponent,
    'section':         FlexLayoutSectionComponent,
    '$ref':            NebularAddReferenceComponent,
    'button':          NebularButtonComponent,
    'button-group':    NebularButtonGroupComponent,
    'checkbox':        NebularCheckboxComponent,
    'checkboxes':      NebularCheckboxesComponent,
    'chip-list':       NebularChipListComponent,
    'date':            NebularDatepickerComponent,
    'file':            NebularFileComponent,
    'number':          NebularNumberComponent,
    'one-of':          NebularOneOfComponent,
    'radios':          NebularRadiosComponent,
    'select':          NebularSelectComponent,
    'slider':          NebularSliderComponent,
    'stepper':         NebularStepperComponent,
    'tabs':            NebularTabsComponent,
    'text':            NebularInputComponent,
    'textarea':        NebularTextareaComponent,
    'alt-date':        'date',
    'any-of':          'one-of',
    'card':            'section',
    'color':           'text',
    'expansion-panel': 'section',
    'hidden':          'none',
    'image':           'none',
    'integer':         'number',
    'radiobuttons':    'button-group',
    'range':           'slider',
    'submit':          'button',
    'tagsinput':       'chip-list',
    'wizard':          'stepper',
  };
}
