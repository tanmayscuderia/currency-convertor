import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import data from '../assets/json/config.json';
import { ConfigInterface } from '../assets/js/interface';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }
  configData: ConfigInterface = JSON.parse(JSON.stringify(data));

  baseUrl = this.configData?.currencyService?.baseUrl ?? '-';

  // latestService(symbols:string = 'symbols', base:string = 'base'): Observable<any> {
  //   return this.http.get(this.baseUrl +`latest?symbols=${symbols}&base=${base}`);
  // }

  getAllSymbols(): Observable<any> {
    return this.http.get(this.baseUrl +`symbols`);
  }
}
