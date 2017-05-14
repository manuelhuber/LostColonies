import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LINKS } from './links';

export interface LinkEntry extends LinkLocation {
  phrase : string;
}

export interface LinkLocation {
  link : string;
  linkable : string;
}

@Directive({selector: '[insertLinks]'})
export class InsertLinksDirective implements AfterViewInit {

  @Input() public exclude : LinkLocation[];

  private links : any = LINKS;

  constructor(private el : ElementRef, private sanitizer : DomSanitizer, private renderer : Renderer2) {
  }

  public ngAfterViewInit() : void {
    this.updateHtml();
  }

  private updateHtml() : void {
    let newHtml = this.el.nativeElement.innerHTML;
    if (newHtml) {
      this.links.forEach((entry) => {
        if (!this.locationExcluded(entry)) {
          newHtml = newHtml.replace(entry.phrase, this.generateLink(entry));
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

  private generateLink(entry : LinkEntry) : string {
    let linkable : string = entry.linkable ? '?link=' + entry.linkable : '';
    return '<a href="/#/' + entry.link + linkable + '">' + entry.phrase + '</a>';
  }

}
