import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  executaComando() {
    let res = this.soma();

    console.log(`Valor de soma: ${res}`);
  }

  soma(): number {
    let valor = 0;
    valor += 1;
    valor += 10;

    return valor;
  }
}
