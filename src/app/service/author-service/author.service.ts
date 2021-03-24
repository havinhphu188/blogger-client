import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuthor} from '../../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthorInfo(authorId: number): Observable<IAuthor>{
    return this.http.get<IAuthor>(`api/author/get-info/${authorId}`);
  }
}
