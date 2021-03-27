import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuthorSearchResult} from '../../model/author-search-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchAuthor(searchTerm: string): Observable<IAuthorSearchResult[]>{
    const params = new HttpParams().append('searchTerm', searchTerm);
    return this.http.get<IAuthorSearchResult[]>(`api/search`, { params } );
  }
}


