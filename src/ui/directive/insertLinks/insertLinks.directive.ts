import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LINKS } from './links';

export interface LinkEntry extends LinkLocation {
  phrase : string | RegExp;
}

export interface LinkLocation {
  link : string;
  linkable : string;
}

@Directive({selector: '[insertLinks]'})
export class InsertLinksDirective implements AfterViewInit {

  @Input() public exclude : LinkLocation[];

  private links : LinkEntry[] = LINKS;

  constructor(private el : ElementRef, private renderer : Renderer2) {
  }

  public ngAfterViewInit() : void {
    this.updateHtml();
  }

  private updateHtml() : void {
    let newHtml : string = this.el.nativeElement.innerHTML;
    if (newHtml && newHtml.length) {
      this.links.forEach((entry : LinkEntry) => {
        if (!this.locationExcluded(entry)) {
          newHtml = newHtml.replace(<any> entry.phrase, (matched) => this.generateLink(entry, matched));
        }
      });
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', newHtml);
    }
  }

  private locationExcluded(loc : LinkLocation) : boolean {
    return this.exclude && this.exclude.some((ex : LinkLocation) => {
        return ex.link.toLowerCase() === loc.link.toLowerCase() && ex.linkable.toLowerCase() === loc.linkable.toLowerCase();
      });
  }

  /**
   * Generates the string for a complete HTML a-tag Link for the given entry
   * @param entry
   * @param matchedPhrase the actually matched string which should be used as text for the link
   * @return {string}
   */
  private generateLink(entry : LinkEntry, matchedPhrase : string) : string {
    let linkable : string = entry.linkable ? '?link=' + entry.linkable : '';
    return '<a href="/#/' + entry.link + linkable + '">' + matchedPhrase + '</a>';
  }

}
