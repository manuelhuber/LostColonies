import { Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExpandableComponent } from '../../components/expandables/expandable.component';

export const LINKABLE_PARAM : string = 'link';

@Directive({selector: '[linkable]'})
export class LinkableDirective implements OnInit {

  @Input('linkable') public keyword : string;

  constructor(private el : ElementRef, private route : ActivatedRoute, private vcRef : ViewContainerRef, private renderer : Renderer2) {
  }

  public ngOnInit() : void {
    this.route.queryParams.subscribe((params : Params) => {
      if (this.el && params[ LINKABLE_PARAM ] && params[ LINKABLE_PARAM ] === this.keyword) {
        // Dirty workaround to access the parent component since there is no official way to do this yet
        // https://github.com/angular/angular/issues/8277
        let parent = this.vcRef._data.componentView.component;
        if (parent instanceof ExpandableComponent) {
          parent.visible = true;
        }
        this.el.nativeElement.scrollIntoView();
      }
    });
  }

}
