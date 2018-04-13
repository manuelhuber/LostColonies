import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LINKS } from './links';
import { LINKABLE_MAP_HIGHLIGHT_PARAM, LINKABLE_PARAM } from '../linkable/linkable.directive';

export interface LinkEntry extends LinkLocation {
  phrase: string | RegExp;
}

export interface LinkLocation {
  link: string;
  linkable: string;
  mapHighlight ?: string;
}

@Directive({selector: '[insertLinks]'})
export class InsertLinksDirective implements AfterViewInit {

  @Input() public exclude: LinkLocation[];

  private links: LinkEntry[] = LINKS;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  public ngAfterViewInit(): void {
    this.updateHtml();
  }

  private updateHtml(): void {
    let newHtml: string = this.el.nativeElement.innerHTML;
    if (newHtml && newHtml.length) {
      this.links.forEach((entry: LinkEntry) => {
        if (!this.locationExcluded(entry)) {
          // Remove flags from regex string
          const rawRegex: string = entry.phrase.toString().replace(/\/[i]?/g, '');
          // Regex magic
          const notInsideATag: RegExp = new RegExp(rawRegex + '(?![^<a]*>|[^<>]*<\/a)');
          newHtml = newHtml.replace(notInsideATag, (matched) => this.generateLink(entry, matched));
        }
      });
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', newHtml);
    }
  }

  private locationExcluded(loc: LinkLocation): boolean {
    return this.exclude && this.exclude.some((ex: LinkLocation) => {
        return ex.link.toLowerCase() === loc.link.toLowerCase() && ex.linkable.toLowerCase() === loc.linkable.toLowerCase();
      });
  }

  /**
   * Generates the string for a complete HTML a-tag Link for the given entry
   * @param entry
   * @param matchedPhrase the actually matched string which should be used as text for the link
   * @return {string}
   */
  private generateLink(entry: LinkEntry, matchedPhrase: string): string {
    const linkable: string = entry.linkable ? LINKABLE_PARAM + '=' + entry.linkable : '';
    const mapHighlight: string = entry.mapHighlight ? LINKABLE_MAP_HIGHLIGHT_PARAM + '=' + entry.mapHighlight : '';
    const queryParams: string = [ linkable, mapHighlight ].filter((s: string) => s.length > 0).join('&');
    return '<a href="/#/' + entry.link + '?' + queryParams + '">' + matchedPhrase + '</a>';
  }

}
