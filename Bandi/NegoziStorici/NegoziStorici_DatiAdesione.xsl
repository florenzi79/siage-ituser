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
          <fo:block font-size="18pt" font-weight="bold" text-align="center" space-after="5mm">BANDO INNOVARE LA TRADIZIONE</fo:block>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="10mm">Dettagli della domanda presentata</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="10mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="70mm" />
            <fo:table-column column-width="100mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Id</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/idPratica" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Data/ora invio al protocollo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/DataInvioProtocolloDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Data Protocollo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/DomandaDiAdesione_DataProtocollo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Numero protocollo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/DomandaDiAdesione_NumeroProtocollo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">1 di 7 - Requisiti di accesso</fo:block>
          <fo:block font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Requsiti minimi di accesso</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Dati generali impresa richiedente</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="70mm" />
            <fo:table-column column-width="100mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Denominazione Impresa richiedente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SoggettoRichiedente_DenominazioneImpresa" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Codice Fiscale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SoggettoRichiedente_CodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Partita IVA</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SoggettoRichiedente_Piva" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Telefono</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SoggettoRichiedente_Telefono" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Mail</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SoggettoRichiedente_Mail" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>PEC</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SoggettoRichiedente_Pec" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Dichiarazioni </fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="150mm" />
            <fo:table-column column-width="20mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il soggetto richiedente dichiara:</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di aver preso visione e di accettare integralmente e senza riserva i contenuti e le condizioni previste nel presente bando, ivi compresa la documentazione obbligatoria da allegare di cui all’art.8 del bando stesso</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_PresaVisione[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_PresaVisione[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di essere a conoscenza delle norme relative a decadenze e revoche dei benefici, ispezioni, controlli e sanzioni</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_ConoscenzaNorme[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_ConoscenzaNorme[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di non aver presentato altre domande a valere sul presente bando a meno di formale ritiro o esclusione della presente pratica</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_AltreDomande[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_AltreDomande[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>la veridicità e la conformità di dati, notizie e dichiarazioni riportate nella domanda on line e negli allegati richiesti per la partecipazione al bando</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_Veridicita[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_Veridicita[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di essere micro, piccola o media impresa (MPMI) con riferimento alla Raccomandazione 361/CE del 6 maggio 2003 (GUUE L 124 del 20 maggio 2003) recepita con Decreto Ministeriale del 18 maggio 2005 (GURI n. 238 del 18 ottobre 2005)1, in possesso di un codice ATECO, primario o secondario, del settore commercio</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_DimensioneImpresa[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_DimensioneImpresa[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di aver ottenuto il riconoscimento con decreto regionale di insegna storica e di tradizione o di negozio/locale storico o di storica attività e pertanto essere iscritta nel Registro Regionale dei luoghi storici del commercio di Lombardia</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_InsegnaStorica[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_InsegnaStorica[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di essere attiva e iscritta al Registro delle imprese di una della Camere di Commercio della Regione Lombardia ed in regola con il pagamento dei Diritti Camerali</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_IscrizioneCamera[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_IscrizioneCamera[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di non trovarsi in nessuna delle situazioni ostative relative agli aiuti di Stato dichiarati incompatibili dalla Commissione europea</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_CondizioneOstativa[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_CondizioneOstativa[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di non essere sottoposta a procedure concorsuali ai sensi del diritto fallimentare interno</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_ProcedureConcorsuali[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_ProcedureConcorsuali[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di avere legali rappresentanti, amministratori (con o senza poteri di rappresentanza) e soci per i quali non sussistano cause di divieto, di decadenza, di sospensione previste dall’articolo 10 L. 575/1965 (c.d. Disposizioni contro la mafia)</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_NoCauseDivieto[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_NoCauseDivieto[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di non avere beneficiato di contributi pubblici in forma di prestito agevolato, soggetto a restituzione o di averne beneficiario e di essere in regola con il pagamento delle rate</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_NoAltriContributiPubblici[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_NoAltriContributiPubblici[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il soggetto richiedente si impegna altresì:</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>a rimuovere apparecchi per il gioco d’azzardo lecito, eventualmente detenuti, alla scadenza del contratto di installazione stipulato con il concessionario e a non procedere con nuove installazioni dalla data di presentazione della richiesta di contributo a valere sul presente bando e per i successivi tre anni dall’erogazione del contributo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_GiocoAzzardo[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_GiocoAzzardo[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Il soggetto richiedente dichiara altresì:</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>di rendere le precedenti dichiarazioni ai sensi dell’art. 47 del DPR 445/2000 e di essere consapevole delle responsabilità penali cui può andare incontro in caso di dichiarazione mendace o di esibizione di atto falso o contenente dati non rispondenti a verità, ai sensi dell’art. 76 del citato DPR 445/2000</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="center">
                  <fo:block>
                    <xsl:choose>
                      <xsl:when test="/_/Dichiarazioni_ResponsabilitaPenali[text()='true']">Sì</xsl:when>
                      <xsl:when test="/_/Dichiarazioni_ResponsabilitaPenali[text()='false']">No</xsl:when>
                    </xsl:choose>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block break-before="page" font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">2 di 7 - Dati della domanda</fo:block>
          <fo:block font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Dati della domanda</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Rappresentante Legale</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="85mm" />
            <fo:table-column column-width="85mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Codice Fiscale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/RappresentanteLegale_CodiceFiscale" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Cognome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/RappresentanteLegale_Cognome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Nome</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/RappresentanteLegale_Nome" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Firmatario</fo:block>
          <xsl:choose>
            <xsl:when test="/_/Firmatario_CoincideRappresentanteLegale[text()='true']">
              <fo:block space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">Il firmatario della domanda coincide con il Rappresentante Legale</fo:block>
            </xsl:when>
            <xsl:when test="/_/Firmatario_CoincideRappresentanteLegale[text()='false']">
              <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
                <fo:table-column column-width="85mm" />
                <fo:table-column column-width="85mm" />
                <fo:table-body>
                  <fo:table-row>
                    <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>Codice Fiscale</fo:block>
                    </fo:table-cell>
                    <fo:table-cell font-size="11pt" padding="1mm">
                      <fo:block>
                        <xsl:value-of select="/_/Firmatario_CodiceFiscale" />
                      </fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                  <fo:table-row>
                    <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>Cognome</fo:block>
                    </fo:table-cell>
                    <fo:table-cell font-size="11pt" padding="1mm">
                      <fo:block>
                        <xsl:value-of select="/_/Firmatario_Cognome" />
                      </fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                  <fo:table-row>
                    <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>Nome</fo:block>
                    </fo:table-cell>
                    <fo:table-cell font-size="11pt" padding="1mm">
                      <fo:block>
                        <xsl:value-of select="/_/Firmatario_Nome" />
                      </fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                  <fo:table-row>
                    <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                      <fo:block>Ruolo</fo:block>
                    </fo:table-cell>
                    <fo:table-cell font-size="11pt" padding="1mm">
                      <fo:block>
                        <xsl:value-of select="/_/Firmatario_Ruolo" />
                      </fo:block>
                    </fo:table-cell>
                  </fo:table-row>
                </fo:table-body>
              </fo:table>
            </xsl:when>
          </xsl:choose>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Sede Legale</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="85mm" />
            <fo:table-column column-width="85mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Indirizzo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeLegale_Indirizzo" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Provincia</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeLegale_ProvinciaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Comune</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeLegale_ComuneDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>CAP</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/SedeLegale_Cap" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Indirizzo del negozio/locale</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="85mm" />
            <fo:table-column column-width="85mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Via/Piazza</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/IndirizzoNegozio_Via" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Provincia</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/IndirizzoNegozio_ProvinciaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Città</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/IndirizzoNegozio_CittaDn" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>CAP</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/IndirizzoNegozio_Cap" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Telefono</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/IndirizzoNegozio_Telefono" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Fax</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/IndirizzoNegozio_Fax" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Coordinate Bancarie</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="85mm" />
            <fo:table-column column-width="85mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Istituto di credito</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/CoordBancarie_Istituto" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Agenzia</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/CoordBancarie_Agenzia" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Intestatario</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/CoordBancarie_Intestatario" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>IBAN</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/CoordBancarie_Iban" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block break-before="page" font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">3 di 7 - Dati del progetto</fo:block>
          <fo:block font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Dettagli</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Ambito di intervento</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="40mm" />
            <fo:table-column column-width="130mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Ambito di intervento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_AmbitoIntervento_')) and (contains(text(),'Ambito1'))])"><fo:block>Ambito 1: Innovazione</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_AmbitoIntervento_')) and (contains(text(),'Ambito2'))])"><fo:block>Ambito 2: Riconversione e sviluppo di impresa</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_AmbitoIntervento_')) and (contains(text(),'Ambito3'))])"><fo:block>Ambito 3: Ricambio generazionale, trasmissione di impresa, rilancio occupazionale</fo:block></xsl:if>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <xsl:if test="(/_/*[(starts-with(name(),'Progetto_AmbitoIntervento_')) and (contains(text(),'Ambito1'))])">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Dettaglio Ambito 1</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoUno_')) and (contains(text(),'11'))])"><fo:block>1.1 interventi per l’applicazione di tecnologie digitali finalizzati allo sviluppo competitivo e all’innovazione dell’attività (siti web, app, blog, negozio virtuale...)</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoUno_')) and (contains(text(),'12'))])"><fo:block>1.2 interventi per lo sviluppo di metodi di acquisto e vendita on line di prodotti e servizi per il made in Lombardy/Italy (e-commerce, mobile commerce…)</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoUno_')) and (contains(text(),'13'))])"><fo:block>1.3 interventi per lo sviluppo di processi e servizi logistici e di customer service innovativi, con particolare riguardo all’esportazione del made in Lombardy/Italy</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoUno_')) and (contains(text(),'14'))])"><fo:block>1.4 interventi per lo sviluppo del marketing digitale al servizio del retail</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoUno_')) and (contains(text(),'15'))])"><fo:block>1.5 interventi finalizzati allo sviluppo di tecnologie innovative nel settore del food (preparazione, metodi di cottura, conservazione, somministrazione)</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoUno_')) and (contains(text(),'16'))])"><fo:block>1.6 interventi finalizzati all’introduzione di tecnologie e impianti innovativi (es. domotica e robotica), inclusi quelli finalizzati alla riqualificazione energetica e al miglioramento della sostenibilità ambientale in ottica di innovazione</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoUno_')) and (contains(text(),'17'))])"><fo:block>1.7 interventi finalizzati all’utilizzo innovativo degli spazi di vendita e dei locali per la ristorazione (arredi, allestimenti, prodotti digitali con caratteristiche interattive e multimediali che favoriscano la fruizione dei luoghi)</fo:block></xsl:if>
                      <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoUno_')) and (contains(text(),'18'))])"><fo:block>1.8 interventi finalizzati all’utilizzo innovativo degli spazi dedicati alla promozione del territorio o allo sviluppo di reti di impresa (allestimenti creativi e/o multimediali di vetrine, corner, strumenti espositivi fisici e/o digitali, spazi e/o eventi espositivi interni ed esterni)</fo:block></xsl:if>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="(/_/*[(starts-with(name(),'Progetto_AmbitoIntervento_')) and (contains(text(),'Ambito2'))])">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Dettaglio Ambito 2</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoDue_')) and (contains(text(),'21'))])"><fo:block>2.1 attività di progettazione, consulenza ed assistenza tecnica per accompagnare le imprese nei processi di riconversione e sviluppo</fo:block></xsl:if>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoDue_')) and (contains(text(),'22'))])"><fo:block>2.2 attività formativa connessa all’utilizzo delle nuove tecnologie digitali e al superamento del digital divide</fo:block></xsl:if>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoDue_')) and (contains(text(),'23'))])"><fo:block>2.3 attività formativa finalizzata all’aggiornamento rispetto alle tendenze del mercato e alle nuove esigenze della clientela</fo:block></xsl:if>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoDue_')) and (contains(text(),'24'))])"><fo:block>2.4 sviluppo e realizzazione di progetti di customer relationship management e di digital planning finalizzati ad intercettare nuovi segmenti di clientela e di vendita</fo:block></xsl:if>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoDue_')) and (contains(text(),'25'))])"><fo:block>2.5 sviluppo e realizzazione di progetti strategici di comunicazione e posizionamento del brand dell’impresa (creazione di nuovi brand identificativi di prodotti o servizi, riutilizzo di campagne pubblicitarie d’epoca usate dai negozi storici nel Novecento, creazione di aggregazioni di prodotto e reti di impresa, sviluppo di itinerari turistici che includono lo shopping)</fo:block></xsl:if>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoDue_')) and (contains(text(),'26'))])"><fo:block>2.6 attività di consulenza mirata per la creazione e promozione di reti di impresa con particolare riferimento a filiere controllate di prodotto legate al territorio</fo:block></xsl:if>
                      </fo:block>
                    </fo:table-cell>
                  </fo:table-row>
              </xsl:if>
              <xsl:if test="(/_/*[(starts-with(name(),'Progetto_AmbitoIntervento_')) and (contains(text(),'Ambito3'))])">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Dettaglio Ambito 3</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoTre_')) and (contains(text(),'31'))])"><fo:block>3.1 attività formativa professionale o manageriale per l’imprenditore subentrante nell’attività</fo:block></xsl:if>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoTre_')) and (contains(text(),'32'))])"><fo:block>3.2 attività formativa finalizzata alla trasmissione delle competenze, rivolta sia ai titolari/gestori delle attività (commercianti, negozianti, gestori di locali, imprenditori…) che ai giovani “apprendisti”, potenziali subentranti</fo:block></xsl:if>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoTre_')) and (contains(text(),'33'))])"><fo:block>3.3 attività formativa finalizzata alla valorizzazione di attività e professioni storiche rivolta ai titolari/gestori (commercianti, negozianti, gestori di locali, imprenditori…)</fo:block></xsl:if>
                        <xsl:if test="(/_/*[(starts-with(name(),'Progetto_DettaglioAmbitoTre_')) and (contains(text(),'34'))])"><fo:block>3.4 consulenza organizzativa, finanziaria, commerciale, tecnica per la fase di avvio del programma di ricambio generazionale</fo:block></xsl:if>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
            </fo:table-body>
          </fo:table>
          <fo:block break-before="page" font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">4 di 7 - Spese</fo:block>
          <fo:block font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Spese</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Spese in conto capitale </fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="140mm" />
            <fo:table-column column-width="30mm" />
            <fo:table-body>
              <xsl:if test="/_/SpeseCapitale_Allestimenti">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>acquisto di allestimenti innovativi per spazi espositivi interni ed esterni</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_Allestimenti" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCapitale_Immobili">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>acquisto di immobili, locali, attrezzature, arredi, impianti e macchinari funzionali a interventi di innovazione</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_Immobili" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCapitale_Hardware">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>acquisto di hardware e di dispositivi per installazioni multimediali (totem, computer, schermi e/o monitor multitouch, vetrine interattive…)</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_Hardware" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCapitale_Software">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>acquisto di software (licenze per programmi e piattafome e-commerce…)</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_Software" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCapitale_Connettivita">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per installazione di connettività dedicata</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_Connettivita" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCapitale_OpereMurarie">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per opere murarie e assimilate, funzionali a interventi di innovazione</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_OpereMurarie" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCapitale_Rinnovamento">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per il rinnovamento di insegne, decori, arredi, vetrine, attrezzature e macchinari, funzionali a interventi di innovazione</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_Rinnovamento" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCapitale_InteventiInnovativi">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per interventi innovativi di efficientamento energetico (coibentazione, sostituzione di serramenti, climatizzazione e riscaldamento, mediante l’utilizzo di materiali, prodotti e tecnologie innovative)</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_InteventiInnovativi" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCapitale_Impianti">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese di realizzazione o rifacimento di impianti (elettrico, termico, idrico, di sicurezza, di domotica, di robotica…) funzionali a interventi di innovazione</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCapitale_Impianti" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Spese Correnti</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="140mm" />
            <fo:table-column column-width="30mm" />
            <fo:table-body>
              <xsl:if test="/_/SpeseCorrente_Progettazione">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese di progettazione, direzione lavori e collaudo</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCorrente_Progettazione" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCorrente_Comunicazione">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese di comunicazione (materiali di comunicazione cartacei e digitali; eventi di inaugurazione o animazione nel punto vendita)</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCorrente_Comunicazione" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCorrente_AttivitaFormativa">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per attività formativa, di aggiornamento professionale e manageriale</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCorrente_AttivitaFormativa" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCorrente_Consulenza">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per servizi di consulenza (organizzativa, finanziaria, commerciale, tecnica, di comunicazione…)</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCorrente_Consulenza" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCorrente_ProgettazioneDigitale">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per servizi di progettazione di strumenti digitali (siti web, blog, social media, piattaforme di e-commerce…)</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCorrente_ProgettazioneDigitale" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCorrente_Pianificazione">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per pianificazione e strategia di eventi e strumenti di comunicazione</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCorrente_Pianificazione" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCorrente_AnalisiMercato">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per analisi di mercato, ricerche e studi, banche dati</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCorrente_AnalisiMercato" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <xsl:if test="/_/SpeseCorrente_Personale">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>spese per il personale impiegato nei progetti, calcolate come riportato all’Appendice A del presente bando</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                    <fo:block>
                      <xsl:value-of select="/_/SpeseCorrente_Personale" /> €
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Contributo concedibile</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Totale spese in conto capitale</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                  <fo:block>
                    <xsl:value-of select="/_/Totale_SpeseCapitale" /> €
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Totale spese correnti</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                  <fo:block>
                    <xsl:value-of select="/_/Totale_SpeseCorrente" /> €
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Costo totale del progetto</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                  <fo:block>
                    <xsl:value-of select="/_/Totale_CostoProgetto" /> €
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>% Spese correnti</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                  <fo:block>
                    <xsl:value-of select="/_/SpeseCorrenti_Percentuale" /> %
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Costo totale ammissibile</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                  <fo:block>
                    <xsl:value-of select="/_/Totale_CostoProgettoAmmissibile" /> €
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Contributo concedibile</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm" text-align="right">
                  <fo:block>
                    <xsl:value-of select="/_/Contributo_Concedibile" /> €
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block break-before="page" font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">5 di 7 - Documenti</fo:block>
          <fo:block font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Documenti</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Documenti da caricare firmati</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Modulo antiriciclaggio</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Documenti da caricare non firmati</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Dichiarazione "de minimis"</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <xsl:if test="/_/Adesione_File_DeMinimisControllateCompilato">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Dichiarazione "de minimis" imprese controllate/controllanti</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Modulo di descrizione del progetto</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Modulo di dettaglio del budget di progetto</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <xsl:if test="/_/Adesione_File_AttoDelega">
                <fo:table-row>
                  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                    <fo:block>Atto di Delega</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-size="11pt" padding="1mm">
                    <fo:block>
                    </fo:block>
                  </fo:table-cell>
                </fo:table-row>
              </xsl:if>
            </fo:table-body>
          </fo:table>
          <xsl:if test="/_/AltriDocumentiAdesione_0.Descrizione">
            <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
              <fo:block>Altri documenti</fo:block>
            </fo:block>
            <fo:table table-layout="fixed" width="170mm" space-after="10mm" border-spacing="0pt 2pt" border-bottom-style="solid">
              <fo:table-column column-width="170mm"/>
              <fo:table-body>
                <xsl:apply-templates select="(/_/*[(starts-with(name(),'AltriDocumentiAdesione_')) and (contains(name(),'.Descrizione'))])" />
              </fo:table-body>
            </fo:table>
          </xsl:if>
          <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">6 di 7 - Domanda di contributo</fo:block>
          <fo:block font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Presentazione della domanda</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Domanda di contributo</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="120mm" />
            <fo:table-column column-width="50mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Domanda di contributo firmata elettronicamente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
            </fo:table-body>
          </fo:table>
          <fo:block break-before="page" font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">7 di 7 - Pagamento bollo</fo:block>
          <fo:block font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">Informazioni di pagamento</fo:block>
          <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">Bollo virtuale</fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
            <fo:table-column column-width="85mm" />
            <fo:table-column column-width="85mm" />
            <fo:table-body>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Soggetto richiedente</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PagamentoBollo_inserzionista" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Email</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PagamentoBollo_email" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Numero ordine</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PagamentoBollo_idOrdine" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Data di pagamento</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PagamentoBollo_dataPagamento" />
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Importo</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PagamentoBollo_importo" /> €
                  </fo:block>
                </fo:table-cell>
              </fo:table-row>
              <fo:table-row>
                <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
                  <fo:block>Esito</fo:block>
                </fo:table-cell>
                <fo:table-cell font-size="11pt" padding="1mm">
                  <fo:block>
                    <xsl:value-of select="/_/PagamentoBollo_esito_label" />
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
    <xsl:if test="(starts-with(name(),'AltriDocumentiAdesione_')) and (contains(name(),'.Descrizione'))">
      <fo:table-row>
        <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
          <fo:block>
            <xsl:value-of select="." />
          </fo:block>
        </fo:table-cell>
      </fo:table-row>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
