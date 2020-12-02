import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem,copyArrayItem} from '@angular/cdk/drag-drop';
import { element } from 'protractor';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  public input_elements:any = [
    { type:'text',name:'text',placeholder:'',id:'',class:'',show:true},
    { type:'email',name:'email',placeholder:'',id:'',class:'' ,show:true},
    { type:'password',name:'password',placeholder:'',id:'',class:'' ,show:true}
  ];
  /*

  */
  public design_elements :any  = [
    
  ];
  public selected_element:any = null;
  public selected_option_name = "";
  public selected_option_placeholder = "";
  public selected_option_id = "";
  public selected_option_class = "";

  public is_show_element_options : boolean = false;
  
  
  constructor() { 
  }


  select_options(element:any){
    this.is_show_element_options = true;
    this.selected_element = element;
    this.selected_option_name = element.name;
    this.selected_option_id = element.id;
    this.selected_option_class = element.class;
    this.selected_option_placeholder = element.placeholder;

  }

  onKeyUpName(){
    this.selected_element.name = this.selected_option_name;//value;
  }

  onKeyUpId(){
    this.selected_element.id = this.selected_option_id;
  }
  onKeyUpClass(){
    this.selected_element.class = this.selected_option_class;
  }
  onKeyUpPlaceholder(){
    this.selected_element.placeholder = this.selected_option_placeholder;
  }


  deleteElement(){
    var index = this.design_elements.indexOf(this.selected_element);
    this.design_elements.splice(index,1);
    this.clearSelectedElement();      
  }

  clearSelectedElement(){
    this.selected_element = null;
    this.selected_option_placeholder = "";
    this.selected_option_id = "";
    this.selected_option_name = "";
    this.selected_option_class = "";
    this.is_show_element_options = false;    
  }
  drop(event: CdkDragDrop<object[]>) {
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
