<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:xs="http://www.w3.org/2001/XMLSchema"
xmlns:fo="http://www.w3.org/1999/XSL/Format">
<xsl:output method="xml" indent="yes" />
<xsl:template match="/">
<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format"
font-family="Arial, Helvetica, sans-serif">
  <fo:layout-master-set>
<fo:simple-page-master master-name="A4" page-width="210mm" page-height="297mm" margin-top="1cm" margin-bottom="1cm" margin-left="2cm" margin-right="2cm">
<fo:region-body margin-top="3cm" />
<fo:region-before precedence="true" extent="3cm" />
  </fo:simple-page-master>
</fo:layout-master-set>
  <fo:page-sequence master-reference="A4">
    <fo:flow flow-name="xsl-region-body">
      <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">1.4 Requisiti  di accesso</fo:block>
<fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">
Verifica Requisiti
</fo:block>
<fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Richiedente
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>ID Pratica</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/idPratica" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Titolo Pratica</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Titolo" />
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
              <fo:block>ASL</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_ASL" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Disponibilità ASL</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Budget_ASL" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Natura giuridica</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_NaturaGiuridica" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Fase pratica</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/fasePratica" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Stato pratica</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/statoPratica" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Denominazione</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_Denominazione" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Dati Anagrafici
</fo:block>
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
                <xsl:value-of select="/_/Beneficiario_CodiceFiscale" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Cognome</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_Cognome" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Nome</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_Nome" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Genere</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Beneficiario_Genere[text()='femmina']">Femmina</xsl:when>
                  <xsl:when test="/_/Beneficiario_Genere[text()='maschio']">Maschio</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Data di nascita</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_DataNascita" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Provincia di nascita</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_ProvinciaNascita" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Beneficiario_ProvinciaNascitaDn</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_ProvinciaNascitaDn" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Comune di nascita</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_ComuneNascita" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Beneficiario_ComuneNascitaDn</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_ComuneNascitaDn" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Residenza
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Provincia di residenza</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_ProvinciaResidenza" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Beneficiario_ProvinciaResidenzaDn</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_ProvinciaResidenzaDn" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Comune di residenza</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_ComuneResidenza" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Beneficiario_ComuneResidenzaDn</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_ComuneResidenzaDn" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>CAP di residenza</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_CapResidenza" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Indirizzo di residenza</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_IndirizzoResidenza" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Numero civico di residenza</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_CivicoResidenza" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Numero di telefono</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_TelefonoResidenza" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Indirizzo email</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_MailResidenza" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Il domicilio è uguale alla residenza? </fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Beneficiario_DomicilioResidenza[text()='true']">Sì</xsl:when>
                  <xsl:when test="/_/Beneficiario_DomicilioResidenza[text()='false']">No</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Domicilio
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Provincia di domicilio</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/SedeProgetto_Provincia" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>SedeProgetto_ProvinciaDn</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/SedeProgetto_ProvinciaDn" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Comune di domicilio</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/SedeProgetto_Comune" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>SedeProgetto_ComuneDn</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/SedeProgetto_ComuneDn" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>CAP di domicilio</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/SedeProgetto_Cap" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Indirizzo di domicilio</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_IndirizzoDomicilio" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Numero civico di domicilio</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_CivicoDomicilio" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Numero di telefono</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_TelefonoDomicilio" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">2.4 Altri Dati</fo:block>
<fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">
Altri Dati
</fo:block>
<fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Altri Dati
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Cittandinanza</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Beneficiario_Cittandinanza[text()='ue']">UE</xsl:when>
                  <xsl:when test="/_/Beneficiario_Cittandinanza[text()='extra_ue']">Extra UE</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Stato</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Beneficiario_StatoCittandinanza" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Motivo Segnalazione</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Beneficiario_MotivoSegnalazione[text()='abbandono']">Abbandono scolastico (fallimenti scolastici/formativi)</xsl:when>
                  <xsl:when test="/_/Beneficiario_MotivoSegnalazione[text()='disagio']">Disagio psicologico e relazionale, blocchi del processo evolutivo (relazioni familiari difficili, eventi di vita stressanti, devianza e coinvolgimento in gruppi a rischio, agiti autolesivi, ideazione suicidaria; attacchi di panico e disturbi somatici)</xsl:when>
                  <xsl:when test="/_/Beneficiario_MotivoSegnalazione[text()='sostanze_abuso']">Uso e abuso di sostanze (consumo non occasionale di alcol e droghe)   - isolamento sociale (scarsa capacità di adattamento, presenza di problemi psicologici, problemi comportamentali)</xsl:when>
                  <xsl:when test="/_/Beneficiario_MotivoSegnalazione[text()='isolamento_sociale']">Isolamento sociale (scarsa capacità di adattamento, presenza di problemi psicologici, problemi comportamentali)</xsl:when>
                  <xsl:when test="/_/Beneficiario_MotivoSegnalazione[text()='problemi_penali']">Problemi con la giustizia (comportamenti antisociali, delinquenziali, distruttivi, problemi di tipo penale o amministrativo per reati come risse o detenzione illegale di stupefacenti)</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Ente Segnalante</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/EnteSegnalante" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">3.4 Dati del PI</fo:block>
<fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">
Dati del PI
</fo:block>
<fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Firmatario
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Nome Rappresentante Legale</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_RappresentanteLegaleNome" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Cognome Rappresentante Legale</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_RappresentanteLegaleCognome" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Codice Fiscale  Rappresentante Legale</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_RappresentanteLegaleCodiceFiscale" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Il firmatario coincide col rappresentante legale?</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Richiedente_FirmatarioRappresentanteLegale[text()='true']">Si</xsl:when>
                  <xsl:when test="/_/Richiedente_FirmatarioRappresentanteLegale[text()='false']">No</xsl:when>
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
              <fo:block>Provincia di nascita (EE per Stato estero)</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_FirmatarioNascitaProvincia" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Comune/stato estero di nascita</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_FirmatarioNascitaComune" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Data di nascita</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_FirmatarioNascitaData" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Genere</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Richiedente_FirmatarioGenere[text()='femmina']">Femmina</xsl:when>
                  <xsl:when test="/_/Richiedente_FirmatarioGenere[text()='maschio']">Maschio</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Contatti Utili del referente pratica
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Cognome</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_RUPCognome" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Nome</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_RUPNome" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Telefono</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_RUPTelefono" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Email</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Richiedente_RUPMail" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="14pt" font-weight="bold" text-align="left" space-after="5mm">
        <fo:block>PI</fo:block>
      </fo:block>
      <fo:table table-layout="fixed" width="170mm" border-spacing="0pt 2pt" border-style="solid" space-after="8mm">
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-body>
          <fo:table-row border-bottom-style="solid">
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Servizio Erogato</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Numero di accessi massimi ammissibile del servizio</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Costo accesso standard</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Costo servizio (massimo riconoscibile)</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Data avvio del Servizio</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Data conclusione del Servizio</fo:block>
            </fo:table-cell>
          </fo:table-row>
          <xsl:apply-templates select="(/_/*[(starts-with(name(),'PI_')) and (contains(name(),'.ServizioErogato'))])" />
        </fo:table-body>
      </fo:table>
      <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Dati di sintesi
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Durata del progetto (mesi)</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Progetto_Durata" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Risultati ottenuti ed esiti prodotti dall’attuazione del PEI</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/Progetto_Risultati_Pei" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Totale costo PI</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/SintesiCosti_ContributoRichiesto" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="14pt" font-weight="bold" text-align="left" space-after="5mm">
        <fo:block>Spese di progetto</fo:block>
      </fo:block>
      <fo:table table-layout="fixed" width="170mm" border-spacing="0pt 2pt" border-style="solid" space-after="8mm">
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-column column-width="28" border-right-style="solid"/>
        <fo:table-body>
          <fo:table-row border-bottom-style="solid">
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Voce di costo di primo livello</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Voce di costo di secondo livello</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Importo</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Quota pubblica richiesta</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Tipo di aiuto</fo:block>
            </fo:table-cell>
            <fo:table-cell margin-left="2mm" font-size="9pt" padding="1mm" font-weight="bold" text-align="left">
              <fo:block>Forma di aiuto</fo:block>
            </fo:table-cell>
          </fo:table-row>
          <xsl:apply-templates select="(/_/*[(starts-with(name(),'DettaglioCosti_')) and (contains(name(),'.VoceDiCostoPrimoLivello'))])" />
        </fo:table-body>
      </fo:table>
      <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">4.4 Documenti</fo:block>
<fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">
Documenti
</fo:block>
<fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Documenti da scaricare
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>SINTESI VALUTAZIONE MULTIDIMENSIONALE</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Adesione_File_SintesiValutazione[text()='link']">
                  </xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>PI</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Adesione_File_DomandaPI[text()='filename']">template.pdf</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Documenti da caricare
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>SINTESI VALUTAZIONE MULTIDIMENSIONALE</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Adesione_File_SintesiValuzioneFirmato[text()='signed']">Richiedente_FirmatarioCodiceFiscale</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>PI</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/Adesione_File_DomandaPIFirmato[text()='signed']">Richiedente_FirmatarioCodiceFiscale</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
        </fo:table-body>
      </fo:table>
      <fo:block font-size="16pt" font-weight="bold" text-align="center" space-after="5mm">Pratica presentata</fo:block>
<fo:block break-before="page" font-size="14pt" font-weight="bold" text-align="center" space-after="10mm">
Pratica presentata
</fo:block>
<fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="2mm">
Dettagli della presentazione
</fo:block>
<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" border-bottom-style="solid">
        <fo:table-column column-width="120mm" />
<fo:table-column column-width="50mm" />
        <fo:table-body>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Data di protocollazione</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/DomandaDiAdesione_dataProtocollo" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Numero protocollo</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:value-of select="/_/DomandaDiAdesione_numeroProtocollo" />
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>ASL</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/ASL[text()='ref']">Richiedente_ASL</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Nome del beneficiario</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/NomeBeneficiario[text()='ref']">Beneficiario_Nome</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Cognome del beneficiario</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/CognomeBeneficiario[text()='ref']">Beneficiario_Cognome</xsl:when>
                </xsl:choose>
              </fo:block>
            </fo:table-cell>
          </fo:table-row>
          <fo:table-row>
            <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
              <fo:block>Codice fiscale del beneficiario</fo:block>
            </fo:table-cell>
            <fo:table-cell font-size="11pt" padding="1mm">
              <fo:block>
                <xsl:choose>
                  <xsl:when test="/_/CodiceFiscaleBeneficiario[text()='ref']">Beneficiario_CodiceFiscale</xsl:when>
                </xsl:choose>
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
  <xsl:if test="(starts-with(name(),'PI_')) and (contains(name(),'.ServizioErogato'))">
    <xsl:variable name="index" select="substring-after((substring-before(name(), '.')), '_')" />
    <fo:table-row>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="." />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('PI_', $index, '.ServizioErogato')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('PI_', $index, '.ServizioErogato')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('PI_', $index, '.NumeroAccessi')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('PI_', $index, '.NumeroAccessi')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('PI_', $index, '.CostoAccessoStandard')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('PI_', $index, '.CostoAccessoStandard')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('PI_', $index, '.CostoServizio')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('PI_', $index, '.CostoServizio')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('PI_', $index, '.DataAvvioServizio')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('PI_', $index, '.DataAvvioServizio')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('PI_', $index, '.DataFineServizio')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('PI_', $index, '.DataFineServizio')]" />
        </fo:block>
      </fo:table-cell>
    </fo:table-row>
  </xsl:if>
  <xsl:if test="(starts-with(name(),'DettaglioCosti_')) and (contains(name(),'.VoceDiCostoPrimoLivello'))">
    <xsl:variable name="index" select="substring-after((substring-before(name(), '.')), '_')" />
    <fo:table-row>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="." />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('DettaglioCosti_', $index, '.VoceDiCostoPrimoLivello')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('DettaglioCosti_', $index, '.VoceDiCostoPrimoLivello')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('DettaglioCosti_', $index, '.VoceDiCostoSecondoLivello')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('DettaglioCosti_', $index, '.VoceDiCostoSecondoLivello')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('DettaglioCosti_', $index, '.Presentato')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('DettaglioCosti_', $index, '.Presentato')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('DettaglioCosti_', $index, '.QuotaPubblicaRichiesta')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('DettaglioCosti_', $index, '.QuotaPubblicaRichiesta')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('DettaglioCosti_', $index, '.TipoAiuto')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('DettaglioCosti_', $index, '.TipoAiuto')]" />
        </fo:block>
      </fo:table-cell>
      <fo:table-cell font-size="11pt" text-align="left" padding="1mm">
        <fo:block>
          <xsl:value-of select="following-sibling::*[name()=concat('DettaglioCosti_', $index, '.FormaAiuto')]" />
        </fo:block>
        <fo:block>
          <xsl:value-of select="preceding-sibling::*[name()=concat('DettaglioCosti_', $index, '.FormaAiuto')]" />
        </fo:block>
      </fo:table-cell>
    </fo:table-row>
  </xsl:if>
</xsl:template>
</xsl:stylesheet>
