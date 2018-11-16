import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { JsonSchemaFormService } from '../json-schema-form.service';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'table-widget',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)">
    </ng2-smart-table>`
})
export class TableComponent implements OnInit {
  options: any;
  itemCount: number;
  previousLayoutIndex: number[];
  previousDataIndex: number[];
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService
  ) {
    //const data = this.service.getData();
    //this.source.load(data);
   }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.layoutNode.items.forEach(element => {
      this.settings.columns[element.name] =  {
          title: element.name,
          type: 'string',
      }
    });
    
  }
}
