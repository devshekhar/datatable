import { Injectable } from '@angular/core';
import{Http,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {GrReports} from '../model/grreports';

@Injectable()
export class MainservicesService {
 constructor(private http:Http){

 }
//for get admin data
 public getGrReports(){
 
  return this.http.get('http://13.232.110.16:3000/excel').map(res=>res.json());
 }
public getGrReportByDate(datevalue){

 return this.http.post('http://13.232.110.16:3000/datevalue',datevalue).map(res=>res.json());
 }

}
/*}*/
