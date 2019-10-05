import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTargetBlank]'
})
export class TargetBlankDirective {
  @HostBinding('attr.rel') rel = 'noopener noreferrer';

  constructor() { }

}
