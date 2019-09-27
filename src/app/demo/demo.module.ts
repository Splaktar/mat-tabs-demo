import { NgModule } from '@angular/core';

import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../lib/shared.module';

import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [PageComponent],
  imports: [
    DemoRoutingModule, SharedModule
  ]
})
export class DemoModule {}
