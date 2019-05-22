import { Component, OnInit } from '@angular/core';
import {MainservicesService } from './services/mainservices.service';
import {GrReports} from './model/grreports';
import {DateFormatPipe} from './Pipe/datepipe';
import { FunctionExpr } from '../../node_modules/@angular/compiler';
import { yadcf } from 'yadcf-npm';
declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private grreports;
  data;
  table;
  public limit: number = 10;
 buttonValue ='PureGRData';
 showGRData=true;
  constructor(
   private dateFormatPipe:DateFormatPipe,
   private mainService:MainservicesService
  ) {}
  ngOnInit() {
    this.createTable1();

    this.mainService.getGrReports().subscribe(data=>{
     
   
    this.limit=data.arr.length;
    this.data=data;
    this.grreports =data.arr;
   console.log(data.arr);
   });
  }
  
  pureGrData(){
    if(this.showGRData){
    this.showGRData=false;
    }else{
      this.showGRData=true;
    }
    if(this.buttonValue=='PureGRData')
    {
      this.buttonValue ='ShowAllData';
    }else{
    this.buttonValue ='PureGRData';
    }
  }
  /*getFilteredDate(startDate:string,endDate:string):void{
    
    const datevalue={
      startDate:startDate,
      endDate:endDate
     }
   
   this.mainService.getGrReportByDate(datevalue).subscribe(data=>{
   
    console.log(data.arr);
    this.grreports =data.arr;
  });

    //this.grreports=this.dateFormatPipe.transform(this.data.arr,startDate,endDate);  
  }*/



  getFilteredDate(startDate:string, endDate:string): void { 
 
   
      $('#example').DataTable( {
        destroy:true,
        autoWidth:false,
        info:true,
        JQueryUI:true,
        ordering:true,
        paging:true,
       
        scrollCollapse:true,
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } ).clear();
    
    if ( $.fn.DataTable.isDataTable('#example') ) {
      $('#example').DataTable().destroy();
    }
    const datevalue={
      startDate:startDate,
      endDate:endDate
     }
     
this.mainService.getGrReportByDate(datevalue).subscribe(data=>{
  this.limit=data.arr.length;
    this.grreports=data.arr;
    console.log(data);
    setTimeout(function(){
      
    $('#example').DataTable( {
      destroy:true,
          autoWidth:true,
      info:true,
      JQueryUI:true,
      ordering:true,
      paging:true,
     
      scrollCollapse:true,
        dom: 'Bfrtip',

        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
  },3000)
  });



  }  





  
   createTable1(){
     setTimeout(function(){
$('#example').dataTable( {
  destroy:true,
   autoWidth:true,
   info:true,
   JQueryUI:true,
   ordering:true,
   paging:true,
  
   scrollCollapse:true,
     dom: 'Bfrtip',
     buttons: [
         'copy', 'csv', 'excel', 'pdf', 'print'
     ]
 }).yadcf([
  {column_number : 0,filter_type: "auto_complete",text_data_delimiter: ","},
  {column_number : 1,filter_type: "auto_complete",text_data_delimiter: ","},
  {column_number : 2,filter_type: "auto_complete",text_data_delimiter: ","}
]); 
},4000);

   }
  
  

}
