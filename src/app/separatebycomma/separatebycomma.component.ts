import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-separatebycomma',
  templateUrl: './separatebycomma.component.html',
  styleUrls: ['./separatebycomma.component.css']
})
export class SeparatebycommaComponent implements OnInit {
  valuesArray!: [];
    
    
  aForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.aForm = this.formBuilder.group({
      inputString: new FormControl()
    })

  }
  // INPUT: 
  // a, b, cd ef gh, ijkl mnop

    onSubmit() {

      let stringIn =this.aForm.get('inputString')?.value;
      let commaSeparatedArray = [];
      let spaceSeparatedArray = [];

      // console.log(stringIn);
      stringIn = stringIn.split(',');
      for(let i = 0; i <= stringIn.length; i++) {
        commaSeparatedArray.push(stringIn[i]);
      }
           

      spaceSeparatedArray = commaSeparatedArray.filter(a=> a.includes(' '));

      // OUTPUT 

      console.log("SpaceSeparatedArray:  " +spaceSeparatedArray)

      console.log("CommaSeparatedArray:  " + commaSeparatedArray);
  

    }

  ngOnInit(): void {
  }



}
