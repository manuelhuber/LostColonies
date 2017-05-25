import { AfterContentInit, Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExpandableComponent, TIME_WHEN_ANIMATION_IS_OVER } from '../../components/expandables/expandable.component';

export const LINKABLE_PARAM : string = 'link';

@Directive({selector: '[linkable]'})
export class LinkableDirective implements AfterContentInit {

  @Input('linkable') public keywords : string[];

  constructor(private el : ElementRef, private route : ActivatedRoute, private vcRef : ViewContainerRef) {
  }

  public ngAfterContentInit() : void {
    this.route.queryParams.subscribe((params : Params) => {
      if (this.el && params[ LINKABLE_PARAM ]
        && this.keywords.some((value) => value.toLowerCase() === params[ LINKABLE_PARAM ].toLowerCase())) {
        // Dirty workaround to access the parent component since there is no official way to do this yet
        // https://github.com/angular/angular/issues/8277
        let parent = (<any> this.vcRef)._data.componentView.component;
        if (parent instanceof ExpandableComponent) {
          parent.visible = true;
          setTimeout(() => this.el.nativeElement.scrollIntoView(), TIME_WHEN_ANIMATION_IS_OVER);
        } else {
          this.el.nativeElement.scrollIntoView();
        }
      }
    });
  }

}
