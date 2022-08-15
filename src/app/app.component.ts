import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Renan e Thiaga';
  logo = 'favicon.ico';
  exibe = true;

  exibirNome(){
    return 'Thiaga';
   }

   exibirAlerta(){
    alert("Hoje tem Prova ;-;");
   }

   Esconder(){
    this.exibe = false;
    if(this.exibe = false){
     return "";
    }else{
      return "Texto exibido"
    }
   }
}

