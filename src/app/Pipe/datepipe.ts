import{Pipe,PipeTransform} from '@angular/core';
import{DatePipe, I18nSelectPipe} from '@angular/common';
import {GrReports} from '../model/grreports';
import {MainservicesService } from '../services/mainservices.service';
@Pipe({name:'dateFormatPipe'})

export class DateFormatPipe implements PipeTransform{
   private grreports:GrReports[]=[]

   constructor(
    private mainService:MainservicesService
   ) {}
    transform(projectList,startDate:string,endDate:string){
        var filteredArray = new Array();
       
   
            
                
          
      
        }
    
    }
  

        
