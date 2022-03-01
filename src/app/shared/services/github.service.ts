import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Query, Repo } from '../models/api';
import { GET_REPOS } from '../../queries/getRepo';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private apollo: Apollo) {}

  getRepos(searchText: string): Observable<Repo[]> {
    return this.apollo
      .watchQuery<Query>({
        query: GET_REPOS,
        variables: {
          name: searchText,
        },
      })
      .valueChanges.pipe(map((result) => result.data.search.edges));
  }
}
