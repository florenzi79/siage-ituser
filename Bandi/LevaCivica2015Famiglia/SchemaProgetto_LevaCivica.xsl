<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema"
	xmlns:fo="http://www.w3.org/1999/XSL/Format">
	<xsl:output method="xml" indent="yes" />

	<xsl:template match="/">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format"
			font-family="Arial, Helvetica, sans-serif">

			<fo:layout-master-set>
				<fo:simple-page-master master-name="A4"
					page-width="210mm" page-height="297mm" margin-top="1cm"
					margin-bottom="1cm" margin-left="2cm" margin-right="2cm">
					<fo:region-body margin-top="3cm" />
					<fo:region-before precedence="true" extent="3cm" />
				</fo:simple-page-master>
			</fo:layout-master-set>

			<fo:page-sequence master-reference="A4">
				<fo:static-content flow-name="xsl-region-before">
					<fo:block text-align="center">
						<fo:inline>
							<fo:external-graphic
								src="url('data:image/jpeg;base64,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')" />
						</fo:inline>
					</fo:block>
				</fo:static-content>
				<fo:flow flow-name="xsl-region-body">
						
					<fo:block font-size="11pt" font-weight="bold" text-align="center" space-after="10mm">Schema progetto di leva civica autofinanziato dal soggetto attuatore del progetto di leva civica</fo:block>

					<fo:table table-layout="fixed" width="170mm" space-before="10mm" space-after="10mm"
						border-spacing="0pt 2pt" border-top-style="solid" border-bottom-style="solid">
						<fo:table-column column-width="170mm" />
						<fo:table-body>
						<fo:table-row>
						  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
							<fo:block>
								<fo:inline font-size="11pt" font-weight="bold">A. Ente</fo:inline>
							</fo:block>
						  </fo:table-cell>
						</fo:table-row>
						</fo:table-body>
					</fo:table>
						
						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline font-size="11pt" font-weight="bold" space-after="1mm">SOGGETTO PROPONENTE / CAPOFILA</fo:inline>
						</fo:block>

						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>1A) Denominazione completa del soggetto proponente e/o capofila:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Richiedente_Denominazione" />
							</fo:inline>
						</fo:block>
						
						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>2A) Sito internet:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Richiedente_SitoInternet" />
							</fo:inline>
						</fo:block>
						
						<fo:block font-size="11pt" text-align="left" space-after="0mm">
							<fo:inline>3A) Recapiti soggetto proponente:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Richiedente_Indirizzo" />
							</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Richiedente_ComuneDn" />
							</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								(<xsl:value-of select="/_/Richiedente_ProvinciaDn" />)
							</fo:inline>
						</fo:block>
						<fo:block font-size="11pt" text-align="left" space-after="0mm">
							<fo:inline>telefono:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Richiedente_Telefono" />
							</fo:inline>
						</fo:block>
						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>e-mail:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Richiedente_RappresentanteLegaleEmail" />
							</fo:inline>
						</fo:block>
						
						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>4A) Numero di iscrizione all'albo regionale degli enti di servizio civile, sezione speciale:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Richiedente_CodiceAccreditamento" />
							</fo:inline>
						</fo:block>
						
						<fo:block font-size="11pt" text-align="left" space-after="1mm">
							<fo:inline>5A) Il progetto è svolto in coprogettazione:</fo:inline>
							<xsl:if test="/_/Richiedente_DichiarazioneForma[text()='singola']">
								<fo:inline padding-left="1mm" font-weight="bold">NO</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Richiedente_DichiarazioneForma[text()='congiunta']">
								<fo:inline padding-left="1mm" font-weight="bold">SI</fo:inline>
							</xsl:if>
						</fo:block>
						
						<xsl:if test="/_/Richiedente_DichiarazioneForma[text()='congiunta']">
							<fo:table table-layout="fixed" width="170mm" space-before="6mm" space-after="10mm" border-spacing="0pt 2pt" border-style="solid" >
								<fo:table-column column-width="50mm" />
								<fo:table-column column-width="40mm" />
								<fo:table-column column-width="40mm" />
								<fo:table-column column-width="40mm" />
								<fo:table-body>
									<fo:table-row>
										<fo:table-cell number-columns-spanned="4" font-size="11pt" padding="1mm" font-weight="bold" border-style="solid">
											<fo:block>SOGGETTI ATTUATORI DEL PROGETTO</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell font-size="11pt" padding="1mm" border-style="solid">
											<fo:block>Denominazione</fo:block>
										</fo:table-cell>
										<fo:table-cell font-size="11pt" padding="1mm" border-style="solid">
											<fo:block>Numero di iscrizione all'albo regionale</fo:block>
										</fo:table-cell>
										<fo:table-cell font-size="11pt" padding="1mm" border-style="solid">
											<fo:block>Ruolo (capofila o coprogettante)</fo:block>
										</fo:table-cell>
										<fo:table-cell font-size="11pt" padding="1mm" border-style="solid">
											<fo:block>% di copertura economica del soggetto sulla spesa globale* del progetto</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid" font-weight="bold">
											<fo:block>
												<xsl:value-of select="/_/Richiedente_Denominazione" />
											</fo:block>
										</fo:table-cell>
										<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid" font-weight="bold">
											<fo:block>
												<xsl:value-of select="/_/Richiedente_CodiceAccreditamento" />
											</fo:block>
										</fo:table-cell>
										<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid" font-weight="bold">
											<fo:block>
												<fo:inline>capofila</fo:inline>
											</fo:block>
										</fo:table-cell>
										<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid" font-weight="bold">
											<fo:block>
												<xsl:value-of select="translate(format-number(translate(/_/Richiedente_PercentualeCoperturaEconomica, ',.', '.,'), '#'), ',.','.')" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<xsl:apply-templates select="(/_/*[(starts-with(name(),'SoggettiAttuatori_')) and (contains(name(),'.SoggettiAttuatori_Denominazione'))])" />
								</fo:table-body>
							</fo:table>
						</xsl:if>

					<fo:table table-layout="fixed" width="170mm" space-before="10mm" space-after="10mm"
						border-spacing="0pt 2pt" border-top-style="solid" border-bottom-style="solid">
						<fo:table-column column-width="170mm" />
						<fo:table-body>
						<fo:table-row>
						  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
							<fo:block>
								<fo:inline font-size="11pt" font-weight="bold">B. Caratteristiche del progetto</fo:inline>
							</fo:block>
						  </fo:table-cell>
						</fo:table-row>
						</fo:table-body>
					</fo:table>

						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>1B) Titolo del progetto:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Progetto_Titolo" />
							</fo:inline>
						</fo:block>
						
						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>2B) Ambito progettuale:</fo:inline>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='assistenza_servizio_sociale']">
								<fo:inline padding-left="1mm" font-weight="bold">Assistenza e servizio sociale</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='patrimonio_storico']">
								<fo:inline padding-left="1mm" font-weight="bold">Attività di valorizzazione del patrimonio storico</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='patrimonio_artistico']">
								<fo:inline padding-left="1mm" font-weight="bold">Attività di valorizzazione del patrimonio artistico</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='patrimonio_ambientale']">
								<fo:inline padding-left="1mm" font-weight="bold">Attività di valorizzazione del patrimonio ambientale</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='attivita_educative']">
								<fo:inline padding-left="1mm" font-weight="bold">Attività di promozione e organizzazione di attività educative</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='attivita_culturali']">
								<fo:inline padding-left="1mm" font-weight="bold">Attività di promozione e organizzazione di attività culturali</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='attivita_sportive']">
								<fo:inline padding-left="1mm" font-weight="bold">Attività di promozione e organizzazione di attività sportive</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='attivita_economia_solidale']">
								<fo:inline padding-left="1mm" font-weight="bold">Attività di promozione e organizzazione di attività economia solidale</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='protezione_civile']">
								<fo:inline padding-left="1mm" font-weight="bold">Attività di promozione e organizzazione di protezione civile</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='emergenze']">
								<fo:inline padding-left="1mm" font-weight="bold">Aree di intervento per emergenze</fo:inline>
							</xsl:if>
							<xsl:if test="/_/Progetto_AmbitoProgettuale[text()='politiche_regionali']">
								<fo:inline padding-left="1mm" font-weight="bold">Aree di intervento per necessità connesse alla realizzazione di specifiche politiche regionali coerenti con le finalità del Programma Regionale di Sviluppo</fo:inline>
							</xsl:if>
						</fo:block>
						
						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>3B) Comune/Provincia di svolgimento del progetto (contesto territoriale):</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/SedeProgetto_ComuneDn" /> (<xsl:value-of select="/_/SedeProgetto_ProvinciaDn" />)
							</fo:inline>
						</fo:block>
						
						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>4B) Obiettivi del progetto:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Progetto_Obiettivi" />
							</fo:inline>
						</fo:block>
						
						<fo:block font-size="11pt" text-align="left" space-after="3mm">
							<fo:inline>5B) Descrizione delle attività dei volontari:</fo:inline>
							<fo:inline padding-left="1mm" font-weight="bold">
								<xsl:value-of select="/_/Progetto_DescrizioneAttivita" />
							</fo:inline>
						</fo:block>
						
					<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" >
						<fo:table-column column-width="120mm" />
						<fo:table-column column-width="50mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="2mm">
									<fo:block>6B) Numero volontari da impiegare nel progetto:</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="translate(format-number(translate(/_/Progetto_NumeroVolontari, ',.', '.,'), '#'), ',.','.')"/>
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="2mm">
									<fo:block>di cui riservati ai disabili:</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="translate(format-number(translate(/_/Progetto_NumeroVolontariDisabili, ',.', '.,'), '#'), ',.','.')"/>
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="2mm">
									<fo:block>7B) Numero mesi durata progetto:</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="translate(format-number(translate(/_/Progetto_DurataMesi, ',.', '.,'), '#'), ',.','.')"/>
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="2mm">
									<fo:block>8B) Monte ore complessivo del progetto:</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="translate(format-number(translate(/_/Progetto_MonteOreComplessivo, ',.', '.,'), '#'), ',.','.')"/>
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="2mm">
									<fo:block>9B) Monte ore medio settimanale:</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="translate(format-number(translate(/_/Progetto_MonteOreMedioSettimanale, ',.', '.,'), '#'), ',.','.')"/>
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="0mm">
									<fo:block>10B) Giorni di servizio a settimana dei volontari:</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="translate(format-number(translate(/_/Progetto_GiorniServizioSettim, ',.', '.,'), '#'), ',.','.')"/>
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="0mm" padding-after="2mm">
									<fo:block>(almeno un giorno di riposo settimanale)</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold">
										<fo:block>
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="2mm">
									<fo:block>11B) Contributo mensile corrisposto al volontario:</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="/_/Progetto_ContributoMensileAlVolontario" /> €
										</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:block font-size="11pt" text-align="left" space-after="1mm">
						<fo:inline>12B) Sedi di attuazione del progetto:</fo:inline>
					</fo:block>
					
					<fo:table table-layout="fixed" width="170mm" space-before="3mm" space-after="1mm">
						<fo:table-column column-width="50mm" />
						<fo:table-column column-width="120mm" />
						<fo:table-body>
							<xsl:apply-templates select="(/_/*[(starts-with(name(),'Sedi_')) and (contains(name(),'.AttuazioneProgetto'))])" />
						</fo:table-body>
					</fo:table>

					
					<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" >
						<fo:table-column column-width="120mm" />
						<fo:table-column column-width="50mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
									<fo:block>13B) Le attività dei volontari si svolgeranno anche in luoghi diversi dalle sedi accreditate?</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">										
									<xsl:if test="/_/Progetto_LuoghiDiversi[text()='false']">
										<fo:block>NO</fo:block>
									</xsl:if>
									<xsl:if test="/_/Progetto_LuoghiDiversi[text()='true']">
										<fo:block>SI'</fo:block>
									</xsl:if>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:table table-layout="fixed" width="170mm" space-before="10mm" space-after="10mm"
						border-spacing="0pt 2pt" border-top-style="solid" border-bottom-style="solid">
						<fo:table-column column-width="170mm" />
						<fo:table-body>
						<fo:table-row>
						  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
							<fo:block>
								<fo:inline font-size="11pt" font-weight="bold">C. Caratteristiche della selezione dei candidati</fo:inline>
							</fo:block>
						  </fo:table-cell>
						</fo:table-row>
						</fo:table-body>
					</fo:table>
									
					<fo:block font-size="11pt" text-align="left" space-after="3mm">
						<fo:inline>1C) Eventuali obblighi dei volontari durante lo svolgimento del progetto:</fo:inline>
						<fo:inline padding-left="1mm" font-weight="bold">
							<xsl:value-of select="/_/Progetto_Candidati_Obblighi" />
						</fo:inline>
					</fo:block>
									
					<fo:block font-size="11pt" text-align="left" space-after="3mm">
						<fo:inline>2C) Eventuali requisiti preferenziali per la valutazione dei candidati:</fo:inline>
						<fo:inline padding-left="1mm" font-weight="bold">
						</fo:inline>
					</fo:block>
									
					<fo:block font-size="11pt" text-align="left" space-after="3mm">
						<fo:inline>3C) Presentazione domanda da parte dei candidati dal </fo:inline>
						<fo:inline padding-left="1mm" font-weight="bold">
							<xsl:value-of select="/_/Progetto_Candidati_DomandaDa" />
						</fo:inline>
						<fo:inline> al </fo:inline>
						<fo:inline padding-left="1mm" font-weight="bold">
							<xsl:value-of select="/_/Progetto_Candidati_DomandaA" />
						</fo:inline>
					</fo:block>
									
					<fo:block font-size="11pt" text-align="left" space-after="3mm">
						<fo:inline>4C) Criteri e modalità di selezione:</fo:inline>
						<fo:inline padding-left="1mm" font-weight="bold">
							<xsl:value-of select="/_/Progetto_Candidati_Criteri" />
						</fo:inline>
					</fo:block>
									
					<fo:block font-size="11pt" text-align="left" space-after="3mm">
						<fo:inline>5C) Data di inizio progetto:</fo:inline>
						<fo:inline padding-left="1mm" font-weight="bold">
							<xsl:value-of select="/_/Progetto_DataAvvioPrevista" />
						</fo:inline>
					</fo:block>

					<fo:table table-layout="fixed" width="170mm" space-before="10mm" space-after="10mm"
						border-spacing="0pt 2pt" border-top-style="solid" border-bottom-style="solid">
						<fo:table-column column-width="170mm" />
						<fo:table-body>
						<fo:table-row>
						  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
							<fo:block>
								<fo:inline font-size="11pt" font-weight="bold">D. Caratteristiche delle conoscenze acquisibili</fo:inline>
							</fo:block>
						  </fo:table-cell>
						</fo:table-row>
						</fo:table-body>
					</fo:table>
			
					<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" >
						<fo:table-column column-width="120mm" />
						<fo:table-column column-width="50mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
									<fo:block>1D) Il progetto prevede l'erogazione di una formazione d'aula ai volontari?</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">										
									<xsl:if test="/_/Progetto_Conoscenze_Formazione[text()='false']">
										<fo:block>NO</fo:block>
									</xsl:if>
									<xsl:if test="/_/Progetto_Conoscenze_Formazione[text()='true']">
										<fo:block>SI'</fo:block>
									</xsl:if>
								</fo:table-cell>
							</fo:table-row>
							
							<xsl:if test="/_/Progetto_Conoscenze_Formazione[text()='true']">
								<fo:table-row>
									<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
										<fo:block>2D) Erogata da ente di formazione regionale accreditato?</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">										
										<xsl:if test="/_/Progetto_Conoscenze_FormazioneAccreditato[text()='false']">
											<fo:block>NO</fo:block>
										</xsl:if>
										<xsl:if test="/_/Progetto_Conoscenze_FormazioneAccreditato[text()='true']">
											<fo:block>SI'</fo:block>
										</xsl:if>
									</fo:table-cell>
								</fo:table-row>
								<xsl:if test="/_/Progetto_Conoscenze_FormazioneAccreditato[text()='true']">
									<fo:table-row>
										<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="5mm">
											<fo:block>•	Denominazione ente:</fo:block>
										</fo:table-cell>
										<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
											<fo:block>
												<xsl:value-of select="/_/Progetto_Conoscenze_DenominazioneEnte" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
								</xsl:if>
								<fo:table-row>
									<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="5mm">
										<fo:block>•	Durata in ore della formazione:</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="translate(format-number(translate(/_/Progetto_Conoscenze_DurataOreFormazione, ',.', '.,'), '#'), ',.','.')"/>
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="5mm">
										<fo:block>•	Contenuti della formazione:</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="11pt" padding="1mm" font-weight="bold" text-align="right">
										<fo:block>
											<xsl:value-of select="/_/Progetto_Conoscenze_ContenutiFormazione" />
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
							</xsl:if>

						</fo:table-body>
					</fo:table>

					<fo:table table-layout="fixed" width="170mm" space-before="10mm" space-after="10mm"
						border-spacing="0pt 2pt" border-top-style="solid" border-bottom-style="solid">
						<fo:table-column column-width="170mm" />
						<fo:table-body>
						<fo:table-row>
						  <fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
							<fo:block>
								<fo:inline font-size="11pt" font-weight="bold">E. Allegati</fo:inline>
							</fo:block>
						  </fo:table-cell>
						</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:block font-size="11pt" text-align="left" space-after="3mm" font-style="italic">
						<fo:inline>Documenti allegati:</fo:inline>
					</fo:block>
					<fo:block font-size="11pt" text-align="left" space-after="3mm" font-style="italic">
						<fo:inline>• Dichiarazione in cui il soggetto capofila provvede interamente alla copertura finanziaria del progetto. Se il progetto viene presentato in partenariato, occorre indicare l'importo a carico di ciascun soggetto;</fo:inline>
					</fo:block>
					<fo:block font-size="11pt" text-align="left" space-after="3mm" font-style="italic">
						<fo:inline>• Dichiarazione sostitutiva di atto di notorietà nella quale il firmatario del progetto dichiara che tutte le informazioni ed i dati in esso contenuti corrispondono al vero;</fo:inline>
					</fo:block>
					<fo:block font-size="11pt" text-align="left" space-after="3mm" font-style="italic">
						<fo:inline>• Curricula, sotto forma di autocertificazione, dei responsabili attività di progetto (tali documenti non devono essere allegati se già agli atti della Amministrazione Regionale)</fo:inline>
					</fo:block>

					<fo:table table-layout="fixed" width="170mm" space-before="10mm" space-after="2mm" border-spacing="0pt 2pt" >
						<fo:table-column column-width="85mm" />
						<fo:table-column column-width="85mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding="1mm" font-style="italic">
									<fo:block>
										<fo:inline>Data e luogo</fo:inline>
									</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm" font-style="italic">
									<fo:block>
										<fo:inline>Firma rappresentante legale ente</fo:inline>
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
		<xsl:if test="(starts-with(name(),'SoggettiAttuatori_')) and (contains(name(),'.SoggettiAttuatori_Denominazione'))">
			<xsl:variable name="index" select="substring-after((substring-before(name(), '.')), '_')" />
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid" font-weight="bold">
					<fo:block>
						<xsl:value-of select="." />
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid" font-weight="bold">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('SoggettiAttuatori_', $index, '.SoggettiAttuatori_NumeroIscrizioneAlboRegionale')]" />
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid" font-weight="bold">
					<fo:block>
						<fo:inline>coprogettante</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid" font-weight="bold">
					<fo:block>
						<xsl:value-of select="translate(format-number(translate(following-sibling::*[name()=concat('SoggettiAttuatori_', $index, '.SoggettiAttuatori_PercentualeCoperturaEconomica')], ',.', '.,'), '#'), ',.','.')" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
		</xsl:if>

		<xsl:if test="(starts-with(name(),'Sedi_')) and (contains(name(),'.AttuazioneProgetto'))">
			<xsl:variable name="index" select="substring-after((substring-before(name(), '.')), '_')" />
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Sede n.</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="($index+1)" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Attuazione progetto</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="." />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Comune</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('Sedi_', $index, '.Sede_ComuneDn')]" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Indirizzo</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('Sedi_', $index, '.Indirizzo')]" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Cod. ident. sede</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('Sedi_', $index, '.CodiceIdentificativoSede')]" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>N. vol. sede</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="translate(format-number(translate(following-sibling::*[name()=concat('Sedi_', $index, '.NumeroVolSede')], ',.', '.,'), '#'), ',.','.')" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell number-columns-spanned="2" font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Responsabile attività</fo:inline>
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Cognome e nome</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('Sedi_', $index, '.RespAttivita_CognomeNome')]" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Data di nascita</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('Sedi_', $index, '.RespAttivita_DataDiNascita')]" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Codice Fiscale</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('Sedi_', $index, '.RespAttivita_CodiceFiscale')]" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" border-style="solid">
					<fo:block>
						<fo:inline>Estremi polizza assicurativa aperta a favore dei volontari per malattia, infortuni, morte e RCT</fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" font-weight="bold" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('Sedi_', $index, '.EstremiPolizza')]" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
			<fo:table-row>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm">
					<fo:block>
						<fo:inline> </fo:inline>
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="11pt" text-align="left" padding="1mm" color="white">
					<fo:block>
						<fo:inline>.</fo:inline>
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
		</xsl:if>
	</xsl:template>


</xsl:stylesheet>