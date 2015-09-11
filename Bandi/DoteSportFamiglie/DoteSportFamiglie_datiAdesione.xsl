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
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">1 - Anagrafica soggetto richiedente</fo:block>
          <fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Dati anagrafici</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Dati soggetto richiedente</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>id Pratica</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/idPratica" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Numero di protocollo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/DomandaDiAdesione_NumeroProtocollo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Data di protocollazione</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/DomandaDiAdesione_DataProtocollo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Nome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Nome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Cognome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Cognome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Codice Fiscale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_CodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Data di nascita</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_DataNascita" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Provincia di nascita</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_ProvinciaNascitaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Comune di nascita</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_ComuneNascitaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Provincia di residenza</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_ProvinciaResidenzaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Comune di residenza</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_ComuneResidenzaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indirizzo di residenza</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_IndirizzoResidenza" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Documento di identità</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Documento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Recapito telefonico</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Telefono" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indirizzo e-mail</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Mail" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Grado di parentela</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Richiedente_Parentela[text()='genitore']">Genitore</xsl:when>
                      <xsl:when test="/_/Richiedente_Parentela[text()='affidatario']">Genitore di famiglia affidataria</xsl:when>
                      <xsl:when test="/_/Richiedente_Parentela[text()='tutore']">Tutore convivente</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il soggetto richiedente dichiara di essere residente in Lombardia da almeno 5 anni, maturata alla data di scadenza dei termini di partecipazione al bando (19/10/2015)?</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Richiedente_DichiarazioneResidenza[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Richiedente_DichiarazioneResidenza[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <xsl:if test="/_/AltroGenitore_CodiceFiscale">
            <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Dati altro genitore</fo:block>
            <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
              <fo:table-column column-width="120mm" />
              <fo:table-column column-width="50mm" />
              <fo:table-body>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Nome</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/AltroGenitore_Nome" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Cognome</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/AltroGenitore_Cognome" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Codice Fiscale</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/AltroGenitore_CodiceFiscale" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Data di nascita</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/AltroGenitore_DataNascita" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Provincia di residenza</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/AltroGenitore_ProvinciaResidenzaDn" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Comune di residenza</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/AltroGenitore_ComuneResidenzaDn" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Indirizzo di residenza</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/AltroGenitore_IndirizzoResidenza" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Grado di parentela</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:choose>
                        <xsl:when test="/_/AltroGenitore_Parentela[text()='genitore']">Genitore</xsl:when>
                        <xsl:when test="/_/AltroGenitore_Parentela[text()='affidatario']">Genitore di famiglia affidataria</xsl:when>
                      </xsl:choose>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Il soggetto richiedente dichiara che l'altro genitore è residente in Lombardia da almeno 5 anni, maturata alla data di scadenza dei termini di partecipazione al bando (19/10/2015)?</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:choose>
                        <xsl:when test="/_/AltroGenitore_DichiarazioneResidenza[text()='true']">Sì</xsl:when>
                        <xsl:when test="/_/AltroGenitore_DichiarazioneResidenza[text()='false']">No</xsl:when>
                      </xsl:choose>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </fo:table-body>
            </fo:table>
          </xsl:if>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Informazioni aggiuntive e dichiarazioni</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il soggetto richiedente dichiara di trovarsi in condizione di famiglia monoparentale? </fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Richiedente_Monoparentale[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Richiedente_Monoparentale[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indicare il numero di figli di minore età, incluso il minore indicato nella domanda, presenti nello stato di famiglia del richiedente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="format-number(translate(/_/Richiedente_NumeroMinori, ',.', '.'), '#')" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indicare il proprio valore ISEE (Indicatore della Situazione Economica Equivalente)</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Isee" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indicare la data rilascio della relativa certificazione ISEE</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_DataIsee" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">2 - Anagrafica minore</fo:block>
          <fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">
            Dati per assegnazione dote
          </fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
            Dati e dichiarazioni primo minore
          </fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Nome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_Nome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Cognome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_Cognome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Codice fiscale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_CodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Data di nascita</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_DataNascita" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Tipologia Dote</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_TipologiaDote" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il minore per cui si sta facendo domanda di dote è disabile?</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/PrimoMinore_Disabile[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/PrimoMinore_Disabile[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <xsl:if test="/_/PrimoMinore_Disabile[text()='true']">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Indicare il numero e la data della certificazione di disabilità</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/PrimoMinore_CertificatoDisabile" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Indicare l'ente che ha rilasciato la certificazione di disabilità</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/PrimoMinore_EnteCertificatoDisabile" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il minore per cui si sta facendo domanda è già preiscritto o iscritto ad un corso o attività sportiva?</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/PrimoMinore_Iscrizione[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/PrimoMinore_Iscrizione[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Codice Fiscale dell'associazione o società sportiva presso cui il minore frequenterà il corso o attività sportiva</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_RicercaCodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Denominazione</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_RicercaDenominazione" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indirizzo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_RicercaIndirizzo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Città</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_RicercaComune" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Provincia</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_RicercaProvincia" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>FSN, DSA o EPS di appartenenza</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_RicercaFsnDsa" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Disciplina Sportiva</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PrimoMinore_DisciplinaSportiva" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Costo del corso</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <fo:inline><xsl:value-of select="/_/PrimoMinore_CostoCorso" /></fo:inline>
                    <fo:inline padding-left="1mm">€</fo:inline>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Valore della dote assegnabile</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <fo:inline><xsl:value-of select="/_/PrimoMinore_DoteAssegnabile" /></fo:inline>
                    <fo:inline padding-left="1mm">€</fo:inline>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indicare la durata del corso in mesi (almeno 6 mesi continuativi compresi tra Settembre 2015 e Giugno 2016)</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="format-number(translate(/_/PrimoMinore_DurataCorso, ',.', '.'), '#')" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il richiedente dichiara di non aver già percepito rimborsi o altre forme di agevolazione da parte di Regione Lombardia o da altri enti pubblici  per lo stesso corso o attività sportiva e per lo stesso minore</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/PrimoMinore_Dichiarazione[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/PrimoMinore_Dichiarazione[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Si vogliono inserire i dati per la richiesta di dote per un secondo minore?</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/PrimoMinore_SecondaDote[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/PrimoMinore_SecondaDote[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <xsl:if test="/_/PrimoMinore_SecondaDote[text()='true']">
            <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
              Dati e dichiarazioni secondo minore
            </fo:block>
            <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
              <fo:table-column column-width="120mm" />
              <fo:table-column column-width="50mm" />
              <fo:table-body>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Nome secondo minore</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_Nome" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Cognome secondo minore</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_Cognome" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Codice Fiscale secondo minore</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_CodiceFiscale" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Data di nascita secondo minore</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_DataNascita" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Tipologia Dote</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_TipologiaDote" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Il minore per cui si sta facendo domanda di dote è disabile?</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:choose>
                        <xsl:when test="/_/SecondoMinore_Disabile[text()='true']">Si</xsl:when>
                        <xsl:when test="/_/SecondoMinore_Disabile[text()='false']">No</xsl:when>
                      </xsl:choose>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <xsl:if test="/_/SecondoMinore_Disabile[text()='true']">
                  <fo:table-row>
                    <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>Indicare il numero e la data della certificazione di disabilità </fo:block>
                    </fo:table-cell>
                    <fo:table-cell font-size="11pt" padding="1mm">
                      <fo:block>
                        <xsl:value-of select="/_/SecondoMinore_CertificatoDisabile" />
                      </fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                  <fo:table-row>
                    <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>Indicare l'ente che ha rilasciato la certificazione di disabilità</fo:block>
                    </fo:table-cell>
                    <fo:table-cell font-size="11pt" padding="1mm">
                      <fo:block>
                        <xsl:value-of select="/_/SecondoMinore_EnteCertificatoDisabile" />
                      </fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                </xsl:if>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Il minore per cui si sta facendo domanda è già preiscritto o iscritto ad un corso o attività sportiva?</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:choose>
                        <xsl:when test="/_/SecondoMinore_Iscrizione[text()='true']">Sì</xsl:when>
                        <xsl:when test="/_/SecondoMinore_Iscrizione[text()='false']">No</xsl:when>
                      </xsl:choose>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Codice Fiscale dell'associazione o società sportiva presso cui il minore frequenterà il corso o attività sportiva</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_RicercaCodiceFiscale" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Denominazione</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_RicercaDenominazione" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Indirizzo</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_RicercaIndirizzo" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Città</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_RicercaComune" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Provincia</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_RicercaProvincia" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>FSN, DSA o EPS di appartenenza</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_RicercaFsnDsa" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Disciplina sportiva</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="/_/SecondoMinore_DisciplinaSportiva" />
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Costo del corso</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <fo:inline><xsl:value-of select="/_/SecondoMinore_CostoCorso" /></fo:inline>
                      <fo:inline padding-left="1mm">€</fo:inline>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Valore della dote assegnabile</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <fo:inline><xsl:value-of select="/_/SecondoMinore_DoteAssegnabile" /></fo:inline>
                      <fo:inline padding-left="1mm">€</fo:inline>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Indicare la durata del corso in mesi (almeno 6 mesi continuativi compresi tra Settembre 2015 e Giugno 2016)</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:value-of select="format-number(translate(/_/SecondoMinore_DurataCorso, ',.', '.'), '#')"/>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Il richiedente dichiara di non aver già percepito rimborsi o altre forme di agevolazione da parte di Regione Lombardia o da altri enti pubblici  per lo stesso corso o attività sportiva e per lo stesso minore</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:choose>
                        <xsl:when test="/_/SecondoMinore_Dichiarazione[text()='true']">Sì</xsl:when>
                        <xsl:when test="/_/SecondoMinore_Dichiarazione[text()='false']">No</xsl:when>
                      </xsl:choose>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </fo:table-body>
            </fo:table>
          </xsl:if>
        </fo:flow>
      </fo:page-sequence>
    </fo:root>
  </xsl:template>
</xsl:stylesheet>
