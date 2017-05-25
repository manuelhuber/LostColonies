import { AfterContentInit, AfterViewInit, Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExpandableComponent, TIME_WHEN_ANIMATION_IS_OVER } from '../../components/expandables/expandable.component';
import { MapComponent } from '../../components/map/map.component';

export const LINKABLE_PARAM : string = 'link';
export const LINKABLE_MAP_HIGHLIGHT_PARAM : string = 'mapHighlight';

@Directive({selector: '[linkable]'})
export class LinkableDirective implements AfterContentInit, AfterViewInit {

  @Input('linkable') public keywords : string[];
  private scrollToMap : boolean = false;

  constructor(private el : ElementRef, private route : ActivatedRoute, private vcRef : ViewContainerRef) {
  }

  public ngAfterContentInit() : void {
    this.route.queryParams.subscribe((params : Params) => {
      let linkable : string = params[ LINKABLE_PARAM ];
      let mapHighlight : string = params[ LINKABLE_MAP_HIGHLIGHT_PARAM ];
      if (!this.el || !this.keywords || !this.keywords.length) {
        return;
      }

      // Open expandable, if it is one
      let expandable : ExpandableComponent = this.getExpandable(linkable);
      if (expandable) {
        expandable.visible = true;
      }

      // Toggle map highlight, if it is one
      let map : MapComponent = this.getMap(mapHighlight);
      if (map) {
        map.highlight(mapHighlight);
      }

      // Only scroll to expandable if there is no map
      if (expandable && !mapHighlight) {
        // Works perfectly for expandables, not for maps
        setTimeout(() => this.el.nativeElement.scrollIntoView(), TIME_WHEN_ANIMATION_IS_OVER);
      } else if (map) {
        // Scroll after viewInit
        this.scrollToMap = true;
      } else {
        this.el.nativeElement.scrollIntoView();
      }
    });
  }

  /**
   * Delayed scroll to let everything render
   * The timing with this lifecycle hook works good for maps but behaves strangely when scrolling to expandables
   */
  public ngAfterViewInit() : void {
    if (this.scrollToMap) {
      setTimeout(() => this.el.nativeElement.scrollIntoView(), TIME_WHEN_ANIMATION_IS_OVER);
    }
  }

  private getExpandable(linkable : string) : ExpandableComponent {
    if (linkable && this.keywords.some((value) => value.toLowerCase() === linkable.toLowerCase())) {
      // Dirty workaround to access the parent component since there is no official way to do this yet
      // https://github.com/angular/angular/issues/8277
      let parent = (<any> this.vcRef)._data.componentView.component;
      if (parent instanceof ExpandableComponent) {
        return parent;
      }
    }
  }

  private getMap(highlight : string) : MapComponent {
    if (highlight && this.keywords.some((value) => value.toLowerCase() === highlight.toLowerCase())) {
      // Dirty workaround to access the parent component since there is no official way to do this yet
      // https://github.com/angular/angular/issues/8277
      let parent = (<any> this.vcRef)._data.componentView.component;
      if (parent instanceof MapComponent) {
        return parent;
      }
    }
    return null;
  }

}
