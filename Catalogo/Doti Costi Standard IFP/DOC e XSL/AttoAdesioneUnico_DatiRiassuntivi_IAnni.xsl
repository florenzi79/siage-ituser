<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema"
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
	
	<fo:block font-size="12pt" text-align="center" space-after="10mm" >
	<fo:block font-weight="bold" space-before="5mm" space-after="10mm">Dati riassuntivi - Atto di Adesione Unico</fo:block>
	</fo:block>	
	<fo:block font-weight="bold" font-size="11pt" space-after="4mm" border-spacing="0pt 2pt">Dati generali</fo:block>
	
	<fo:table table-layout="fixed" width="170mm" space-after="4mm" border-spacing="0pt 2pt">
	<fo:table-column column-width="120mm" />
	<fo:table-column column-width="50mm" />
	<fo:table-body>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Data della domanda</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/Domanda_Data" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Id pratica</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/NumeroPratica" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Titolo Pratica</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/TitoloPratica" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
			<fo:block>Descrizione Bando</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/Bando_Descrizione" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Denominazione Operatore</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/Richiedente_Denominazione" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Sede Legale Operatore</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/Richiedente_SedeLegaleDescrizione" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Data del protocollo</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/AttoUnico_ProtocolloData" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Numero del protocollo</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/AttoUnico_ProtocolloNumero" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
	</fo:table-body>
	</fo:table>

		<fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="4mm"> Rappresentante Legale</fo:block>
	<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt" >
	<fo:table-column column-width="120mm" />
	<fo:table-column column-width="50mm" />
	<fo:table-body>
	<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Codice fiscale rappresentante legale</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm"> 
				<fo:block><xsl:value-of select="/_/AttoUnico_RappresentanteLegaleCodiceFiscale" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Cognome rappresentante legale</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/AttoUnico_RappresentanteLegaleCognome" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Nome rappresentante legale</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block><xsl:value-of select="/_/AttoUnico_RappresentanteLegaleNome" /></fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il firmatario coincide col rappresentante legale?</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
			<fo:block>
				<xsl:choose>
					<xsl:when test="/_/AttoUnico_FirmatarioRappresentanteLegale[text()='true']">Si</xsl:when>
					<xsl:when test="/_/AttoUnico_FirmatarioRappresentanteLegale[text()='false']">No</xsl:when>
				</xsl:choose>
			</fo:block>
			</fo:table-cell>
		</fo:table-row>
	</fo:table-body>
	</fo:table>
	
	<xsl:if test="/_/AttoUnico_FirmatarioRappresentanteLegale[text()='false']">
	<fo:block font-size="11pt" font-weight="bold" text-align="left" space-after="4mm"> Firmatario</fo:block>
							<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt">
							<fo:table-column column-width="120mm" />
							<fo:table-column column-width="50mm" />
								<fo:table-body>
									<fo:table-row>
										<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
											<fo:block>Codice Fiscale</fo:block>
										</fo:table-cell>
										<fo:table-cell font-size="11pt" padding="1mm">
											<fo:block>
												<xsl:value-of select="/_/AttoUnico_FirmatarioCodiceFiscale" />
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="10pt" padding-before="1mm" padding-after="1mm">
										<fo:block>Cognome</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="11pt" padding="1mm">
										<fo:block>
											<xsl:value-of select="/_/AttoUnico_FirmatarioCognome" />
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
										<fo:block>Nome</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="11pt" padding="1mm">
										<fo:block>
											<xsl:value-of select="/_/AttoUnico_FirmatarioNome" />
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
										<fo:block>Provincia di nascita (EE per Stato estero)</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding="1mm">
										<fo:block>
											<xsl:value-of select="/_/AttoUnico_FirmatarioNascitaProvinciaDn" />
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
										<fo:block>Comune/stato estero di nascita</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding="1mm">
										<fo:block>
											<xsl:value-of select="/_/AttoUnico_FirmatarioNascitaComuneDn" />
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
										<fo:block>Data di nascita</fo:block>
									</fo:table-cell>
									<fo:table-cell font-size="10pt" padding="1mm">
										<fo:block>
											<xsl:value-of select="/_/AttoUnico_FirmatarioNascitaData" />
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
							</fo:table-body>
						</fo:table>
					</xsl:if>
	

	<fo:block break-before="page" font-size="11pt" font-weight="bold" text-align="left" space-after="4mm">Dichiarazioni</fo:block>
	<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt">
	<fo:table-column column-width="150mm" />
	<fo:table-column column-width="20mm" />
	<fo:table-body>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Tutte le dichiarazioni sono obbligatorie per la validazione dell'atto di adesione unico. Si desidera confermare tutte le dichiarazioni ?</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/SelezionaTutteDichiarazioni[text()='true']">si</xsl:when>
						<xsl:when test="/_/SelezionaTutteDichiarazioni[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara che non sono intervenute variazioni rispetto ai requisiti di accreditamento e che eventuali successive variazioni verranno comunicate tempestivamente alla Regione Lombardia - Direzione Generale Istruzione, Formazione e Lavoro</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0001[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0001[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara di non percepire altri finanziamenti per l’erogazione dei servizi e di impegnarsi a comunicare immediatamente a Regione Lombardia la presenza di altri finanziamenti di organismi pubblici per i servizi rivolti ai destinatari</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0002[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0002[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara di non essere sottoposto a misure, giudiziarie o amministrative, che limitano la possibilità giuridica di contrattare con la P.A</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0003[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0003[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara di non essere sottoposto a misure di prevenzione o ad altri impedimenti previsti dalla legislazione antimafia;</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0004[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0004[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara di accettare le condizioni economiche previste da Regione Lombardia e di vincolarsi a non richiedere erogazioni di somme a qualsiasi titolo ai destinatari per i servizi previsti nei PIP</fo:block>
			</fo:table-cell>
				<fo:table-cell font-size="11pt" padding="1mm">
					<fo:block>
						<xsl:choose>
							<xsl:when test="/_/Dichiaraz_0005[text()='true']">si</xsl:when>
							<xsl:when test="/_/Dichiaraz_0005[text()='false']">no</xsl:when>
						</xsl:choose>
					</fo:block>
				</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara di essere consapevole della facoltà di Regione Lombardia di recuperare somme indebitamente erogate qualora a seguito delle attività di verifica e controllo si rilevassero irregolarità nella realizzazione dei PIP</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1m">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0007[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0007[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara di impegnarsi ad accettare le eventuali modifiche all’assetto regolamentare che si rendessero necessarie per effetto dell’entrata in vigore di nuove disposizioni comunitarie, nazionali o regionali</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0008[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0008[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara di essere consapevole che l’adesione alle regole del Manuale Operatore di cui al d.d.u.o. n. 1319 del 22 febbraio 2012 e successive modifiche e integrazioni è subordinata alla comunicazione di accettazione della Dichiarazione riassuntiva unica da parte di Regione Lombardia. </fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0009[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0009[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<!--<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto dichiara di essere consapevole che l’adesione alle regole del Manuale Operatore di cui al d.d.u.o. n. 1319 del 22 febbraio 2012 e successive modifiche conseguenti all’applicazione del reg. 1303/2013 è subordinata alla comunicazione di accettazione della Dichiarazione riassuntiva unica da parte di Regione Lombardia. </fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0009_1[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0009_1[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>-->
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto si impegna a fornire ai destinatari presi in carico informazioni sulle modalità di finanziamento</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0010[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0010[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<!--<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto si impegna a fornire ai destinatari presi in carico informazioni sulle modalità di finanziamento e in particolare sul ruolo dell’Unione Europea</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0010_1[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0010_1[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>-->
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto si impegna a fornire ai Destinatari che saranno indicati nei PIP tutte le informazioni necessarie sia sulla realizzazione e sugli obblighi del piano da seguire, sia sugli aspetti amministrativi/contabili della gestione della dote e sulle conseguenze derivanti dalla mancata frequenza del percorso indicato</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0011[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0011[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto si impegna a concordare con i Destinatari il percorso di fruizione dei servizi come riportati nei PIP</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0012[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0012[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
		<fo:table-row>
			<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
				<fo:block>Il soggetto si impegna a conservare la documentazione necessaria a comprovare l’erogazione dei servizi relativi alle doti per cui ha preso in carico il destinatario</fo:block>
			</fo:table-cell>
			<fo:table-cell font-size="11pt" padding="1mm">
				<fo:block>
					<xsl:choose>
						<xsl:when test="/_/Dichiaraz_0013[text()='true']">si</xsl:when>
						<xsl:when test="/_/Dichiaraz_0013[text()='false']">no</xsl:when>
					</xsl:choose>
				</fo:block>
			</fo:table-cell>
		</fo:table-row>
	</fo:table-body>
	</fo:table>
	
	<fo:block break-before="page" font-size="11pt" font-weight="bold" text-align="left" space-after="4mm">Documenti caricati</fo:block>
					<fo:table table-layout="fixed" width="170mm" space-after="2mm" border-spacing="0pt 2pt">
						<fo:table-column column-width="130mm" />
						<fo:table-column column-width="40mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell font-size="11pt" padding-before="1mm" padding-after="1mm">
									<fo:block>Atto di adesione unico firmato</fo:block>
								</fo:table-cell>
								<fo:table-cell font-size="11pt" padding="1mm">
									<fo:block></fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>


					</fo:flow>
				</fo:page-sequence>
			</fo:root>
		</xsl:template>

</xsl:stylesheet>

