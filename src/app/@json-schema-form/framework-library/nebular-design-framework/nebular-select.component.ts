import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { JsonSchemaFormService } from '../../json-schema-form.service';
import { buildTitleMap, isArray } from '../../shared';

@Component({
  selector: 'nebular-select-widget',
  template: `
    <div>
      <nb-select outline
      [formControl]="formControl"
      [attr.aria-describedby]="'control' + layoutNode?._id + 'Status'"
      [attr.name]="controlName"
      [id]="'control' + layoutNode?._id"
      [multiple]="options?.multiple"
      [placeholder]="options?.notitle ? options?.placeholder : options?.title"
      [required]="options?.required"
      [style.width]="'100%'"
      (blur)="options.showErrors = true">
      <ng-template ngFor let-selectItem [ngForOf]="selectList">
      <nb-option *ngIf="!isArray(selectItem?.items)"
        [value]="selectItem?.value">
        <span [innerHTML]="selectItem?.name"></span>
      </nb-option>
    </ng-template>
      </nb-select>
    </div>
    <mat-error *ngIf="options?.showErrors && options?.errorMessage"
      [innerHTML]="options?.errorMessage"></mat-error>`,
  styles: [`
    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }
    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex
      .mat-form-field-infix { width: initial; }
  `],
})
export class NebularSelectComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;
  controlDisabled = false;
  boundControl = false;
  options: any;
  selectList: any[] = [];
  isArray = isArray;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService
  ) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.selectList = buildTitleMap(
      this.options.titleMap || this.options.enumNames,
      this.options.enum, !!this.options.required, !!this.options.flatList
    );
    this.jsf.initializeControl(this, !this.options.readonly);
    if (!this.options.notitle && !this.options.description && this.options.placeholder) {
      this.options.description = this.options.placeholder;
    }
  }

  updateValue(event) {
    this.options.showErrors = true;
    this.jsf.updateValue(this, event.value);
  }
}
