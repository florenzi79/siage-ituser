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
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">1 di 5 - Requisiti minimi</fo:block>
          <fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Requisiti minimi di accesso</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Avvisi per la presentazione della domanda</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Avviso</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/RequisitiMinimi_Avviso" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Id Pratica</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/idPratica" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Dati generali</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>statoPratica</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/statoPratica" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>fasePratica</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/fasePratica" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Nome Pratica</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/title" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Richiedente_NaturaGiuridica</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_NaturaGiuridica" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Denominazione soggetto richiedente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Denominazione" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Tipologia ente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Tipologia" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>L'istanza di partecipazione è presentata in forma:</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Richiedente_TipologiaPartecipazione[text()='singola']">Singola</xsl:when>
                      <xsl:when test="/_/Richiedente_TipologiaPartecipazione[text()='associata']">Associata</xsl:when>
                    </xsl:choose>
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
                  <fo:block>Telefono</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Telefono" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>E-mail</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Mail" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Pec</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Pec" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Dichiarazioni</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il soggetto richiedente, consapevole delle sanzioni penali richiamate dall’art. 76 del D.P.R. 28 dicembre 2000 n. 445 in caso di dichiarazioni mendaci e della decadenza di benefici in caso di dichiarazioni non veritiere, di cui all’art. 75 del D.P.R. 28 dicembre 2000 n. 445, ai sensi e per gli effetti dell’art. 47 del citato D.P.R. n. 445, sotto la propria responsabilità dichiara:</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Dichiarazioni_Richiedente" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di aver preso visione e di accettare quanto disciplinato dal bando per la selezione delle migliori iniziative di programmazione territoriale e urbanistica in tema di rigenerazione urbana territoriale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_PresaVisone[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_PresaVisone[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>che i piani e i programmi considerati ammissibili per la presentazione della domanda sono stati approvati entro il termine di scadenza del presente bando e successivamente al 31 dicembre 2010</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_ApprovazionePiano[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_ApprovazionePiano[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>che i piani e i programmi considerati ammissibili per la presentazione della domanda sono giunti ad un grado di completamento tale da potersi considerare completati nella parte sostanziale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_CompletamentoPiano[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_CompletamentoPiano[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di impegnarsi a fornire eventuali elaborati integrativi, o correttivi, necessari al fine della migliore comprensione dell'iniziativa, ovvero in funzione della pubblicazione divulgativa della stessa</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_Impegno[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_Impegno[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">2 di 5 - Dati della domanda</fo:block>
          <fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Dati della domanda</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Sede Legale - Soggetto Richiedente</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indirizzo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_SedeLegaleIndirizzo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Provincia</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_SedeLegaleProvincia" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Richiedente_SedeLegaleProvinciaDn</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_SedeLegaleProvinciaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Comune</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_SedeLegaleComune" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Richiedente_SedeLegaleComuneDn</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_SedeLegaleComuneDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Cap</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_SedeLegaleCap" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Rappresentante Legale - Soggetto Richiedente</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Codice Fiscale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RappresentanteLegaleCodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Cognome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RappresentanteLegaleCognome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Nome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RappresentanteLegaleNome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Telefono</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RappresentanteLegaleTelefono" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>PEC</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RappresentanteLegalePec" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Mail</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RappresentanteLegaleMail" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il firmatario della domanda  coincide con il Rappresentante Legale?</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Firmatario_RappresentanteLegale[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Firmatario_RappresentanteLegale[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Firmatario</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Codice Fiscale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_FirmatarioCodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Cognome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_FirmatarioCognome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Nome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_FirmatarioNome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Telefono</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_FirmatarioTelefono" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>PEC</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_FirmatarioPec" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Mail</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_FirmatarioMail" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Referente pratica</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il referente della pratica coincide con:</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_Rup" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Codice fiscale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RupCodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Nome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RupNome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Cognome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RupCognome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Telefono</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RupTelefono" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Pec</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RupPec" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Mail</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Richiedente_RupMail" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">3 di 5 - Dati del progetto</fo:block>
          <fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Dati del progetto</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Dati del progetto</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Denominazione soggetto richiedente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/richiedente[text()='ref']">Richiedente_Denominazione</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Tipologia ente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/ente[text()='ref']">Richiedente_Tipologia</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Nome progetto</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Progetto_Nome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>La partecipazione in forma associata è in partenership con:</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/TipologiaPartenership[text()='associazioni']">Associazioni</xsl:when>
                      <xsl:when test="/_/TipologiaPartenership[text()='universita']">Università</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="14pt" font-weight="bold" text-align="left" space-after="5mm">
            <fo:block>Partnership</fo:block>
          </fo:block>
          <fo:table table-layout="fixed" width="170mm" border-spacing="0pt 2pt" border-style="solid" space-after="8mm">
            <fo:table-column column-width="170" border-right-style="solid"/>
            <fo:table-body>
              <fo:table-row border-bottom-style="solid">
                <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
                  <fo:block>Nominativo partner</fo:block>
                </fo:table-cell>
              </fo:table-row>
              <xsl:apply-templates select="(/_/*[(starts-with(name(),'Partnership_')) and (contains(name(),'.NomePartner'))])" />
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Iniziative ammissibili</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Tipologia iniziativa</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Progetto_TipologiaIniziativa[text()='piani_attuativi']">1) Piani attuativi comunali del piano di governo del territorio previsti dalla legislazione statale e regionale</xsl:when>
                      <xsl:when test="/_/Progetto_TipologiaIniziativa[text()='programmazione_negoziata']">2) Programmazione negoziata (Accordi di programma e Programmi integrati di intervento)</xsl:when>
                      <xsl:when test="/_/Progetto_TipologiaIniziativa[text()='contratti_quartiere']">3) Contratti di quartiere</xsl:when>
                      <xsl:when test="/_/Progetto_TipologiaIniziativa[text()='altre_iniziative']">4) Altre iniziative di programmazione territoriale e urbanistica, non incluse nei punti sopra riportati, che rientrino nella definizione di rigenerazione urbana</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Data di approvazione dell'iniziativa</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Porgetto_DataApprovazioneIniziativa" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">4 di 5 - Documenti</fo:block>
          <fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Documenti</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Documenti da caricare non firmati</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Atto di delega</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Adesione_File_AttoDelega[text()='scan']">true</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Adesione_File_AttoDelega_idDocumento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Adesione_File_AttoDelega_idDocumento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Scheda di sintesi - Criterio 1. Quadro identificativo dei caratteri morfologici del luogo e indicazioni sulla loro conservazione</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Adesione_File_SchedaSintesi_Criterio1[text()='scan']">true</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Adesione_File_SchedaSintesi_Criterio1_idDocumento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Adesione_File_SchedaSintesi_Criterio1_idDocumento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Scheda di sintesi - Criterio 2. Grado di complessità e di integrazione della proposta, con particolare riferimento alla pluralità di funzioni insediabili</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Adesione_File_SchedaSintesi_Criterio2[text()='scan']">true</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Adesione_File_SchedaSintesi_Criterio2_idDocumento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Adesione_File_SchedaSintesi_Criterio2_idDocumento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Scheda di sintesi - Criterio 3. Coinvolgimento della popolazione o di altri soggetti aventi relazioni con i luoghi</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Adesione_File_SchedaSintesi_Criterio3[text()='scan']">true</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Adesione_File_SchedaSintesi_Criterio3_idDocumento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Adesione_File_SchedaSintesi_Criterio3_idDocumento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Scheda di sintesi - Criterio 4. Effetti sulla riqualificazione e coesione sociale degli insediamenti</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Adesione_File_SchedaSintesi_Criterio4[text()='scan']">true</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Adesione_File_SchedaSintesi_Criterio4_idDocumento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Adesione_File_SchedaSintesi_Criterio4_idDocumento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Scheda di sintesi - Criterio 5. Livello di coerenza e sinergia con gli obiettivi della pianificazione di livello sovracomunale, particolarmente del Piano Territoriale Regionale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Adesione_File_SchedaSintesi_Criterio5[text()='scan']">true</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Adesione_File_SchedaSintesi_Criterio5_idDocumento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Adesione_File_SchedaSintesi_Criterio5_idDocumento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="14pt" font-weight="bold" text-align="left" space-after="5mm">
            <fo:block>Documenti costituenti la relazione tecnico-illustrativa</fo:block>
          </fo:block>
          <fo:table table-layout="fixed" width="170mm" border-spacing="0pt 2pt" border-style="solid" space-after="8mm">
            <fo:table-column column-width="56" border-right-style="solid"/>
            <fo:table-column column-width="56" border-right-style="solid"/>
            <fo:table-column column-width="56" border-right-style="solid"/>
            <fo:table-body>
              <fo:table-row border-bottom-style="solid">
                <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
                  <fo:block>Contenuto</fo:block>
                </fo:table-cell>
                <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
                  <fo:block>Contenuto_idDocumento</fo:block>
                </fo:table-cell>
                <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
                  <fo:block>Descrizione</fo:block>
                </fo:table-cell>
              </fo:table-row>
              <xsl:apply-templates select="(/_/*[(starts-with(name(),'AltriDocumenti_')) and (contains(name(),'.Contenuto'))])" />
            </fo:table-body>
          </fo:table>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">5 di 5 - Presentazione domanda</fo:block>
          <fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Documenti</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Domanda di contributo</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Istanza di candidatura</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Adesione_File_DomandaContributoGenerato[text()='filename']">IstanzaDiAdesione.pdf</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Istanza di candidatura firmata elettronicamente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Adesione_File_DomandaContributoFirmato[text()='scan']">true</xsl:when>
                      <xsl:when test="/_/Adesione_File_DomandaContributoFirmato[text()='signed']">Richiedente_FirmatarioCodiceFiscale</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Adesione_File_DomandaContributoFirmato_idDocumento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Adesione_File_DomandaContributoFirmato_idDocumento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">Dettagli Presentazione</fo:block>
          <fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Dettagli Presentazione</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Istanza di adesione presentata</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Numero del Protocollo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/DomandaAdesione_NumeroProtocollo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Data del Protocollo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/DomandaAdesione_DataProtocollo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Denominazione</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Denominazione[text()='ref']">Richiedente_Denominazione</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>CodiceFiscale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/CodiceFiscale[text()='ref']">Richiedente_CodiceFiscale</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Pdf_Adesione</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/Pdf_Adesione" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Dati di monitoraggio</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>DomandaDiAdesione_dataProtocollo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/DomandaDiAdesione_dataProtocollo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeCap</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeCap" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeComune</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeComune" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeComuneDn</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeComuneDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeIndirizzo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeIndirizzo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeProgetto_Cap</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeProgetto_Cap" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeProgetto_Comune</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeProgetto_Comune" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeProgetto_Provincia</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeProgetto_Provincia" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeProvincia</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeProvincia" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>SedeProvinciaDn</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeProvinciaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
        </fo:flow>
      </fo:page-sequence>
    </fo:root>
  </xsl:template>
  <xsl:template match="*">
    <xsl:if test="(starts-with(name(),'Partnership_')) and (contains(name(),'.NomePartner'))">
      <xsl:variable name="index" select="substring-after((substring-before(name(), '.')), '_')" />
      <fo:table-row>
        <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
          <fo:block>
            <xsl:value-of select="." />
          </fo:block>
        </fo:table-cell>
        <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
          <fo:block>
            <xsl:value-of select="following-sibling::*[name()=concat('Partnership_', $index, '.NomePartner')]" />
          </fo:block>
          <fo:block>
            <xsl:value-of select="preceding-sibling::*[name()=concat('Partnership_', $index, '.NomePartner')]" />
          </fo:block>
        </fo:table-cell>
      </fo:table-row>
    </xsl:if>
    <xsl:if test="(starts-with(name(),'AltriDocumenti_')) and (contains(name(),'.Contenuto'))">
      <xsl:variable name="index" select="substring-after((substring-before(name(), '.')), '_')" />
      <fo:table-row>
        <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
          <fo:block>
            <xsl:value-of select="." />
          </fo:block>
        </fo:table-cell>
        <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
          <fo:block>
            <xsl:value-of select="following-sibling::*[name()=concat('AltriDocumenti_', $index, '.Contenuto')]" />
          </fo:block>
          <fo:block>
            <xsl:value-of select="preceding-sibling::*[name()=concat('AltriDocumenti_', $index, '.Contenuto')]" />
          </fo:block>
        </fo:table-cell>
        <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
          <fo:block>
            <xsl:value-of select="following-sibling::*[name()=concat('AltriDocumenti_', $index, '.Contenuto_idDocumento')]" />
          </fo:block>
          <fo:block>
            <xsl:value-of select="preceding-sibling::*[name()=concat('AltriDocumenti_', $index, '.Contenuto_idDocumento')]" />
          </fo:block>
        </fo:table-cell>
        <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
          <fo:block>
            <xsl:value-of select="following-sibling::*[name()=concat('AltriDocumenti_', $index, '.Descrizione')]" />
          </fo:block>
          <fo:block>
            <xsl:value-of select="preceding-sibling::*[name()=concat('AltriDocumenti_', $index, '.Descrizione')]" />
          </fo:block>
        </fo:table-cell>
      </fo:table-row>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
