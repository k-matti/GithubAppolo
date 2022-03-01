import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repo } from 'src/app/shared/models/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  repo: Repo | undefined;

  @Output()
  select = new EventEmitter<Repo>();

  onRepoSelect() {
    this.select.emit(this.repo);
  }
}
