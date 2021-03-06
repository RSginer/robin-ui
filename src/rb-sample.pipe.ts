import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'rbSamplePipe'
})
@Injectable()
export class RBSamplePipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
