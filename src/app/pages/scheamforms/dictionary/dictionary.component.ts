import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedFramework = 'nebular-design';
  exampleSchema =
  {
    "title": "項目辞書",
    "type": "object",
    "required": [
      "fieldIndex",
      "fieldId",
      "dbFieldId",
      "fieldName",
      "fieldDesign",
      "fieldType",
      "length",
      "sjisByteLength",
      "integerDigits",
      "decimalDigits",
      "regexId",
      "regexName",
      "charsetId",
      "charsetName",
      "personal",
      "dateAttr",
      "minValue",
      "maxValue",
      "domainValue",
      "field",
      "label",
      "changeHistory",
      "category",
      "domain",
      "type",
      "version"
    ],
    "additionalProperties": false,
    "properties": {
      "fieldIndex": {
        "title": "索引",
        "description": "本質的には同じであるが別のドメイン値を持つ項目を紐付けるためのインデックスとして名称を管理する。",
        "type": "string"
      },
      "fieldId": {
        "title": "項目ID",
        "description": "項目を一意に特定できるIDを管理する。",
        "type": "string",
        "minLength": 1,
        "maxLength": 100,
        "pattern": "^$|^[a-zA-Z0-9|_]+$"
      },
      "dbFieldId": {
        "title": "DB項目ID",
        "description": "DB項目を一意に特定できるIDを管理する。",
        "type": "string",
        "maxLength": 30,
        "pattern": "^$|^[a-zA-Z0-9|_]+$"
      },
      "fieldName": {
        "title": "項目名称",
        "description": "項目名称を管理する。",
        "type": "string",
        "minLength": 1,
        "pattern": "^$|^(?!.*([\\\\|:|\\*|?|\"|<|>|\\|])).*$"
      },
      "fieldDesign": {
        "title": "項目説明",
        "description": "項目の意味・項目概要を管理する。",
        "type": "string",
        "format": "textarea",
        "options": {
          "expand_height": true
        }
      },
      "fieldType": {
        "title": "項目型",
        "description": "項目型（文字型、数値型）を管理する。",
        "type": "string",
        "enum": [
          "CHAR",
          "NUMERIC",
          "DATE",
          "TIME",
          "DATE_TIME"
        ],
        "options": {
          "enum_titles": [
            "文字",
            "数値",
            "日付",
            "時刻",
            "日時"
          ]
        }
      },
      "length": {
        "title": "項目長（文字数）",
        "description": "項目長（文字数）を管理する。※設定されている場合、文字数チェックが行われる。",
        "type": "string",
        "format": "number"
      },
      "sjisByteLength": {
        "title": "バイト長（SJIS）",
        "description": "SJISの場合のバイト長を管理する。※設定されている場合、SJISバイト長での桁数チェックを行う。",
        "type": "string",
        "format": "number"
      },
      "integerDigits": {
        "title": "整数部桁数",
        "description": "整数部の最大桁数を管理する。",
        "type": "string",
        "format": "number"
      },
      "decimalDigits": {
        "title": "小数部桁数",
        "description": "小数部の最大桁数を管理する。",
        "type": "string",
        "format": "number"
      },
      "regexId": {
        "title": "正規表現パターンID",
        "description": "入力可能な文字を示す正規表現パターンIDを管理する。",
        "type": "string",
        "display": "definition",
        "enum": [
          ""
        ],
        "options": {
          "enum_titles": [
            ""
          ]
        }
      },
      "regexName": {
        "title": "正規表現パターン名称",
        "description": "入力可能な文字を示す正規表現パターン名称を管理する。",
        "type": "string",
        "display": "design",
        "enum": [
          ""
        ],
        "options": {
          "enum_titles": [
            ""
          ]
        }
      },
      "charsetId": {
        "title": "入力可能文字ID",
        "description": "入力可能文字IDを選択する。",
        "type": "string",
        "display": "definition",
        "enum": [
          ""
        ],
        "options": {
          "enum_titles": [
            ""
          ]
        }
      },
      "charsetName": {
        "title": "入力可能文字名称",
        "description": "入力可能文字名称を選択する。",
        "type": "string",
        "display": "design",
        "enum": [
          ""
        ],
        "options": {
          "enum_titles": [
            ""
          ]
        }
      },
      "personal": {
        "title": "個人情報",
        "description": "個人情報の有無を管理する。",
        "type": "boolean",
        "default": false,
        "enum": [
          false,
          true
        ],
        "options": {
          "enum_titles": [
            "-",
            "◯"
          ]
        }
      },
      "dateAttr": {
        "title": "日付属性",
        "description": "日付項目の属性を管理する。",
        "type": "string",
        "enum": [
          "",
          "JAPAN_BUSINESS_DAY"
        ],
        "options": {
          "enum_titles": [
            "",
            "営業日"
          ]
        }
      },
      "minValue": {
        "title": "最小値",
        "description": "数値の場合に取り得る最小値を管理する。",
        "type": "string",
        "format": "number"
      },
      "maxValue": {
        "title": "最大値",
        "description": "数値の場合に取り得る最大値を管理する。",
        "type": "string",
        "format": "number"
      },
      "domainValue": {
        "title": "ドメイン",
        "type": "array",
        "format": "table",
        "uniqueItems": false,
        "items": {
          "title": "ドメイン",
          "type": "object",
          "required": [
            "domainId",
            "domainName"
          ],
          "additionalProperties": false,
          "properties": {
            "domainId": {
              "title": "ドメイン値",
              "description": "項目が取り得るドメイン値を管理する。",
              "type": "string",
              "maxLength": 100,
              "pattern": "^$|^ $|^[a-zA-Z0-9|_]+$"
            },
            "domainName": {
              "title": "ドメイン名称",
              "description": "項目が取り得るドメイン値の名称",
              "type": "string",
              "pattern": "^$|^(?!.*([\\\\|:|\\*|?|\"|<|>|\\|])).*$"
            }
          }
        }
      },
      "field": {
        "title": "関連項目",
        "type": "array",
        "format": "table",
        "uniqueItems": false,
        "items": {
          "title": "関連項目",
          "description": "ドメイン値を持つ項目にのみ登録し、機能毎に利用可能範囲を制御する場合に利用する。",
          "type": "object",
          "required": [
            "fieldId",
            "dbFieldId",
            "fieldName",
            "fieldDesign",
            "domainValue"
          ],
          "additionalProperties": false,
          "properties": {
            "fieldId": {
              "title": "項目ID",
              "description": "項目を一意に特定できるシステムIDを管理する。",
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^$|^[a-zA-Z0-9|_]+$"
            },
            "dbFieldId": {
              "title": "DB項目ID",
              "description": "DB項目を一意に特定できるIDを管理する。",
              "type": "string",
              "maxLength": 30,
              "pattern": "^$|^[a-zA-Z0-9|_]+$"
            },
            "fieldName": {
              "title": "項目名称",
              "description": "項目を一意に特定するための名称を管理する。",
              "type": "string",
              "minLength": 1,
              "pattern": "^$|^(?!.*([\\\\|:|\\*|?|\"|<|>|\\|])).*$"
            },
            "fieldDesign": {
              "title": "項目説明",
              "description": "項目の意味・項目概要を管理する。",
              "type": "string"
            },
            "domainValue": {
              "title": "ドメイン",
              "type": "array",
              "format": "table",
              "uniqueItems": false,
              "items": {
                "title": "ドメイン",
                "type": "object",
                "required": [
                  "domainId"
                ],
                "additionalProperties": false,
                "properties": {
                  "domainId": {
                    "title": "ドメイン値",
                    "description": "項目が取り得るドメイン値を管理する。",
                    "type": "string",
                    "pattern": "^$|^ $|^[a-zA-Z0-9|_]+$"
                  }
                }
              }
            }
          }
        }
      },
      "label": {
        "title": "業務区分",
        "type": "array",
        "format": "table",
        "items": {
          "$ref": "#/definitions/LabelItem"
        }
      },
      "changeHistory": {
        "title": "変更履歴",
        "type": "array",
        "format": "table",
        "items": {
          "$ref": "#/definitions/ChangeHistoryItem"
        }
      },
      "category": {
        "title": "カテゴリ",
        "type": "string",
        "display": "none"
      },
      "domain": {
        "title": "コンフィグドメイン",
        "description": "FW向けのキーを管理する。",
        "type": "string",
        "default": "dictionary",
        "display": "none"
      },
      "type": {
        "title": "コンフィグタイプ",
        "description": "FW向けのキーを管理する。",
        "type": "string",
        "default": "field",
        "display": "none"
      },
      "version": {
        "title": "バージョン",
        "description": "定義バージョンを管理する。",
        "type": "string",
        "default": "2.0.1",
        "display": "none"
      }
    },
    "definitions": {
      "LabelItem": {
        "title": "業務区分",
        "type": "object",
        "required": [
          "label"
        ],
        "additionalProperties": false,
        "properties": {
          "label": {
            "title": "業務区分",
            "description": "業務分類を管理する。",
            "type": "string"
          }
        }
      },
      "ChangeHistoryItem": {
        "title": "変更履歴",
        "type": "object",
        "required": [
          "changeVersion",
          "changeDate",
          "changedBy",
          "changes"
        ],
        "additionalProperties": false,
        "properties": {
          "changeVersion": {
            "title": "変更バージョン",
            "description": "変更バージョンを管理する。",
            "type": "string",
            "minLength": 1
          },
          "changeDate": {
            "title": "変更日",
            "description": "変更日を管理する。",
            "type": "string",
            "format": "date",
            "minLength": 1
          },
          "changedBy": {
            "title": "変更者",
            "description": "変更者を管理する。",
            "type": "string",
            "minLength": 1
          },
          "changes": {
            "title": "変更内容",
            "description": "変更内容を管理する。",
            "type": "string",
            "minLength": 1
          }
        }
      }
    }
  }
  exampleData = {
  };

  displayData: any = null;

  exampleOnSubmitFn(formData) {
    this.displayData = formData;
  }  

}
