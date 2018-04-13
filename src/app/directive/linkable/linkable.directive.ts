import { AfterContentInit, AfterViewInit, Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExpandableComponent, EXPENDABLE_ANIMATION_DURATION } from '../../components/expandables/expandable.component';
import { MapComponent } from '../../components/map/map.component';
import { DEFAULT_SCROLL_OPTIONS } from '../../shared/scroll.model';

export const LINKABLE_PARAM = 'link';
export const LINKABLE_MAP_HIGHLIGHT_PARAM = 'mapHighlight';


@Directive({selector: '[lcLinkable]'})
export class LinkableDirective implements AfterContentInit, AfterViewInit {

  @Input('lcLinkable') public keywords: string[];
  private scrollToMap = false;

  constructor(private el: ElementRef, private route: ActivatedRoute, private vcRef: ViewContainerRef) {
  }

  public ngAfterContentInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const linkable: string = params[ LINKABLE_PARAM ];
      const mapHighlight: string = params[ LINKABLE_MAP_HIGHLIGHT_PARAM ];
      if (!this.el || !this.keywords || !this.keywords.length) {
        return;
      }

      // Open expandable, if it is one
      const expandable: ExpandableComponent = this.getExpandable(linkable);
      if (expandable) {
        expandable.visible = true;
      }

      // Toggle map highlight, if it is one
      const map: MapComponent = this.getMap(mapHighlight);
      if (map) {
        map.highlight(mapHighlight);
      }

      // Only scroll to expandable if there is no map
      if (expandable && !mapHighlight) {
        // Works perfectly for expandables, not for maps
        setTimeout(() => this.el.nativeElement.scrollIntoView(DEFAULT_SCROLL_OPTIONS), EXPENDABLE_ANIMATION_DURATION);
      } else if (map) {
        // Scroll after viewInit
        this.scrollToMap = true;
      } else {
        this.el.nativeElement.scrollIntoView(DEFAULT_SCROLL_OPTIONS);
      }
    });
  }

  /**
   * Delayed scroll to let everything render
   * The timing with this lifecycle hook works good for maps but behaves strangely when scrolling to expandables
   */
  public ngAfterViewInit(): void {
    if (this.scrollToMap) {
      setTimeout(() => this.el.nativeElement.scrollIntoView(DEFAULT_SCROLL_OPTIONS), EXPENDABLE_ANIMATION_DURATION);
    }
  }

  private getExpandable(linkable: string): ExpandableComponent {
    if (linkable && this.keywords.some((value) => value.toLowerCase() === linkable.toLowerCase())) {
      // Dirty workaround to access the parent component since there is no official way to do this yet
      // https://github.com/angular/angular/issues/8277
      const parent = (<any> this.vcRef)._data.componentView.component;
      if (parent instanceof ExpandableComponent) {
        return parent;
      }
    }
  }

  private getMap(highlight: string): MapComponent {
    if (highlight && this.keywords.some((value) => value.toLowerCase() === highlight.toLowerCase())) {
      // Dirty workaround to access the parent component since there is no official way to do this yet
      // https://github.com/angular/angular/issues/8277
      const parent = (<any> this.vcRef)._data.componentView.component;
      if (parent instanceof MapComponent) {
        return parent;
      }
    }
    return null;
  }

}
