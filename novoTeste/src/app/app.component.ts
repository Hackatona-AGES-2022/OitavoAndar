import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/services/wordService';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  constructor(public WordService : WordService){

  }

  ngOnInit(): void {

    document.addEventListener('keydown', (e)=>this.handleChange(e.key));
  } 
  

  keyboard=[
    {key:'Q',class:''},
    {key:'W',class:''},
    {key:'E',class:''},
    {key:'R',class:''},
    {key:'T',class:''},
    {key:'Y',class:''},
    {key:'U',class:''},
    {key:'I',class:''},
    {key:'O',class:''},
    {key:'P',class:''},
    {key:'A',class:''},
    {key:'S',class:''},
    {key:'D',class:''},
    {key:'F',class:''},
    {key:'G',class:''},
    {key:'H',class:''},
    {key:'J',class:''},
    {key:'K',class:''},
    {key:'L',class:''},
    {key:'Z',class:''},
    {key:'X',class:''},
    {key:'C',class:''},
    {key:'V',class:''},
    {key:'B',class:''},
    {key:'N',class:''},
    {key:'M',class:''},

    {key:'ENTER',class:''},
    {key:'BACKSPACE',class:''},
  ]

  boxes=[
    [{class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}],
    [{class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}],
    [{class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}],
    [{class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}],
    [{class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}],
    [{class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}],
    [{class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}],
    [{class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}, {class: '', key:''}],

  ]
  
  rowIndex=0; //linha
  currentRowIndex=0; //coluna

  palavra = ""

  //pega digitacao
  handleChange(key:any){
    console.log({key})
    console.log(key.length)
    if(key.length===1){
      this.palavra += key
    }

//backspace pressed
if(key.toUpperCase()==='BACKSPACE'){
  if(this.currentRowIndex>0){
  this.clearKeyFromCurrentIndex()
  }
  
  return
}

//enter pressed
if(key.toUpperCase()==='ENTER'){
  if(this.currentRowIndex===9&&this.rowIndex!==9){ 
    //manda para back
    this.WordService.getColors(this.palavra)
    

    this.rowIndex++
    this.currentRowIndex=0
  }
  if(this.currentRowIndex==9&&this.rowIndex==9){
    this.colorTable()
  }
  
  return
}

if(key.length>1){
  return
}

//normal pressed
    var classe=''
    if(key==='a'){
      classe='childCorrectTile'
    }
    if(this.rowIndex===1){
      classe='childCorrectTileAndPosition'
    }

    if(this.currentRowIndex<9&&this.rowIndex<10){
    this.boxes[this.rowIndex][this.currentRowIndex]={class: classe,key:key};
    console.log({box:this.boxes})
    this.currentRowIndex++
    }
    
  }

  clearKeyFromCurrentIndex(){
    console.log('backspace pressed')
    this.boxes[this.rowIndex][this.currentRowIndex-1]={class:'',key:''};
    this.currentRowIndex--
    console.log({currentIndex:this.currentRowIndex,box:this.boxes})
  }

  colorTable(){

  }
}
