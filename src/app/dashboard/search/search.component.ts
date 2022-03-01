import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output()
  search = new EventEmitter<string>();

  searchForm = this.formBuilder.group({
    search: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  onSearch() {
    this.search.emit(this.searchForm.get('search')!.value);
    this.searchForm.reset();
  }
}
