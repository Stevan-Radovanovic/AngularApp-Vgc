import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedHeroComponent } from './red-hero/red-hero.component';
import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [RedHeroComponent, LoadingComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [RedHeroComponent, LoadingComponent],
})
export class SharedModule {}
