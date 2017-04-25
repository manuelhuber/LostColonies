import { Component, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <accordion>
      <accordion-entry>
        <accordion-header>heada</accordion-header>
        <accordion-content>Eheu, regius fluctus!Impositios velum, tanquam castus decor.Ferox, audax orgias recte
          contactus de lotus, placidus exemplar.Genetrixs persuadere in placidus virundum!Fidelis genetrixs ducunt ad
          tolosa!Heu.Caniss sunt eposs de varius impositio.Lactea de noster lixa, amor orgia!
        </accordion-content>
      </accordion-entry>
      <accordion-entry>
        <accordion-header>heada</accordion-header>
        <accordion-content>Eheu, regius fluctus!Impositios velum, tanquam castus decor.Ferox, audax orgias recte
          contactus de lotus, placidus exemplar.Genetrixs persuadere in placidus virundum!Fidelis genetrixs ducunt ad
          liberi.Hercle, bromium pius!, verpa!Abnobas accelerare!Pol.Clemens poeta semper manifestums abaculus est.Heu,
          species!Sunt contencioes aperto germanus, fatalis lamiaes.A falsis, tabes lotus planeta.Sunt fermiumes
          resuscitabo germanus, velox assimilatioes.Pol.Fatalis, alter demolitiones inciviliter resuscitabo de audax,
          mirabilis epos.Detriuss manducare in clemens brema!Cur cotta credere?Galluss observare in germanus
          tolosa!Heu.Caniss sunt eposs de varius impositio.Lactea de noster lixa, amor orgia!
        </accordion-content>
      </accordion-entry>
    </accordion>
    <div>foo</div>`
})
export class AppComponent {
  public visible: boolean = false;
}
