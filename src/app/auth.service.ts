import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postAuth(data: any) {
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))

  }
getAuth() {
    return this.http.get<any>("http://localhost:3000/posts")
        .pipe(map((res:any)=>{
      return res;
    }))

  }
}
