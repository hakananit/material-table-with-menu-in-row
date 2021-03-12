import { Component } from "@angular/core";

export interface PeriodicElement {
  magaza: string;
  bolge: string;
  isyeri: string;
  segment: string;
  grup: string;
  firma: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    magaza: "value",
    bolge: "value",
    isyeri: "value",
    segment: "value",
    grup: "value",
    firma: "seçin"
  },
  {
    magaza: "value",
    bolge: "value",
    isyeri: "value",
    segment: "value",
    grup: "value",
    firma: "seçin"
  },
  {
    magaza: "value",
    bolge: "value",
    isyeri: "value",
    segment: "value",
    grup: "value",
    firma: "seçin"
  }
];
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayedColumns: string[] = [
    "magaza",
    "bolge",
    "isyeri",
    "segment",
    "grup",
    "firma"
  ];
  dataSource = ELEMENT_DATA;
}
