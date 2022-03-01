import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Repo } from '../shared/models/api';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  repo: Repo | undefined;

  constructor(private router: Router) {
    this.repo = this.router.getCurrentNavigation()!.extras.state as Repo;
  }
}
