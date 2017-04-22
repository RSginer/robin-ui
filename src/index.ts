import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RBSampleComponent } from './rb-sample.component';
import { RBSampleDirective } from './rb-sample.directive';
import { RBSamplePipe } from './rb-sample.pipe';
import { RBSampleService } from './rb-sample.service';

export * from './rb-sample.component';
export * from './rb-sample.directive';
export * from './rb-sample.pipe';
export * from './rb-sample.service';
/**
 * The main module
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RBSampleComponent,
    RBSampleDirective,
    RBSamplePipe
  ],
  exports: [
    RBSampleComponent,
    RBSampleDirective,
    RBSamplePipe
  ]
})
export class RobinUIModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RobinUIModule,
      providers: [RBSampleService]
    };
  }
}
