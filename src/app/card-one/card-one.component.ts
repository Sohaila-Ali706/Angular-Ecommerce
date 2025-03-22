import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-one',
  standalone: false,
  templateUrl: './card-one.component.html',
  styleUrl: './card-one.component.css'
})
export class CardOneComponent {
@Input() product: any;
@Input() discountFlag = false
@Input() new =false
@Input() iconone =true
@Input() icontwo =true
@Input() iconthree =false
@Input() delprice =true
@Input() stars =true


  
}
