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
			<fo:page-sequence master-reference="A4" border-style="solid">
				<fo:static-content flow-name="xsl-region-before">
					<fo:block border-style="solid" text-align="center" padding="2mm">
						<fo:inline>
							<fo:external-graphic src="url('data:image/png;base64,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')" />
						</fo:inline>
					</fo:block>
				</fo:static-content>
				<fo:flow flow-name="xsl-region-body">
					<fo:block font-size="10pt" text-align="center" space-after="10mm" >
						<fo:block font-weight="bold" space-after="1mm">PERCORSI DI ISTRUZIONE E FORMAZIONE PROFESSIONALE (IeFP) I ANNO – A.F. 2015/2016</fo:block>
						<fo:block font-weight="bold" space-after="1mm">di cui al Decreto della Struttura Istruzione e formazione professionale,</fo:block>
						<fo:block font-weight="bold" space-after="5mm">Tecnica superiore e Diritto allo studio del 31/07/2015, n. 6557</fo:block>
						<fo:block font-weight="bold" space-after="10mm">DICHIARAZIONE RIASSUNTIVA UNICA</fo:block>
					</fo:block>
					<!--Operatore -->
						<fo:block font-weight="bold" font-size="10pt" space-after="4mm" border-spacing="0pt 2pt">Operatore</fo:block>
						<fo:table table-layout="fixed" width="170mm" space-after="5mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="140mm" />
					    <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm"
									padding-after="1mm" border-spacing="0pt 2pt">
									<fo:block>ID operatore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm" border-spacing="0pt 2pt">
									<fo:block>
										<xsl:value-of select="/_/Richiedente_IdOperatore"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm"
									padding-after="1mm" border-spacing="0pt 2pt">
									<fo:block>ID unità organizzativa</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm" border-spacing="0pt 2pt">
									<fo:block>
										<xsl:value-of select="/_/Richiedente_IdSede"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm"
									padding-after="1mm" border-spacing="0pt 2pt">
									<fo:block>Ragione sociale</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm" border-spacing="0pt 2pt">
									<fo:block>
										<xsl:value-of select="/_/Richiedente_Denominazione"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					<fo:block font-weight="bold" font-size="10pt" space-after="3mm">Responsabile unità organizzativa</fo:block>
					<fo:table table-layout="fixed" width="170mm" space-after="5mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
					   <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
									<fo:block>Cognome</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm">
                                   <fo:block>
										<xsl:value-of select="/_/Richiedente_FirmatarioCognome" />
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
									<fo:block>Nome</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm">
                                   <fo:block>
										<xsl:value-of select="/_/Richiedente_FirmatarioNome" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
									<fo:block>Codice fiscale</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm">
                                   <fo:block>
										<xsl:value-of select="/_/Richiedente_FirmatarioCodiceFiscale" />
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
									<fo:block></fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
									<fo:block></fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:block font-size="10pt" text-align="justify" space-after="5mm">
							<fo:inline>Il/la sottoscritto/a</fo:inline>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_FirmatarioNome" />
							</fo:inline>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_FirmatarioCognome" />
							</fo:inline>
							<xsl:choose>
								<xsl:when test="/_/Richiedente_FirmatarioNascitaProvincia[text()='EEE']">
									<fo:inline>, nato in</fo:inline>
									<fo:inline padding-left="1mm">
										<xsl:value-of select="/_/Richiedente_FirmatarioNascitaComuneDn" />
									</fo:inline>
									<fo:inline padding-left="1mm">il</fo:inline>
									<fo:inline padding-left="1mm">
										<xsl:value-of select="/_/Richiedente_FirmatarioNascitaData" />
									</fo:inline>
								</xsl:when>
								<xsl:otherwise>
									<fo:inline>, nato a</fo:inline>
									<fo:inline padding-left="1mm">
										<xsl:value-of select="/_/Richiedente_FirmatarioNascitaComuneDn" />
									</fo:inline>
									<fo:inline>, prov.</fo:inline>
									<fo:inline>
										<xsl:value-of select="/_/Richiedente_FirmatarioNascitaProvinciaDn" />
									</fo:inline>
									<fo:inline>, il</fo:inline>
								</xsl:otherwise>
							</xsl:choose>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_FirmatarioNascitaData" />
							</fo:inline>
							<fo:inline>, Cod. Fiscale</fo:inline>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_FirmatarioCodiceFiscale" />
							</fo:inline>
							<fo:inline>, in qualità di</fo:inline>
							<xsl:choose>
								<xsl:when test="/_/Richiedente_FirmatarioRappresentanteLegale[text()='true']">
									<fo:inline padding-left="1mm">rappresentante legale</fo:inline>
								</xsl:when>
								<xsl:otherwise>
									<fo:inline padding-left="1mm">altro soggetto con potere di firma</fo:inline>
								</xsl:otherwise>
							</xsl:choose>
							<fo:inline>, dell’Operatore accreditato</fo:inline>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_Denominazione" />
							</fo:inline>
							<fo:inline padding-left="1mm">con sede in</fo:inline>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_SedeLegaleComuneDn" />
							</fo:inline>
							<fo:inline padding-left="1mm">via/piazza</fo:inline>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_SedeLegaleIndirizzo" />
							</fo:inline>
							<fo:inline>, CAP</fo:inline>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_SedeLegaleCap" />
							</fo:inline>
							<fo:inline padding-left="1mm">Prov. </fo:inline>
							<fo:inline padding-left="1mm">
								<xsl:value-of select="/_/Richiedente_SedeLegaleProvinciaDn" />
							</fo:inline>
					</fo:block>
						<fo:block font-weight="bold" font-size="10pt" text-align="center"
							space-after="2mm">Dichiara</fo:block>
						<fo:table table-layout="fixed" width="170mm" space-after="2mm"
							border-spacing="0pt 2pt">
							<fo:table-column column-width="3mm" />
							<fo:table-column column-width="167mm" />
							<fo:table-body>
								<fo:table-row>
									<fo:table-cell font-size="10pt" text-align="right" padding-before="1mm"
										padding-after="1mm">
										<fo:block>•</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-left="2mm" text-align="justify"
										padding-after="1mm">
										<fo:block>di aver sottoscritto Atto di Adesione Unico con riferimento all’iniziativa PERCORSI DI ISTRUZIONE E FORMAZIONE PROFESSIONALE (IeFP) I ANNO – A.F. 2015/2016 di cui al decreto n. 6557/2015 e quindi di accettare senza riserve le condizioni stabilite da Regione Lombardia per l’erogazione dei servizi formativi e/o al lavoro in regime di concessione. </fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="10pt" text-align="right" padding-before="1mm"
										padding-after="1mm">
										<fo:block>•</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-left="2mm" text-align="justify"
										padding-after="1mm">
										<fo:block>di aver preso in carico il/la Sig./ra:.</fo:block>
									</fo:table-cell>
								</fo:table-row>
									</fo:table-body>
						  </fo:table>

					<!--<fo:block font-style="italic" font-size="10pt" space-after="4mm" border-bottom-style="solid">[Campi compilati in automatico dal PIP]</fo:block> -->
					<fo:table table-layout="fixed" width="170mm" space-after="1mm" border-spacing="0pt 2pt" border-bottom-style="solid">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
					    <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Cognome</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_Cognome"/>
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Nome</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_Nome"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Genere</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:choose>
											<xsl:when test="/_/Partecipante_Genere[text()='M']">Maschile</xsl:when>
											<xsl:when test="/_/Partecipante_Genere[text()='F']">Femminile</xsl:when>
											<xsl:otherwise>Non specificato</xsl:otherwise>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
                                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Codice fiscale</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
								<fo:block>
									<xsl:value-of select="/_/Partecipante_CodiceFiscale"/>
								</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
                                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Nato/a a</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_NascitaComuneDn" />
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Il</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_NascitaData"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					  <fo:table table-layout="fixed" width="170mm" space-after="1mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="15mm" />
						<fo:table-column column-width="40mm" />
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
					    <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
                                   <fo:block>Residente a</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_ResidenzaComuneDn"/>
									</fo:block>
								</fo:table-cell>
							<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>Via</fo:block>
								</fo:table-cell>
                                <fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_ResidenzaIndirizzo"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					   </fo:table>
					<fo:table table-layout="fixed" width="170mm" space-after="1mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="15mm" />
						<fo:table-column column-width="40mm" />
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
					    <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>CAP</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_ResidenzaCap"/>
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>Prov.</fo:block>
								</fo:table-cell>
                                <fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_ResidenzaProvinciaDn"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:table table-layout="fixed" width="170mm" space-after="1mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="15mm" />
						<fo:table-column column-width="40mm" />
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
					    <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
                                   <fo:block>Domiciliato a</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_DomicilioComuneDn"/>
									</fo:block>
								</fo:table-cell>
							<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" border-bottom-style="solid">
                                   <fo:block>Via</fo:block>
								</fo:table-cell>
                                <fo:table-cell font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_DomicilioIndirizzo"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					   </fo:table>

					<fo:table table-layout="fixed" width="170mm" space-after="1mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="15mm" />
						<fo:table-column column-width="40mm" />
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
					    <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>CAP</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_DomicilioCap"/>
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" border-bottom-style="solid">
                                   <fo:block>Prov.</fo:block>
								</fo:table-cell>
                                <fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_DomicilioProvinciaDn"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:table table-layout="fixed" width="170mm" space-after="5mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
						<fo:table-column column-width="30mm" />
						<fo:table-column column-width="55mm" />
					    <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Indirizzo email</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_Email"/>
									</fo:block>
								</fo:table-cell>
                                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
                                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Recapito telefonico</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_DomicilioTelefono"/>
									</fo:block>
								</fo:table-cell>
                                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
                                <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Titolo di studio</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
								   <xsl:choose>
								            <xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='nessun_titolo']">
												 NESSUN TITOLO
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='licenza_elementare']">
												 LICENZA ELEMENTARE/ATTESTATO DI VALUTAZIONE FINALE
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='licenza_media']">
												 LICENZA MEDIA /AVVIAMENTO PROFESSIONALE
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='secondaria']">
												TITOLO DI ISTRUZIONE SECONDARIA di II GRADO (SCOLASTICA  o FORMAZIONE PROFESSIONALE) CHE NON PERMETTE L'ACCESSO ALL'UNIVERSITÀ
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='diploma']">
												DIPLOMA DI ISTRUZIONE SECONDARIA di II GRADO CHE PERMETTE L'ACCESSO ALL'UNIVERSITÀ
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='ifts']">
												QUALIFICA PROFESSIONALE REGIONALE POST-DIPLOMA,  CERTIFICATO DI SPECIALIZZAZIONE TECNICA SUPERIORE (IFTS)
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='its']">
												DIPLOMA DI TECNICO SUPERIORE (ITS)
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='laurea_afam']">
												LAUREA DI I LIVELLO (triennale), DIPLOMA UNIVERSITARIO, DIPLOMA ACCADEMICO di I LIVELLO (AFAM)
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='laurea_magistrale']">
												LAUREA MAGISTRALE/SPECIALISTICA di II LIVELLO, DIPLOMA DI LAUREA DEL VECCHIO ORDINAMENTO (4-6 anni), DIPLOMA ACCADEMICO di II livello
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='dottorato']">
												TITOLO DI DOTTORE DI RICERCA
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='tecnico_comunicazione']">
												AMMISSIONE AL QUARTO ANNO DI UN PERCORSO QUADRIENNALE DI “TECNICO DELLA COMUNICAZIONE AUDIO-VIDEO”
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='tecnico_animazione']">
												AMMISSIONE AL QUARTO ANNO DI UN PERCORSO QUADRIENNALE TECNICO DEI SERVIZI DI ANIMAZIONE TURISTICO SPORTIVA E DEL TEMPO LIBERO
											</xsl:when>
											<xsl:when test="/_/Partecipante_TitoloDiStudioNome[text()='attestato_disabili']">
												QUALORA DISABILI CERTIFICATI DALL’ASL DI COMPETENZA, (SECONDO LE PROCEDURE PREVISTE DAL DPCM DEL 23 FEBBRAIO 2006, N. 185 E LE INDICAZIONI DELLA D.G.R. DEL 4 AGOSTO 2011, N. 2185) TERMINATO TERZO ANNO CON OTTENIMENTO DELL'ATTESTATO DI COMPETENZE
											</xsl:when>
										</xsl:choose>
										</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block></fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block></fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Conseguito il</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_TitoloDiStudioData"/>
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>presso</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/Partecipante_TitoloDiStudioPresso"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					<fo:table table-layout="fixed" width="170mm" space-after="2mm"
							border-spacing="0pt 2pt">
							<fo:table-column column-width="3mm" />
							<fo:table-column column-width="167mm" />
							<fo:table-body>
								<fo:table-row>
									<fo:table-cell font-size="10pt" text-align="right" padding-before="1mm"
										padding-after="1mm">
										<fo:block>•</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-left="2mm" text-align="justify"
										padding-after="1mm">
										<fo:block>
										<fo:inline>di aver accertato le generalità del Sig./ra</fo:inline>
							            <fo:inline padding-left="1mm">
								            <xsl:value-of select="/_/Partecipante_Nome"/>
							            </fo:inline>
										<fo:inline padding-left="1mm">
								           <xsl:value-of select="/_/Partecipante_Cognome"/>
							            </fo:inline>
										<fo:inline padding-left="1mm">, codice fiscale</fo:inline>
										<fo:inline padding-left="1mm">
								           <xsl:value-of select="/_/Partecipante_CodiceFiscale"/>
							            </fo:inline>
										<fo:inline padding-left="1mm">e di aver acquisito dal/la stesso/a la documentazione attestante il possesso dei requisiti soggettivi previsti per l’accesso alla Dote, di cui al decreto del 31/07/2015, n. 6557</fo:inline>
									</fo:block>
									</fo:table-cell>
								</fo:table-row>
							</fo:table-body>
					</fo:table>
					<fo:table table-layout="fixed" width="170mm" space-after="2mm"
							border-spacing="0pt 2pt">
							<fo:table-column column-width="3mm" />
							<fo:table-column column-width="167mm" />
							<fo:table-body>
								<fo:table-row>
									<fo:table-cell font-size="10pt" text-align="right" padding-before="1mm"
										padding-after="1mm">
										<fo:block>•</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-left="2mm" text-align="justify"
										padding-after="1mm">
										<fo:block>
										<fo:inline>di aver concordato e sottoscritto, con il Sig./ra Sig./ra</fo:inline>
							            <fo:inline padding-left="1mm">
								            <xsl:value-of select="/_/Partecipante_Nome"/>
							            </fo:inline>
										<fo:inline padding-left="1mm">
								           <xsl:value-of select="/_/Partecipante_Cognome"/>
							            </fo:inline>
										<fo:inline padding-left="1mm">codice fiscale</fo:inline>
										<fo:inline padding-left="1mm">
								           <xsl:value-of select="/_/Partecipante_CodiceFiscale"/>
							            </fo:inline>
										<fo:inline padding-left="1mm">un Piano di Intervento Personalizzato (PIP) che prevede i seguenti servizi con relativa valorizzazione economica (*):</fo:inline>
									</fo:block>
									</fo:table-cell>
								</fo:table-row>
							</fo:table-body>
					</fo:table>

					<fo:block font-weight="bold" font-size="10pt" space-after="4mm">A) Servizi al lavoro</fo:block>
						   <fo:table table-layout="fixed" width="170mm" space-after="0mm" border-spacing="0pt 2pt" border-style="solid">
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
                            <fo:table-column column-width="20mm" />
							<fo:table-column column-width="30mm" />
						    <fo:table-body>
						  		<fo:table-row background-color="#FFFF66">
						  			<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
						  				<fo:block>Tipologia delle attività</fo:block>
						  			</fo:table-cell>
                                    <fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
                                        <fo:block>Periodo di attuazione delle attività</fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
                                        <fo:block>Operatore che eroga il servizio</fo:block>
                                    </fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Soggetti terzi coinvolti</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Ore</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Valorizzazione</fo:block>
									</fo:table-cell>
									</fo:table-row>
							</fo:table-body>
							</fo:table>
						<fo:table font-weight="italic" table-layout="fixed" space-after="4mm" width="170mm" border-style="solid">
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
                            <fo:table-column column-width="20mm" />
							<fo:table-column column-width="30mm" />
						      <fo:table-body>
						  		<fo:table-row>
						  			<fo:table-cell font-weight="italic" font-size="9pt" text-align="left" margin-left="1mm" padding-before="3mm" padding-after="3mm" border-style="solid">
						  				<fo:block>Servizio 1</fo:block>
						  			</fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block>n.a.</fo:block>
                                   </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
								   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
                               </fo:table-row>

							   <fo:table-row>
						  			<fo:table-cell font-weight="italic" font-size="9pt" text-align="left" margin-left="1mm" padding-before="3mm" padding-after="3mm" border-style="solid">
						  				<fo:block>Servizio 2</fo:block>
						  			</fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block>n.a.</fo:block>
                                   </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
								   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
                               </fo:table-row>

							  <fo:table-row>
						  			<fo:table-cell font-weight="italic" font-size="9pt" text-align="left" margin-left="1mm" padding-before="3mm" padding-after="3mm" border-style="solid">
						  				<fo:block>....</fo:block>
						  			</fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block>n.a.</fo:block>
                                   </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
								   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
                               </fo:table-row>

							   <fo:table-row>
						  			<fo:table-cell font-weight="italic" font-size="9pt" text-align="left" margin-left="1mm" padding-before="3mm" padding-after="3mm" border-style="solid">
						  				<fo:block>Servizio n</fo:block>
						  			</fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block>n.a.</fo:block>
                                   </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
								   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
                               </fo:table-row>

							     </fo:table-body>
				   </fo:table>

					 <!--Servizi alla formazione-->
					<xsl:if test="/_/ServiziFormazione_RiepilogoServizi_0.TitoloCorso">
						<fo:block font-weight="bold" font-size="10pt" space-after="4mm">B) Servizi alla formazione</fo:block>
						<fo:table table-layout="fixed" width="170mm" space-after="8mm" border-spacing="0pt 2pt" border-style="solid">
							<fo:table-column column-width="30mm" />
						  <fo:table-column column-width="30mm" />
						  <fo:table-column column-width="30mm" />
						  <fo:table-column column-width="30mm" />
              <fo:table-column column-width="20mm" />
							<fo:table-column column-width="30mm" />
							<fo:table-body>
								<fo:table-row background-color="#FFFF66">
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Tipologia delle attività</fo:block>
									</fo:table-cell>
                  <fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Periodo di attuazione delle attività</fo:block>
                  </fo:table-cell>
                  <fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Operatore che eroga il servizio</fo:block>
                  </fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Soggetti terzi coinvolti</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Ore</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt" border-style="solid">
										<fo:block>Valorizzazione</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<xsl:apply-templates select="(/_/*[(starts-with(name(),'ServiziFormazione_RiepilogoServizi_')) and (contains(name(),'.TitoloCorso'))])" />
							</fo:table-body>
						</fo:table>
					</xsl:if>
					<!--<xsl:if test="/_/Partecipante_CategorieSvantaggio_0[text()='disabile']">
					<fo:table font-weight="italic" table-layout="fixed" space-before="0mm" space-after="4mm" width="170mm" border-style="solid">
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
						  	<fo:table-column column-width="30mm" />
                            <fo:table-column column-width="20mm" />
							<fo:table-column column-width="30mm" />
						      <fo:table-body>
						  		<fo:table-row>
						  			<fo:table-cell font-weight="italic" font-size="9pt" text-align="left" margin-left="1mm" padding-before="3mm" padding-after="3mm" border-style="solid">
						  				<fo:block>Funzione di servizio di sostegno durante il percorso formativo, riservato agli allievi disabili</fo:block>
						  			</fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                        <fo:block></fo:block>
                                    </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
                                   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block></fo:block>
                                   </fo:table-cell>
								   <fo:table-cell font-size="9pt" text-align="center" padding-before="3mm" padding-after="3mm" border-style="solid">
                                       <fo:block>3.000 €</fo:block>
                                   </fo:table-cell>
                               </fo:table-row>
							   </fo:table-body>
						</fo:table>
					</xsl:if>-->

						  <fo:block font-size="10pt" space-after="5mm">
						  <fo:inline>
						   per un valore economico complessivo dei servizi  pari ad €
						   </fo:inline>
						   <fo:inline padding-left="1mm">
						     <xsl:value-of select="/_/ServiziFormazione_ImportoTotale" />
							</fo:inline>
						   </fo:block>

						   <fo:table table-layout="fixed" width="170mm" space-after="5mm"
							border-spacing="0pt 2pt">
							<fo:table-column column-width="3mm" />
							<fo:table-column column-width="167mm" />
							<fo:table-body>
								<fo:table-row>
									<fo:table-cell font-size="10pt" text-align="right" padding-before="1mm"
										padding-after="1mm">
										<fo:block>•</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-left="2mm" text-align="justify"
										padding-after="1mm">
										<fo:block>
										<fo:inline>di aver verificato, che il Sig./ra</fo:inline>
							            <fo:inline padding-left="1mm">
								            <xsl:value-of select="/_/Partecipante_Nome" />
							            </fo:inline>
										<fo:inline padding-left="1mm">
								           <xsl:value-of select="/_/Partecipante_Cognome" />
							            </fo:inline>
										<fo:inline padding-left="1mm">, codice fiscale</fo:inline>
										<fo:inline padding-left="1mm">
								           <xsl:value-of select="/_/Partecipante_CodiceFiscale"/>
							            </fo:inline>
										<fo:inline>, è in possesso dei requisiti previsti dal decreto del 31/07/2015, n. 6557, per fruire dell’indennità di partecipazione connessa alla fruizione dei servizi formativi e/o al lavoro previsti nel Piano di Intervento Personalizzato (PIP) sottoscritto, per un valore economico complessivo pari ad €</fo:inline>
										<fo:inline padding-left="1mm">
								            <xsl:value-of select="/_/ServiziFormazione_ImportoTotale" />
							            </fo:inline>
									</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="10pt" text-align="right" padding-before="1mm"
										padding-after="1mm">
										<fo:block>•</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-left="2mm" text-align="justify"
										padding-after="1mm">
										<fo:block>
										<fo:inline>che il termine entro il quale si prevede di concludere i servizi contenuti nel Piano di Intervento Personalizzato è il</fo:inline>
										<fo:inline padding-left="1mm">
											<xsl:value-of select="/_/ServiziFormazione_DataConclusioneMax" />
										</fo:inline>
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="10pt" text-align="right" padding-before="1mm"
										padding-after="1mm">
										<fo:block>•</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-left="2mm" text-align="justify"
										padding-after="1mm">
										<fo:block>
										<fo:inline>di conservare presso la propria sede i documenti previsti per la partecipazione alla dote, secondo quanto previsto dal Manuale Operatore di cui al d.d.u.o. del 22 febbraio 2012, n. 1319 e successive modifiche conseguenti all’applicazione del Reg. 1303/2013;</fo:inline>
										<fo:inline padding-left="1mm"></fo:inline>
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="10pt" text-align="right" padding-before="1mm"
										padding-after="1mm">
										<fo:block>•</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-left="2mm" text-align="justify"
										padding-after="1mm">
										<fo:block>
										<fo:inline>di aver individuato il tutor che dovrà accompagnare la persona durante la realizzazione del PIP </fo:inline>
										<fo:inline padding-left="1mm"></fo:inline>
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
									</fo:table-body>
						  </fo:table>

						<fo:table table-layout="fixed" width="170mm" space-after="5mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="60mm" />
						<fo:table-column column-width="90mm" />
					    <fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Cognome e Nome</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<fo:inline padding-left="1mm">
								            <xsl:value-of select="/_/TutorFormativo_Cognome" />
							            </fo:inline>
										<fo:inline padding-left="1mm">
								           <xsl:value-of select="/_/TutorFormativo_Nome" />
							            </fo:inline>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Codice fiscale</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/TutorFormativo_CodiceFiscale" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Titolo di studio</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
								   <xsl:choose>
								            <xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='diplomaNoAccessoUniversita']">
												 Diploma di qualifica di 2-3 anni che non consente l’accesso all’università
											</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='diplomaSiAccessoUniversita']">
												Diploma di scuola secondaria superiore 4-5 anni che consente l’iscrizione all’università
											</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='afam']">
												Alta Formazione Artistica e Musicale (AFAM) e equipollenti
											</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='diplomaUniversitario']">
												Diploma universitario o di scuola diretta fini speciali (vecchio ordinamento)</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='laureaTriennale']">
												 Laurea triennale (nuovo ordinamento)
											</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='masterPostLaureaTriennale']">
												Master post laurea triennale (o master di I livello)
											</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='laureaSpecialistica']">
												Laurea specialistica (3+2) / Laurea vecchio ordinamento / Laurea a ciclo univoco
											</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='masterPostLaureaSpecialistica']">
												Master post laurea specialistica / vecchio ordinamento / ciclo unico
											</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='specializzazionePostLaurea']">
												Specializzazione post laurea - compresi corsi di perfezionamento
											</xsl:when>
											<xsl:when test="/_/TutorFormativo_TitoloDiStudioNome[text()='dottoratoDiRicerca']">
												Dottorato di ricerca
											</xsl:when>
										    </xsl:choose>
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Dettaglio</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
										<xsl:value-of select="/_/TutorFormativo_DescrizioneTitoloDiStudio" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Anni di esperienza</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
								   <xsl:value-of select="translate(format-number(translate(/_/TutorFormativo_EsperienzaAnni, ',.', '.,'), '#'), ',.','.')"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm" border-bottom-style="solid">
									<fo:block>Esperienza nel settore</fo:block>
								</fo:table-cell>
								<fo:table-cell background-color="#E3E3E3" font-size="10pt" padding="1mm" border-bottom-style="solid">
                                   <fo:block>
								   <xsl:value-of select="/_/TutorFormativo_EsperienzaSettore" />
								</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:block font-style="italic" font-size="10pt" text-align="left">
							<fo:inline>(*) Le modifiche al percorso che interverranno successivamente alla comunicazione di accettazione saranno tracciate nel sistema informativo Finanziamenti on line dall'operatore, che conserverà la relativa documentazione agli atti, secondo le condizioni e le modalità indicate nel Manuale Operatore.</fo:inline>
					</fo:block>

						<fo:block font-size="10pt" text-align="left" space-before="5mm">
							<fo:inline><xsl:value-of select="/_/Richiedente_SedeOperativa_ComuneDn" /></fo:inline>
							<fo:inline>, lì</fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/Domanda_Data"/></fo:inline>
						</fo:block>

					<fo:table table-layout="fixed" width="170mm" space-after="5mm" border-spacing="0pt 2pt">
					    <fo:table-column column-width="15mm"/>
						<fo:table-column column-width="70mm"/>
						<fo:table-column column-width="70mm"/>
						<fo:table-column column-width="15mm"/>
					    <fo:table-body>
						<fo:table-row>
						<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
									<fo:block></fo:block>
								</fo:table-cell>
                       <fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
						<fo:block font-size="10pt" text-align="left" space-before="5mm">
							<fo:inline>L'Operatore</fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_FirmatarioNome" /></fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_FirmatarioCognome" /></fo:inline>
						</fo:block>
						<fo:block font-style="italic" font-size="7pt" text-align="left" >
							<fo:inline>Firma CRS del rappresentante legale o di altro soggetto con potere di firma</fo:inline>
						</fo:block>
						</fo:table-cell>
						<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
						<fo:block font-size="10pt" text-align="left" space-before="5mm">
							<fo:inline>Il destinatario</fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/Partecipante_Nome" /></fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/Partecipante_Cognome" /></fo:inline>
						</fo:block>
						<fo:block font-style="italic" font-size="7pt" text-align="left">
							<fo:inline>Firma leggibile (solo per la copia cartacea) del destinatario o di chi ne fa le veci.</fo:inline>
						</fo:block>
						</fo:table-cell>
						<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
									<fo:block></fo:block>
						</fo:table-cell>
						</fo:table-row>
						</fo:table-body>
					</fo:table>


					</fo:flow>
				</fo:page-sequence>
			</fo:root>
		</xsl:template>
		<xsl:template match="*">
			<xsl:if test="(starts-with(name(),'ServiziFormazione_RiepilogoServizi_')) and (contains(name(),'.TitoloCorso'))">
				<xsl:variable name="index" select="substring-after((substring-before(name(), '.')), 'ServiziFormazione_RiepilogoServizi_')" />
				<fo:table-row border-bottom-style="solid">
					<fo:table-cell font-size="9pt" padding="1mm" text-align="left" border-spacing="0pt 2pt" border-style="solid">
						<fo:block><xsl:value-of select="." /></fo:block>
					</fo:table-cell>
					<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
						<fo:block><xsl:value-of select="following-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.DataAvvio')]"/></fo:block>
						<fo:block><xsl:value-of select="following-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.DataConclusione')]"/></fo:block>
						<fo:block><xsl:value-of select="preceding-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.DataAvvio')]"/></fo:block>
						<fo:block><xsl:value-of select="preceding-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.DataConclusione')]"/></fo:block>
					</fo:table-cell>
					<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
						<fo:block><xsl:value-of select="/_/Richiedente_Denominazione" /></fo:block>
					</fo:table-cell>
					<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
						<fo:block>n.a.</fo:block>
					</fo:table-cell>
					<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
						<fo:block><xsl:value-of select="following-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.Ore')]"/></fo:block>
						<fo:block><xsl:value-of select="preceding-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.Ore')]"/></fo:block>
					</fo:table-cell>
					<fo:table-cell font-size="9pt" padding="1mm"  text-align="center" border-spacing="0pt 2pt" border-style="solid">
						<fo:block><xsl:value-of select="following-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.ImportoAmmissibile')]"/></fo:block>
						<fo:block><xsl:value-of select="preceding-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.ImportoAmmissibile')]"/></fo:block>
					</fo:table-cell>
				</fo:table-row>
			</xsl:if>
		</xsl:template>
	</xsl:stylesheet>
