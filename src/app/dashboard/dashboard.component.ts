import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Repo } from '../shared/models/api';
import { GithubService } from '../shared/services/github.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  repos: Observable<Repo[]> | undefined;

  constructor(private githubService: GithubService, private router: Router) {}

  onSearch(searchText: string): void {
    this.getRepos(searchText);
  }

  onRepoSelect(repo: Repo): void {
    this.router.navigate(['details/'], { state: repo });
  }

  private getRepos(searchText: string) {
    this.repos = this.githubService
      .getRepos(searchText);
  }
}
