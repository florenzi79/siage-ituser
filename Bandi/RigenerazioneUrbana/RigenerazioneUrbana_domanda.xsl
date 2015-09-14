<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:java="http://xml.apache.org/xslt/java" exclude-result-prefixes="java" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fo="http://www.w3.org/1999/XSL/Format">
	<xsl:output method="xml" indent="yes" />
	<xsl:template match="/">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format" font-family="Times, 'Times New Roman', serif" font-size="11pt">
			<fo:layout-master-set>
				<fo:simple-page-master master-name="A4" page-width="210mm" page-height="297mm" margin-top="1cm" margin-bottom="1cm" margin-left="2cm" margin-right="2cm">
					<fo:region-body margin-top="3cm" />
					<fo:region-before precedence="true" extent="3cm" />
				</fo:simple-page-master>
			</fo:layout-master-set>
			<fo:page-sequence master-reference="A4">
				<fo:flow flow-name="xsl-region-body">
          <fo:block text-align="left" space-after="10mm" margin-left="90mm">
            <fo:block>Regione Lombardia</fo:block>
            <fo:block>Direzione Generale Territorio, urbanistica e difesa del suolo</fo:block>
            <fo:block>U.O. Strumenti per il governo del territorio</fo:block>
						<fo:block>Struttura Sistema informativo territoriale integrato</fo:block>
            <fo:block>Piazza Città di Lombardia, 1</fo:block>
            <fo:block>20124 - MILANO</fo:block>
          </fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="5mm" border-style="solid">
						<fo:table-column column-width="20mm" />
						<fo:table-column column-width="150mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell text-align="left">
									<fo:block>Oggetto:</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="left" font-weight="bold">
									<fo:block>
										<fo:inline><xsl:value-of select="/_/Richiedente_Tipologia" /></fo:inline>
										<fo:inline padding-left="1mm">di</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_Denominazione" /></fo:inline>
									</fo:block>
									<fo:block>Domanda di partecipazione al bando per la selezione delle migliori iniziative di programmazione territoriale e urbanistica in tema di rigenerazione urbana e territoriale</fo:block>
								</fo:table-cell>
              </fo:table-row>
						</fo:table-body>
					</fo:table>
          <fo:block text-align="justify" space-after="5mm">
            Con la presente si chiede di partecipare al bando di cui in oggetto e contestualmente si comunica che si è provveduto a trasmettere in via telematica attraverso l’applicativo web SiAge la documentazione necessaria, ovvero:
          </fo:block>
					<fo:table table-layout="fixed" width="170mm" space-after="5mm" border-style="solid">
						<fo:table-column column-width="20mm" />
						<fo:table-column column-width="150mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell text-align="right">
									<fo:block>1.</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="left" padding-left="2mm">
									<fo:block>Scheda di sintesi.</fo:block>
								</fo:table-cell>
              </fo:table-row>
							<fo:table-row>
								<fo:table-cell text-align="right">
									<fo:block>2.</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="left" padding-left="2mm">
									<fo:block>Relazione tecnico illustrativa.</fo:block>
								</fo:table-cell>
              </fo:table-row>
						</fo:table-body>
					</fo:table>
					<fo:block text-align="justify" space-after="5mm">
						<fo:inline>L’iniziativa riguarda il progetto denominato</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Progetto_Nome" /></fo:inline>
						<fo:inline padding-left="1mm">di tipo</fo:inline>
						<fo:inline padding-left="1mm">
							<xsl:choose>
								<xsl:when test="/_/Progetto_TipologiaIniziativa[text()='piani_attuativi']">1) Piani attuativi comunali del piano di governo del territorio previsti dalla legislazione statale e regionale</xsl:when>
								<xsl:when test="/_/Progetto_TipologiaIniziativa[text()='programmazione_negoziata']">2) Programmazione negoziata (Accordi di programma e Programmi integrati di intervento)</xsl:when>
								<xsl:when test="/_/Progetto_TipologiaIniziativa[text()='contratti_quartiere']">3) Contratti di quartiere</xsl:when>
								<xsl:when test="/_/Progetto_TipologiaIniziativa[text()='altre_iniziative']">4) Altre iniziative di programmazione territoriale e urbanistica, non incluse nei punti sopra riportati, che rientrino nella definizione di rigenerazione urbana</xsl:when>
							</xsl:choose>
						</fo:inline>
          </fo:block>
					<xsl:if test="/_/Partnership_0.NomePartner">
						<fo:block text-align="justify" space-after="5mm">L’ente firmatario si presenta come capofila di un raggruppamento che comprende anche i seguenti altri soggetti:</fo:block>
						<fo:table table-layout="fixed" width="170mm" space-after="5mm" border-style="solid">
							<fo:table-column column-width="20mm" />
							<fo:table-column column-width="150mm" />
							<fo:table-body>
								<xsl:apply-templates select="(/_/*[(starts-with(name(),'Partnership_')) and (contains(name(),'.NomePartner'))])" />
							</fo:table-body>
						</fo:table>
					</xsl:if>
					<fo:block text-align="justify" space-after="10mm">
            Si dichiara, nella consapevolezza delle sanzioni penali previste dall’art. 76 del d.P.R. 28 dicembre 2000, n. 445, che gli atti relativi al piano/programma trasmessi in forma digitale sono conformi agli originali approvati e depositati agli atti.
          </fo:block>
					<fo:table table-layout="fixed" width="170mm" space-after="10mm" border-style="solid">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="70mm" />
						<fo:table-column column-width="70mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell text-align="center">
									<fo:block>Data</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="center">
									<fo:block></fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="center">
									<fo:block>Firma</fo:block>
								</fo:table-cell>
              </fo:table-row>
							<fo:table-row>
								<fo:table-cell text-align="center">
									<fo:block><xsl:value-of select="java:format(java:java.text.SimpleDateFormat.new('dd/MM/yyyy'), java:java.util.Date.new())"/></fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="center">
									<fo:block></fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="center">
									<fo:block>
										<fo:inline><xsl:value-of select="/_/Richiedente_FirmatarioNome" /></fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_FirmatarioCognome" /></fo:inline>
									</fo:block>
								</fo:table-cell>
              </fo:table-row>
						</fo:table-body>
					</fo:table>
					<fo:block text-align="justify" space-after="5mm">
						<fo:inline>Referente tecnico comunale per comunicazioni relative all’istruttoria della pratica:</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_RupNome" /></fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_RupCognome" /></fo:inline>
						<fo:inline>, tel.</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_RupTelefono" /></fo:inline>
						<fo:inline>, email</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_RupMail" /></fo:inline>
          </fo:block>
					<fo:block text-align="justify">
						<fo:inline>Recapito telematico comunale per comunicazioni ufficiali:</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_Pec" /></fo:inline>
          </fo:block>
        </fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template>
	<xsl:template match="*">
    <xsl:if test="(starts-with(name(),'Partnership_')) and (contains(name(),'.NomePartner'))">
      <xsl:variable name="index" select="substring-after((substring-before(name(), '.')), '_')" />
			<fo:table-row>
				<fo:table-cell text-align="right">
					<fo:block>-</fo:block>
				</fo:table-cell>
				<fo:table-cell text-align="left" padding-left="2mm">
					<fo:block><xsl:value-of select="." /></fo:block>
				</fo:table-cell>
			</fo:table-row>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
