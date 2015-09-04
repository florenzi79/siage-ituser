<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fo="http://www.w3.org/1999/XSL/Format">
  <xsl:output method="xml" indent="yes" />
  <xsl:template match="/">
    <fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format" font-family="Arial, Helvetica, sans-serif">
      <fo:layout-master-set>
        <fo:simple-page-master master-name="A4" page-width="210mm" page-height="297mm" margin-top="1cm" margin-bottom="1cm" margin-left="2cm" margin-right="2cm">
          <fo:region-body margin-top="3cm" />
          <fo:region-before precedence="true" extent="3cm" />
        </fo:simple-page-master>
      </fo:layout-master-set>
      <fo:page-sequence master-reference="A4">
        <fo:flow flow-name="xsl-region-body">
          <fo:table table-layout="fixed" width="170mm" space-after="15mm" border-spacing="0pt 2pt">
            <fo:table-column column-width="56mm" />
            <fo:table-column column-width="58mm" />
            <fo:table-column column-width="56mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="10pt" text-align="left" font-weight="bold" padding-before="1mm" padding-after="1mm">
                  <fo:block>INTERVENTI PSICO-SOCIO-EDUCATIVI A FAVORE DI FAMIGLIE CON ADOLESCENTI IN DIFFICOLTA’ Azione 9.3.3 – Asse II Inclusione e lotta alla povertà – POR FSE 2014/2020</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" text-align="center" font-weight="bold" padding-before="1mm" padding-after="1mm">
                  <fo:block>EQUIPE MULTIDISCIPLINARE</fo:block>
                  <fo:block><xsl:value-of select="/_/Richiedente_ASL" /></fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" text-align="left" font-weight="bold" padding-before="1mm" padding-after="1mm">
                  <fo:block>PROGETTO INDIVIDUALE</fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:table table-layout="fixed" width="170mm" space-after="10mm" border-spacing="0pt 2pt">
            <fo:table-column column-width="50mm" />
            <fo:table-column column-width="120mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>COGNOME</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" font-weight="bold" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Beneficiario_Cognome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>NOME</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" font-weight="bold" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Beneficiario_Nome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>CODICE FISCALE</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" font-weight="bold" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Beneficiario_CodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>DATA DI NASCITA</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" font-weight="bold" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Beneficiario_DataNascita" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>LUOGO DI NASCITA</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" font-weight="bold" padding="1mm">
                  <fo:block>
                    <fo:inline><xsl:value-of select="/_/Beneficiario_ComuneNascitaDn" /></fo:inline>
                    <fo:inline padding-left="1mm">(</fo:inline>
                    <fo:inline><xsl:value-of select="/_/Beneficiario_ProvinciaNascitaDn" /></fo:inline>
                    <fo:inline>)</fo:inline>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>NAZIONALITÀ</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" font-weight="bold" padding="1mm">
                  <fo:block>
                    <fo:inline><xsl:value-of select="/_/Beneficiario_StatoCittandinanza" /></fo:inline>
                    <fo:inline padding-left="1mm">(</fo:inline>
                    <fo:inline>
                      <xsl:choose>
                        <xsl:when test="/_/Beneficiario_Cittandinanza[text()='ue']">UE</xsl:when>
                        <xsl:when test="/_/Beneficiario_Cittandinanza[text()='extra_ue']">Extra UE</xsl:when>
                      </xsl:choose>
                    </fo:inline>
                    <fo:inline>)</fo:inline>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>ENTE SEGNALANTE</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/EnteSegnalante" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="10pt" font-weight="bold" space-after="3mm">MOTIVO DELLA SEGNALAZIONE</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="10mm" border-spacing="0pt 2pt">
            <fo:table-column column-width="5mm" />
            <fo:table-column column-width="165mm" />
            <fo:table-body>
              <xsl:choose>
                <xsl:when test="(/_/*[(starts-with(name(),'Beneficiario_MotivoSegnalazione_')) and (contains(text(),'abbandono'))])">
                  <fo:table-row>
                    <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>-</fo:block>
                    </fo:table-cell>
                    <fo:table-cell text-align="justify" font-size="10pt" padding="1mm">
                      <fo:block>Abbandono scolastico (fallimenti scolastici/formativi)</fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                </xsl:when>
                <xsl:when test="(/_/*[(starts-with(name(),'Beneficiario_MotivoSegnalazione_')) and (contains(text(),'disagio'))])">
                  <fo:table-row>
                    <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>-</fo:block>
                    </fo:table-cell>
                    <fo:table-cell text-align="justify" font-size="10pt" padding="1mm">
                      <fo:block>Disagio psicologico e relazionale, blocchi del processo evolutivo (relazioni familiari difficili, eventi di vita stressanti, devianza e coinvolgimento in gruppi a rischio, agiti autolesivi, ideazione suicidaria; attacchi di panico e disturbi somatici)</fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                </xsl:when>
                <xsl:when test="(/_/*[(starts-with(name(),'Beneficiario_MotivoSegnalazione_')) and (contains(text(),'sostanze_abuso'))])">
                  <fo:table-row>
                    <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>-</fo:block>
                    </fo:table-cell>
                    <fo:table-cell text-align="justify" font-size="10pt" padding="1mm">
                      <fo:block>Uso e abuso di sostanze (consumo non occasionale di alcol e droghe) - isolamento sociale (scarsa capacità di adattamento, presenza di problemi psicologici, problemi comportamentali)</fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                </xsl:when>
                <xsl:when test="(/_/*[(starts-with(name(),'Beneficiario_MotivoSegnalazione_')) and (contains(text(),'isolamento_sociale'))])">
                  <fo:table-row>
                    <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>-</fo:block>
                    </fo:table-cell>
                    <fo:table-cell text-align="justify" font-size="10pt" padding="1mm">
                      <fo:block>Isolamento sociale (scarsa capacità di adattamento, presenza di problemi psicologici, problemi comportamentali)</fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                </xsl:when>
                <xsl:when test="(/_/*[(starts-with(name(),'Beneficiario_MotivoSegnalazione_')) and (contains(text(),'problemi_penali'))])">
                  <fo:table-row>
                    <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>-</fo:block>
                    </fo:table-cell>
                    <fo:table-cell text-align="justify" font-size="10pt" padding="1mm">
                      <fo:block>Problemi con la giustizia (comportamenti antisociali, delinquenziali, distruttivi, problemi di tipo penale o amministrativo per reati come risse o detenzione illegale di stupefacenti)</fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                </xsl:when>
                <xsl:otherwise>
                  <fo:table-row>
                    <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>-</fo:block>
                    </fo:table-cell>
                    <fo:table-cell font-size="10pt" padding="1mm">
                      <fo:block>Non specificato</fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                </xsl:otherwise>
              </xsl:choose>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="10pt" font-weight="bold" space-after="3mm">TIPOLOGIA DI AREA DI INTERVENTO</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="10mm" border-spacing="2pt 2pt" border-style="solid">
            <fo:table-column column-width="150mm" />
            <fo:table-column column-width="20mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell text-align="justify" font-size="10pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/PI_2.ServizioErogato[text()='Sviluppo di competenze individuali']">
                        Sviluppo di competenze individuali e comportamenti protettivi mediante potenziamento della funzione educativa scolastica/formativa
                      </xsl:when>
                      <xsl:when test="/_/PI_2.ServizioErogato[text()='Sostegno alla rete delle relazioni sociali']">
                        Sostegno alla rete delle relazioni sociali prossimali mediante supporti mirati educativi e/o psicologici ai componenti della famiglia
                      </xsl:when>
                      <xsl:when test="/_/PI_2.ServizioErogato[text()='Supporto e accompagnamento']">
                        Supporto e accompagnamento dell’adolescente/famiglia nell’accesso alla rete dei servizi socio-sanitari e sociali nonché del sistema educativo/formativo territoriale
                      </xsl:when>
                      <xsl:when test="/_/PI_2.ServizioErogato[text()='Interventi a carattere psico/socio/educativo']">
                        Interventi a carattere psico/socio/educativo in presenza di fattori di vulnerabilità o manifeste problematiche anche connesse all’uso/abuso di sostanze nonché interventi integrativi della presa in carico relativa all’applicazione di procedimenti in ambito amministrativo (art. 75 D.P.R. 309/90)
                      </xsl:when>
                      <xsl:when test="/_/PI_2.ServizioErogato[text()='Supporto psico-socio-educativo']">
                        Supporto psico-socio-educativo a giovani e adolescenti con problemi connessi a comportamenti di rischio per la salute e/o problematiche significative connesse all’uso/abuso di sostanze e/o presa in carico relativa all’applicazione di procedimenti in ambito penale (D.P.R. 448/88 e d.l. 92/14).
                      </xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="10pt" padding="1mm">
                  <fo:block><xsl:value-of select="/_/PI_2.NumeroAccessi" /></fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="10pt" space-after="5mm">
            <fo:inline>DURATA DEL PROGETTO (mesi)</fo:inline>
            <fo:inline padding-left="1mm" font-weight="bold"><xsl:value-of select="/_/Progetto_Durata" /></fo:inline>
          </fo:block>
          <fo:block font-size="10pt" space-after="2mm">VOUCHER RICONOSCIUTI</fo:block>
          <fo:block font-size="10pt" space-after="2mm">
            <fo:inline>- Valutazione</fo:inline>
            <fo:inline padding-left="1mm" font-weight="bold">90 €</fo:inline>
          </fo:block>
          <fo:block font-size="10pt" space-after="2mm">
            <fo:inline>- Osservazione e stesura PEI</fo:inline>
            <fo:inline padding-left="1mm" font-weight="bold">270 €</fo:inline>
          </fo:block>
          <fo:block font-size="10pt" space-after="10mm">
            <fo:inline>
              <xsl:choose>
                <xsl:when test="/_/PI_2.ServizioErogato[text()='Sviluppo di competenze individuali']">
                  - Sviluppo di competenze individuali e comportamenti protettivi mediante potenziamento della funzione educativa scolastica/formativa
                </xsl:when>
                <xsl:when test="/_/PI_2.ServizioErogato[text()='Sostegno alla rete delle relazioni sociali']">
                  - Sostegno alla rete delle relazioni sociali prossimali mediante supporti mirati educativi e/o psicologici ai componenti della famiglia
                </xsl:when>
                <xsl:when test="/_/PI_2.ServizioErogato[text()='Supporto e accompagnamento']">
                  - Supporto e accompagnamento dell’adolescente/famiglia nell’accesso alla rete dei servizi socio-sanitari e sociali nonché del sistema educativo/formativo territoriale
                </xsl:when>
                <xsl:when test="/_/PI_2.ServizioErogato[text()='Interventi a carattere psico/socio/educativo']">
                  - Interventi a carattere psico/socio/educativo in presenza di fattori di vulnerabilità o manifeste problematiche anche connesse all’uso/abuso di sostanze nonché interventi integrativi della presa in carico relativa all’applicazione di procedimenti in ambito amministrativo (art. 75 D.P.R. 309/90)
                </xsl:when>
                <xsl:when test="/_/PI_2.ServizioErogato[text()='Supporto psico-socio-educativo']">
                  - Supporto psico-socio-educativo a giovani e adolescenti con problemi connessi a comportamenti di rischio per la salute e/o problematiche significative connesse all’uso/abuso di sostanze e/o presa in carico relativa all’applicazione di procedimenti in ambito penale (D.P.R. 448/88 e d.l. 92/14).
                </xsl:when>
              </xsl:choose>
            </fo:inline>
            <fo:inline padding-left="1mm" font-weight="bold"><xsl:value-of select="/_/PI_2.CostoServizio" /></fo:inline>
            <fo:inline padding-left="1mm" font-weight="bold">€</fo:inline>
          </fo:block>
          <fo:block font-size="10pt" space-after="2mm">Risultati ottenuti ed esiti prodotti dall’attuazione del PEI</fo:block>
          <fo:block font-size="10pt" space-after="10mm"><xsl:value-of select="/_/Progetto_Risultati_Pei" /></fo:block>
          <fo:block font-size="10pt" space-after="5mm">
            <fo:inline>Luogo</fo:inline>
            <fo:inline padding-left="1mm" font-weight="bold">
              <xsl:choose>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Bergamo']">Bergamo</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Brescia']">Brescia</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Como']">Como</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Cremona']">Cremona</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Lecco']">Lecco</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Lodi']">Lodi</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Monza e della Brianza']">Monza</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Milano']">Milano</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Milano 1']">Milano</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Milano 2']">Milano</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Mantova']">Mantova</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Pavia']">Pavia</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Sondrio']">Sondrio</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Varese']">Varese</xsl:when>
                <xsl:when test="/_/Richiedente_ASL[text()='ASL di Vallecamonica-Sebino']">Brescia</xsl:when>
              </xsl:choose>
            </fo:inline>
            <fo:inline padding-left="1mm">Data</fo:inline>
            <fo:inline padding-left="1mm" font-weight="bold"><xsl:value-of select="/_/DataPI" /></fo:inline>
          </fo:block>
          <fo:block font-size="10pt" space-after="2mm">Firma del Responsabile (*)</fo:block>
          <fo:block font-size="10pt" space-after="40mm">
            <fo:inline font-weight="bold"><xsl:value-of select="/_/Richiedente_FirmatarioNome" /></fo:inline>
            <fo:inline padding-left="1mm" font-weight="bold"><xsl:value-of select="/_/Richiedente_FirmatarioCognome" /></fo:inline>
          </fo:block>
          <fo:block font-size="10pt" font-weight="bold" space-after="2mm">*(il Responsabile attesta anche l’avvenuta condivisione con la famiglia/ragazzo/a che sarà formalizzata dopo la validazione regionale)</fo:block>
        </fo:flow>
      </fo:page-sequence>
    </fo:root>
  </xsl:template>
</xsl:stylesheet>
