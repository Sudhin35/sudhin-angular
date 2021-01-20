import { Injectable } from '@angular/core';
import {
    HttpClient,
  } from '@angular/common/http';
import { environment } from './../../environments/environment'; 


@Injectable({
  providedIn: 'root',
})
export class SpaceProgramService {

  constructor(private http: HttpClient) { }


  getLaunches(year ,launch , landing) {
    return this.http.get<any>(
      `${environment.apiUrl}/?limit=100&` + `launch_success=` + launch + `&land_success` + landing + `&launch_year=` + year
    );
  }






}


