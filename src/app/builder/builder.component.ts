import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem,copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  public input_elements:any = [
    { type:'text',name:'',id:'',class:'',show:true},
    { type:'email',name:'',id:'',class:'' ,show:true},
    { type:'password',name:'',id:'',class:'' ,show:true}
  ];
  /*

  */
  public design_elements :any  = [
    
  ];

  constructor() { }
  drop(event: CdkDragDrop<object[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }


  }
  ngOnInit(): void {
  }

}
