import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { MatCardModule } from '@angular/material/card';
import { NavigationComponent } from './navigation/navigation.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    DetailsComponent,
    NavigationComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatCardModule
  ]
})
export class DetailsModule { }
