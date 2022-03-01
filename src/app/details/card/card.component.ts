import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/shared/models/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  repo: Repo | undefined;
}
