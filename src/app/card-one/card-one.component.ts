import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-one',
  standalone: false,
  templateUrl: './card-one.component.html',
  styleUrl: './card-one.component.css'
})
export class CardOneComponent {
star =[1,2,3,4,5]
@Input() productDta :any
@Input() discountFlag = false
@Input() new =false
@Input() iconone =true
@Input() icontwo =true
@Input() iconthree =false
@Input() delprice =true
@Input() stars =true


  
}
