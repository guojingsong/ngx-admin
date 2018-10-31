import { Component, OnInit } from '@angular/core';
import { HotTableModule } from '../../../@handsontable/ce/src/public_api';

@Component({
  selector: 'ngx-handson-table',
  templateUrl: './handson-table.component.html',
  styleUrls: ['./handson-table.component.css']
})
export class HandsonTableComponent implements OnInit {

  constructor() { }
  colHeaders = [
    'Country',
    'Code',
    'Currency',
    'Level',
    'Units',
    'Date',
    'Change'
  ];
  dataObject = [
    {
      id: 1,
      flag: 'EUR',
      currencyCode: 'EUR',
      currency: 'Euro',
      level: 0.9033,
      units: 'EUR / USD',
      asOf: '08/19/2018',
      onedChng: 0.0026
    },
    {
      id: 2,
      flag: 'JPY',
      currencyCode: 'JPY',
      currency: 'Japanese Yen',
      level: 124.3870,
      units: 'JPY / USD',
      asOf: '08/19/2018',
      onedChng: 0.0001
    },
    {
      id: 3,
      flag: 'GBP',
      currencyCode: 'GBP',
      currency: 'Pound Sterling',
      level: 0.6396,
      units: 'GBP / USD',
      asOf: '08/19/2018',
      onedChng: 0.00
    },
    {
      id: 4,
      flag: 'EUR',
      currencyCode: 'EUR',
      currency: 'Euro',
      level: 0.9033,
      units: 'EUR / USD',
      asOf: '08/19/2018',
      onedChng: 0.0026
    },
    {
      id: 5,
      flag: 'JPY',
      currencyCode: 'JPY',
      currency: 'Japanese Yen',
      level: 124.3870,
      units: 'JPY / USD',
      asOf: '08/19/2018',
      onedChng: 0.0001
    },
    {
      id: 6,
      flag: 'GBP',
      currencyCode: 'GBP',
      currency: 'Pound Sterling',
      level: 0.6396,
      units: 'GBP / USD',
      asOf: '08/19/2018',
      onedChng: 0.00
    },
    {
      id: 7,
      flag: 'EUR',
      currencyCode: 'EUR',
      currency: 'Euro',
      level: 0.9033,
      units: 'EUR / USD',
      asOf: '08/19/2018',
      onedChng: 0.0026
    },
    {
      id: 8,
      flag: 'JPY',
      currencyCode: 'JPY',
      currency: 'Japanese Yen',
      level: 124.3870,
      units: 'JPY / USD',
      asOf: '08/19/2018',
      onedChng: 0.0001
    },
    {
      id: 9,
      flag: 'GBP',
      currencyCode: 'GBP',
      currency: 'Pound Sterling',
      level: 0.6396,
      units: 'GBP / USD',
      asOf: '08/19/2018',
      onedChng: 0.00
    },
    {
      id: 10,
      flag: 'EUR',
      currencyCode: 'EUR',
      currency: 'Euro',
      level: 0.9033,
      units: 'EUR / USD',
      asOf: '08/19/2018',
      onedChng: 0.0026
    },
    {
      id: 11,
      flag: 'JPY',
      currencyCode: 'JPY',
      currency: 'Japanese Yen',
      level: 124.3870,
      units: 'JPY / USD',
      asOf: '08/19/2018',
      onedChng: 0.0001
    },
    {
      id: 12,
      flag: 'GBP',
      currencyCode: 'GBP',
      currency: 'Pound Sterling',
      level: 0.6396,
      units: 'GBP / USD',
      asOf: '08/19/2018',
      onedChng: 0.00
    },
    {
      id: 13,
      flag: 'EUR',
      currencyCode: 'EUR',
      currency: 'Euro',
      level: 0.9033,
      units: 'EUR / USD',
      asOf: '08/19/2018',
      onedChng: 0.0026
    },
    {
      id: 14,
      flag: 'JPY',
      currencyCode: 'JPY',
      currency: 'Japanese Yen',
      level: 124.3870,
      units: 'JPY / USD',
      asOf: '08/19/2018',
      onedChng: 0.0001
    },
    {
      id: 15,
      flag: 'GBP',
      currencyCode: 'GBP',
      currency: 'Pound Sterling',
      level: 0.6396,
      units: 'GBP / USD',
      asOf: '08/19/2018',
      onedChng: 0.00
    },                
  ]
  stretchH = 'all';
  width = 906;
  autoWrapRow = true;
  height = 487;
  maxRows = 100;
  manualRowResize = true;
  manualColumnResize = true;
  rowHeaders = true;
  manualRowMove = true;
  manualColumnMove = true;
  contextMenu = true;
  filters = true;
  dropdownMenu = true;

  columns = [
    {
      data: 'flag',
    },
    {
      data: 'currencyCode',
      type: 'text'
    },
    {
      data: 'currency',
      type: 'text'
    },
    {
      data: 'level',
      type: 'numeric',
      numericFormat: {
        pattern: '0.0000'
      }
    },
    {
      data: 'units',
      type: 'text'
    },
    {
      data: 'asOf',
      type: 'date',
      dateFormat: 'YYYY/MM/DD'
    },
    {
      data: 'onedChng',
      type: 'numeric',
      numericFormat: {
        pattern: '0.00%'
      }
    }
  ]
  ngOnInit() {
  }
  currencyCodes = ['EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'SEK', 'NOK', 'BRL', 'CNY', 'RUB', 'INR', 'TRY', 'THB', 'IDR', 'MYR', 'MXN', 'ARS', 'DKK', 'ILS', 'PHP'];

  flagRenderer = function (instance, td, row, col, prop, value, cellProperties) {
    var currencyCode = value;
    while (td.firstChild) {
      td.removeChild(td.firstChild);
    }
    if (this.currencyCodes.indexOf(currencyCode) > -1) {
      var flagElement = document.createElement('DIV');
      flagElement.className = 'flag ' + currencyCode.toLowerCase();
      td.appendChild(flagElement);
    } else {
      var textNode = document.createTextNode(value === null ? '' : value);

      td.appendChild(textNode);
    }
  };

}


