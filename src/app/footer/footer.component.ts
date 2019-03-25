import {Component,OnInit} from '@angular/core';


@Component({
  selector:'my-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']
})

export class FooterComponent implements OnInit{
footerText:any;
constructor(){

}

ngOnInit(){
 this.footerText='My Footer';
}

}
