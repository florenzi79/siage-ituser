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
							<fo:external-graphic
								src="url('data:image/png;base64,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')" />
						</fo:inline>
					</fo:block>
				</fo:static-content>
				<fo:flow flow-name="xsl-region-body">
					<fo:block font-size= "16pt " font-weight= "bold" text-align= "center " space-after= "5mm ">Dati riassuntitivi Domanda Dote DDIF II Anni 2015-2016</fo:block>
					
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm ">  Dati generici </fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Id Operatore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_IdOperatore_05 " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Id Sede</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_IdSede_05 " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Sede Operativa</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_SedeOperativa_05 " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>ID Pratica</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/idPratica_05 " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Titolo Pratica</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/TitoloPratica_05 " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Descrizione Bando</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Bando_Descrizione_05 " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Denominazione Operatore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_Denominazione_05 " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Sede Legale Operatore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_SedeLegaleDescrizione_05 " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm ">  Dati anagrafici del destinatario  </fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Codice Fiscale</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_CodiceFiscale " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Cognome</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_Cognome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Nome</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_Nome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Genere</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Partecipante_Genere[text()='M'] ">maschile</xsl:when>
											<xsl:when test= "/_/Partecipante_Genere[text()='F'] ">femminile</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Data di nascita</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_NascitaData " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Età</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
									 <xsl:value-of select="translate(format-number(translate(/_/Partecipante_Eta, ',.', '.,'), '#'), ',.','.')"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Provincia di Nascita ( EE in caso di stato estero)</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
											<xsl:value-of select="/_/Partecipante_NascitaProvinciaDn" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Comune/stato estero di nascita</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
											<xsl:value-of select="/_/Partecipante_NascitaComuneDn" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Condizione occupazionale</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Partecipante_CondizioneOccupazionale[text()='inoccupato'] ">Inoccupato (in cerca di prima occupazione)</xsl:when>
											<xsl:when test= "/_/Partecipante_CondizioneOccupazionale[text()='occupato'] ">Occupato (compreso chi ha un occupazione saltuaria/atipica, chi è in CIG, studenti/lavoratori, imprenditore, libero proffessionista, titolare di partiva IVA)</xsl:when>
											<xsl:when test= "/_/Partecipante_CondizioneOccupazionale[text()='disoccupato'] ">Disoccupato alla ricerca di nuova occupazione (o iscritto alle liste di mobilità)</xsl:when>
											<xsl:when test= "/_/Partecipante_CondizioneOccupazionale[text()='studente'] ">Studente</xsl:when>
											<xsl:when test= "/_/Partecipante_CondizioneOccupazionale[text()='inattivo'] ">Inattivo diverso da studente (casalinga/o ritirato/a dal lavoro, inabile al lavoro, in servizio di leva o servizio civile, in altra condizione)</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Il destinatario era iscritto e frequentante presso la medesima istituzione formativa alla chiusura dell’anno formativo 2014/2015 </fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/dichiarazione_frequenza[text()='true'] ">si</xsl:when>
											<xsl:when test= "/_/dichiarazione_frequenza[text()='false'] ">no</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					
					
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Residenza del destinatario</fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Provincia di residenza (EE per Stato estero)</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
											<xsl:value-of select="/_/Partecipante_ResidenzaProvinciaDn" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Comune/stato estero di residenza</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
											<xsl:value-of select="/_/Partecipante_ResidenzaComuneDn" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>CAP di residenza</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_ResidenzaCap " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Indirizzo di residenza</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_ResidenzaIndirizzo " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Numero di telefono</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_ResidenzaTelefono " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Indirizzo email</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_Email " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Il domicilio è uguale alla residenza?</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Partecipante_DomicilioComeResidenza[text()='true'] ">Si</xsl:when>
											<xsl:when test= "/_/Partecipante_DomicilioComeResidenza[text()='false'] ">No</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					<xsl:if test="/_/Partecipante_DomicilioComeResidenza[text()='false']">
					<fo:block font-size= "11pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Domicilio del destinatario </fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Provincia di domicilio EE per Stato estero)</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
											<xsl:value-of select="/_/Partecipante_DomicilioProvinciaDn" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Comune/stato estero di domicilio</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
											<xsl:value-of select="/_/Partecipante_DomicilioComuneDn" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>CAP di domicilio</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_DomicilioCap " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Indirizzo di domicilio</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_DomicilioIndirizzo " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Numero di telefono</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_DomicilioTelefono " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					</xsl:if>
					
					
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Altri dati del destinatario</fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Stato Cittadinanza</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_Stato " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					
					<fo:block font-size= "11pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Specificare se appartenente ad una delle seguenti categorie:</fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_CategorieSvantaggio')) and (text() = 'minoranze')])"> • Appartenente a minoranze</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_CategorieSvantaggio')) and (text() = 'migrante')])"> • Migrante</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_CategorieSvantaggio')) and (text() = 'disabile')])"> • Disabile</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_CategorieSvantaggio')) and (text() = 'svantaggiato')])"> • Altri soggetti svantaggiati</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_CategorieSvantaggio')) and (text() = 'dsa')])"> • Disturbi specifici di apprendimento (DSA)</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
				
					<xsl:if test="/_/*[starts-with(name(),'Partecipante_CategorieSvantaggio') and text()='disabile']">
					<fo:block font-size= "12pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Disabilità </fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Certificazione rilasciata da</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Partecipante_DisabilitaCertificatoreEnte[text()='asl'] ">ASL</xsl:when>
											<xsl:when test= "/_/Partecipante_DisabilitaCertificatoreEnte[text()='unopia'] ">UNOPIA</xsl:when>
											<xsl:when test= "/_/Partecipante_DisabilitaCertificatoreEnte[text()='comune'] ">Comune</xsl:when>
											<xsl:when test= "/_/Partecipante_DisabilitaCertificatoreEnte[text()='inail'] ">INAIL</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Con sede in (Via, numero)</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_DisabilitaCertificatoreIndirizzo " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Provincia</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_DisabilitaCertificatoreProvinciaDn " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Comune</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_DisabilitaCertificatoreComuneDn " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					<xsl:if test="/_/Partecipante_DisabilitaCategoria_0">
					<fo:block font-size= "11pt " text-align= "left " space-after= "2mm "> Categoria invalidità:</fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'fisiche_non_spec')])"> • Fisiche non specificato</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'fisiche_gen')])"> • Fisiche generiche</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'fisiche_perdita_arti')])"> • Fisiche perdita anatomiche arti</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'fisiche_limit')])"> • Fisiche limitazioni funzionali movimento articolazioni</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'fisiche_resp')])"> • Fisiche respiratorie</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'fisiche_cardio')])"> • Fisiche cardiocircolatorie</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'fisiche_mal_inf')])"> • Fisiche malattie infettive</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'fisiche_hiv')])"> • Fisiche HIV</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'psichiche_gen')])"> • Psichiche generiche</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'psichiche_intel')])"> • Psichiche intellettive</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'psichiche_ment')])"> • Psichiche mentali</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'sens_gen')])"> • Sensoriali generiche</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'sens_ling')])"> • Sensoriali linguaggio</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'sens_udito')])"> • Sensoriali udito</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test="(/_/*[(starts-with(name(),'Partecipante_DisabilitaCategoria')) and (text() = 'sens_vista')])"> • Sensoriali vista</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					</xsl:if>
					</xsl:if>
					
					
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Titolo di studio </fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Titolo di Studio</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Partecipante_TitoloDiStudioNome[text()='nessun_titolo'] ">Nessun titolo</xsl:when>
											<xsl:when test= "/_/Partecipante_TitoloDiStudioNome[text()='licenza_elementare'] ">Licenza elementare/ Attestato di valutazione finale</xsl:when>
											<xsl:when test= "/_/Partecipante_TitoloDiStudioNome[text()='licenza_media'] ">Licenza media/ Avviamento professionale</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<xsl:if test="(/_/Partecipante_TitoloDiStudioNome[text()='licenza_elementare']) or (/_/Partecipante_TitoloDiStudioNome[text()='licenza_media'])">
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Conseguito il</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_TitoloDiStudioData " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Presso</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Partecipante_TitoloDiStudioPresso " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							</xsl:if>
						</fo:table-body>
					</fo:table>
				
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Tutor Formativo </fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Codice fiscale</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/TutorFormativo_CodiceFiscale " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Nome</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/TutorFormativo_Nome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Cognome</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/TutorFormativo_Cognome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Titolo di studio</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='diplomaNoAccessoUniversita'] ">Diploma di qualifica di 2-3 anni che non consente l’accesso all’università</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='diplomaSiAccessoUniversita'] ">Diploma di scuola secondaria superiore 4-5 anni che consente l’iscrizione all’università</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='afam'] ">Alta Formazione Artistica e Musicale (AFAM) e equipollenti</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='diplomaUniversitario'] ">Diploma universitario o di scuola diretta fini speciali (vecchio ordinamento)</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='laureaTriennale'] ">Laurea triennale (nuovo ordinamento)</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='masterPostLaureaTriennale'] ">Master post laurea triennale (o master di I livello)</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='laureaSpecialistica'] ">Laurea specialistica (3+2) / Laurea vecchio ordinamento / Laurea a ciclo univoco</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='masterPostLaureaSpecialistica'] ">Master post laurea specialistica / vecchio ordinamento / ciclo unico</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='specializzazionePostLaurea'] ">Specializzazione post laurea - compresi corsi di perfezionamento</xsl:when>
											<xsl:when test= "/_/TutorFormativo_TitoloDiStudioNome[text()='dottoratoDiRicerca'] ">Dottorato di ricerca</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Descrizione del titolo di studio</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/TutorFormativo_DescrizioneTitoloDiStudio " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Anni di esperienza</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select="translate(format-number(translate(/_/TutorFormativo_EsperienzaAnni, ',.', '.,'), '#'), ',.','.')"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Anni di esperienza nel settore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select="translate(format-number(translate(/_/TutorFormativo_EsperienzaSettore, ',.', '.,'), '#'), ',.','.')"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					
					<fo:block break-before="page" font-size= "16pt " font-weight= "bold " text-align= "left " space-after= "5mm ">Servizi formazione</fo:block>
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm ">
						<fo:block>Servizio selezionato</fo:block>
					</fo:block>
					<fo:table table-layout= "fixed " width= "170mm " border-spacing= "0pt 2pt " border-style= "solid " space-after= "8mm ">
						<fo:table-column column-width= "200"/>
						<fo:table-column column-width= "280" />
					
						<fo:table-body>
						
							<fo:table-row border-bottom-style= "solid ">
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Id Corso</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.IdCorso" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							
							<fo:table-row border-bottom-style= "solid ">
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Area</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.Area" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							
							<fo:table-row border-bottom-style= "solid ">
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Comune</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.Comune" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							
							<fo:table-row border-bottom-style= "solid ">
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Denominazione Operatore</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.DenominazioneOperatore" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Denominazione Sede Operatore</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.DenominazioneOperatore" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">	
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Id Annualita</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.IdAnnualita" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">		
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Indirizzo</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.Indirizzo" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">				
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Provincia</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.Provincia" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">		
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Qualifica Diploma</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.QualificaDiploma" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">			
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Stato Corso</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.StatoCorso" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">		
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Titolo corso</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.TitoloCorso" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">		
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Data avvio</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.DataAvvio" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">			
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Data conclusione</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.DataConclusione" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">		
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Ore</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
									<xsl:value-of select="translate(format-number(translate(/_/ServiziFormazione_RiepilogoServizi_0.Ore, ',.', '.,'), '#'), ',.','.')"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							
							<fo:table-row border-bottom-style= "solid ">		
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Importo ammissibile</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.ImportoAmmissibile" /> €
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
								
							<fo:table-row border-bottom-style= "solid ">		
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Id Qualifica</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.IdQualifica" /> 
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							
							<fo:table-row border-bottom-style= "solid ">		
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>Id Indirizzo</fo:block>
								</fo:table-cell>
								<fo:table-cell margin-left= "2mm " font-size= "9pt " padding= "1mm " font-weight= "bold " text-align= "left ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_RiepilogoServizi_0.IdIndirizzo" /> 
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						
						</fo:table-body>
					</fo:table> 
				
					<!--Servizi alla formazione -->
					<xsl:if test="/_/ServiziFormazione_RiepilogoServizi_0.TitoloCorso">
						<fo:block  font-size="11pt" space-after="4mm">Riepilogo servizi</fo:block>
						<fo:table table-layout="fixed" width="170mm" space-after="5mm" border-spacing="0pt 2pt" border-style="solid">
							<fo:table-column column-width="30mm" />
							<fo:table-column column-width="30mm" />
							<fo:table-column column-width="30mm" />
							<fo:table-column column-width="30mm" />
							<fo:table-column column-width="20mm" />
							<fo:table-column column-width="30mm" />
							<fo:table-body>
								<fo:table-row background-color="#FFFF66">
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt"
										border-style="solid">
										<fo:block>Tipologia delle attività</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt"
										border-style="solid">
										<fo:block>Periodo di attuazione delle attività</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt"
										border-style="solid">
										<fo:block>Operatore che eroga il servizio</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt"
										border-style="solid">
										<fo:block>Soggetti terzi coinvolti</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt"
										border-style="solid">
										<fo:block>Ore</fo:block>
									</fo:table-cell>
									<fo:table-cell font-weight="bold" font-size="9pt" text-align="center" padding-before="1mm" padding-after="1mm" border-spacing="0pt 2pt"
										border-style="solid">
										<fo:block>Valorizzazione</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<xsl:apply-templates select="(/_/*[(starts-with(name(),'ServiziFormazione_RiepilogoServizi_')) and (contains(name(),'.TitoloCorso'))])" />
							</fo:table-body>
						</fo:table>
					</xsl:if>

				
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Totale </fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "140mm " />
						<fo:table-column column-width= "30mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Totale ore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select="translate(format-number(translate(/_/ServiziFormazione_OreTotale, ',.', '.,'), '#'), ',.','.')"/>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Totale importo</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_ImportoTotale " /> €
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<!--<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>ServiziFormazione_ImportoTotaleCorsi</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_ImportoTotaleCorsi " /> €
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>ServiziFormazione_ImportoTotaleDisabilita</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/ServiziFormazione_ImportoTotaleDisabilita " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>-->
						</fo:table-body>
					</fo:table>
					
					
					<fo:block break-before="page" font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Firmatario operatore</fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
						<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Il firmatario coincide col rappresentante legale?</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Richiedente_FirmatarioRappresentanteLegale[text()='true'] ">Si</xsl:when>
											<xsl:when test= "/_/Richiedente_FirmatarioRappresentanteLegale[text()='false'] ">No</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Nome Rappresentante Legale</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_RappresentanteLegaleNome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Cognome Rappresentante Legale</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_RappresentanteLegaleCognome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Codice Fiscale  Rappresentante Legale</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_RappresentanteLegaleCodiceFiscale " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							
							<xsl:if test="/_/Richiedente_FirmatarioRappresentanteLegale[text()='true']">
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Provincia di nascita (EE per Stato estero)</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_RappresentanteLegaleNascitaProvinciaDn " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Comune/stato estero di nascita</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_RappresentanteLegaleNascitaComuneDn " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Data di nascita</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_RappresentanteLegaleNascitaData " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Genere</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Richiedente_RappresentanteLegaleGenere[text()='m'] ">Maschile</xsl:when>
											<xsl:when test= "/_/Richiedente_RappresentanteLegaleGenere[text()='f'] ">Femminile</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							</xsl:if>
							<xsl:if test="/_/Richiedente_FirmatarioRappresentanteLegale[text()='false']">
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Codice Fiscale firmatario</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_FirmatarioCodiceFiscale " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Cognome firmatario</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_FirmatarioCognome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Nome firmatario</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_FirmatarioNome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Provincia di nascita (EE per Stato estero) firmatario</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_FirmatarioNascitaProvinciaDn " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Comune/stato estero di nascita firmatario</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_FirmatarioNascitaComuneDn " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Data di nascita firmatario</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_FirmatarioNascitaData " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Genere firmatario</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Richiedente_FirmatarioGenere[text()='f'] ">Femminile</xsl:when>
											<xsl:when test= "/_/Richiedente_FirmatarioGenere[text()='m'] ">Maschile</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Indirizzo email di riferimento (non PEC) firmatario</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Richiedente_FirmatarioEmail " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							</xsl:if>
						</fo:table-body>
					</fo:table>
					
					
					<fo:block font-size= "14pt " font-weight= "bold " text-align= "left " space-after= "2mm "> Contatti utili del referente pratica </fo:block>
					<fo:table table-layout= "fixed " width= "170mm " space-after= "2mm " border-spacing= "0pt 2pt " border-bottom-style= "solid ">
						<fo:table-column column-width= "120mm " />
						<fo:table-column column-width= "50mm " />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Cognome</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Referente_Cognome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Nome</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Referente_Nome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Telefono</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Referente_Telefono " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>E mail</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Referente_Email " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<xsl:if test="/_/Partecipante_Minorenne[text()='true']">
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Referente minore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:choose>
											<xsl:when test= "/_/Referente_minorenne[text()='genitore'] ">Genitore</xsl:when>
											<xsl:when test= "/_/Referente_minorenne[text()='tutore'] ">Tutore</xsl:when>
										</xsl:choose>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Cognome Referente Minore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Referente_minorenne_cognome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell font-size= "11pt " padding-before= "1mm " padding-after= "1mm ">
									<fo:block>Nome Referente Minore</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size= "11pt " padding= "1mm ">
									<fo:block>
										<xsl:value-of select= "/_/Referente_minorenne_nome " />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							</xsl:if>
						</fo:table-body>
					</fo:table>
					
				<fo:block  font-size="14pt" text-align="left" space-after="2mm">Documento caricato</fo:block>
					<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="120mm" />
						<fo:table-body>	
						<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
									<fo:block>Dichiarazione riassuntiva unica firmata elettronicamente (DRU)</fo:block>
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
			<fo:table-row>
				<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
					<fo:block>
						<xsl:value-of select="." />
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.DataAvvio')]" />
					</fo:block>
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.DataConclusione')]" />
					</fo:block>
					<fo:block>
						<xsl:value-of select="preceding-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.DataAvvio')]" />
					</fo:block>
					<fo:block>
						<xsl:value-of select="preceding-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.DataConclusione')]" />
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
					<fo:block>
						<xsl:value-of select="/_/Richiedente_Denominazione" />
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
					<fo:block>n.a.</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.Ore')]" />
					</fo:block>
					<fo:block>
						<xsl:value-of select="preceding-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.Ore')]" />
					</fo:block>
				</fo:table-cell>
				<fo:table-cell font-size="9pt" padding="1mm" text-align="center" border-spacing="0pt 2pt" border-style="solid">
					<fo:block>
						<xsl:value-of select="following-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.ImportoAmmissibile')]" />
					</fo:block>
					<fo:block>
						<xsl:value-of select="preceding-sibling::*[name()=concat('ServiziFormazione_RiepilogoServizi_', $index, '.ImportoAmmissibile')]" />
					</fo:block>
				</fo:table-cell>
			</fo:table-row>
		</xsl:if>
	</xsl:template>
	
  </xsl:stylesheet>