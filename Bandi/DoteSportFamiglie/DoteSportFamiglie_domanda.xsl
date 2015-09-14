<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:java="http://xml.apache.org/xslt/java" exclude-result-prefixes="java" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fo="http://www.w3.org/1999/XSL/Format">
	<xsl:output method="xml" indent="yes" />
	<xsl:template match="/">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format" font-family="Times, 'Times New Roman', serif" font-size="12pt">
			<fo:layout-master-set>
				<fo:simple-page-master master-name="A4" page-width="210mm" page-height="297mm" margin-top="1cm" margin-bottom="1cm" margin-left="2cm" margin-right="2cm">
					<fo:region-body margin-top="3cm" />
					<fo:region-before precedence="true" extent="3cm" />
				</fo:simple-page-master>
			</fo:layout-master-set>
			<fo:page-sequence master-reference="A4">
				<fo:flow flow-name="xsl-region-body">
          <fo:block text-align="left" space-after="5mm" margin-left="90mm" font-weight="bold">
            <fo:block>Alla Regione Lombardia</fo:block>
            <fo:block>Direzione Generale Sport e Politiche per i Giovani</fo:block>
            <fo:block>UO Sport</fo:block>
            <fo:block>Piazza Città di Lombardia, 1</fo:block>
            <fo:block>20124 - MILANO</fo:block>
          </fo:block>
          <fo:table table-layout="fixed" width="170mm" space-after="5mm" border-style="solid">
						<fo:table-column column-width="170mm" />
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell text-align="center" padding="2mm" font-size="16pt" font-weight="bold">
									<fo:block>DOMANDA DI ASSEGNAZIONE DELLA DOTE SPORT</fo:block>
								</fo:table-cell>
              </fo:table-row>
						</fo:table-body>
					</fo:table>
          <fo:block text-align="justify" space-after="5mm" font-style="italic">
            (Dichiarazioni rese ai sensi degli artt. 46 e 47 del DPR 28/12/2000 n. 445 e nella consapevolezza delle sanzioni penali conseguenti a false dichiarazioni, di cui all’art 76 del citato DPR 445/2000)
          </fo:block>
					<fo:block text-align="left" space-after="2mm">
            <fo:inline>Il sottoscritto/a</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_Nome"/></fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_Cognome"/></fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="2mm">
            <fo:inline>Nato/a a</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_ComuneNascitaDn"/></fo:inline>
						<fo:inline padding-left="1mm">(</fo:inline>
						<fo:inline><xsl:value-of select="/_/Richiedente_ProvinciaNascitaDn"/></fo:inline>
						<fo:inline>) il</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_DataNascita"/></fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="2mm">
            <fo:inline>Residente a</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_ComuneResidenzaDn"/></fo:inline>
						<fo:inline padding-left="1mm">(</fo:inline>
						<fo:inline><xsl:value-of select="/_/Richiedente_ProvinciaResidenzaDn"/></fo:inline>
						<fo:inline>)</fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="2mm">
            <fo:inline>codice fiscale del richiedente</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_CodiceFiscale"/></fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="2mm">
            <fo:inline>numero di carta d’identità o passaporto del richiedente</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_Documento"/></fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="2mm">
            <fo:inline>telefono</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_Telefono"/></fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="5mm">
            <fo:inline>indirizzo e-mail</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_Mail"/></fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="2mm">
            <fo:inline>in qualità di</fo:inline>
						<fo:inline padding-left="1mm">
							<xsl:choose>
								<xsl:when test="/_/Richiedente_Parentela[text()='genitore']">Genitore</xsl:when>
								<xsl:when test="/_/Richiedente_Parentela[text()='affidatario']">Genitore di famiglia affidataria</xsl:when>
								<xsl:when test="/_/Richiedente_Parentela[text()='tutore']">Tutore convivente</xsl:when>
							</xsl:choose>
						</fo:inline>
						<fo:inline padding-left="1mm">del minore</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_Nome"/></fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_Cognome"/></fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="2mm">
            <fo:inline>nato/a il</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_DataNascita"/></fo:inline>
          </fo:block>
					<fo:block text-align="left" space-after="5mm">
            <fo:inline>codice fiscale del minore</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_CodiceFiscale"/></fo:inline>
          </fo:block>
					<fo:block text-align="justify" space-after="5mm" font-size="14pt" font-weight="bold">
						<fo:inline>RICHIEDE L’ASSEGNAZIONE DELLA DOTE SPORT PREVISTA DALL’ART. 5 L.R. 1 OTTOBRE 2014 N. 26 – (Valore della dote richiesta:</fo:inline>
						<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_DoteAssegnabile"/></fo:inline>
						<fo:inline padding-left="1mm">€)</fo:inline>
          </fo:block>
					<fo:block text-align="center" space-after="5mm" font-size="14pt" font-weight="bold">
						A TAL FINE DICHIARA
          </fo:block>
					<fo:table table-layout="fixed" width="170mm" space-after="5mm">
						<fo:table-column column-width="10mm" />
						<fo:table-column column-width="160mm" />
						<fo:table-body>
							<xsl:if test="/_/Richiedente_DichiarazioneResidenza[text()='true']">
								<fo:table-row>
									<fo:table-cell text-align="right">
										<fo:block font-family="Symbol">&#x2022;</fo:block>
									</fo:table-cell>
									<fo:table-cell text-align="justify" padding-left="1mm">
										<fo:block>di essere residente da almeno 5 anni in Lombardia, maturata alla data di scadenza dei termini di partecipazione al presente Bando (19/10/2015)</fo:block>
									</fo:table-cell>
								</fo:table-row>
							</xsl:if>
							<xsl:if test="/_/AltroGenitore_DichiarazioneResidenza[text()='true']">
								<fo:table-row>
									<fo:table-cell text-align="right">
										<fo:block font-family="Symbol">&#x2022;</fo:block>
									</fo:table-cell>
									<fo:table-cell text-align="justify" padding-left="1mm">
										<fo:block>che l’altro genitore o genitore affidatario è residente da almeno 5 anni in Lombardia, maturata alla data di scadenza dei termini di partecipazione al presente Bando (19/10/2015)</fo:block>
										<fo:block>
											<fo:inline>Cognome e nome dell’altro genitore</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/AltroGenitore_Cognome"/></fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/AltroGenitore_Nome"/></fo:inline>
										</fo:block>
										<fo:block>
											<fo:inline>Codice fiscale dell’altro genitore</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/AltroGenitore_CodiceFiscale"/></fo:inline>
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
							</xsl:if>
							<fo:table-row>
								<fo:table-cell text-align="right">
									<fo:block font-family="Symbol">&#x2022;</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="justify" padding-left="1mm">
									<fo:block>
										<fo:inline>Di</fo:inline>
										<xsl:if test="/_/Richiedente_Monoparentale[text()='false']">
											<fo:inline padding-left="1mm">non</fo:inline>
										</xsl:if>
										<fo:inline padding-left="1mm">trovarsi nella condizione di famiglia monoparentale</fo:inline>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell text-align="right">
									<fo:block font-family="Symbol">&#x2022;</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="justify" padding-left="1mm">
									<fo:block>
										<fo:inline>Che nel proprio stato di famiglia sono presenti n.</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="format-number(translate(/_/Richiedente_NumeroMinori, ',.', '.,'), '#')"/></fo:inline>
										<fo:inline padding-left="1mm">figli di minore età, ivi incluso il minore/i indicato/i nella domanda</fo:inline>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell text-align="right">
									<fo:block font-family="Symbol">&#x2022;</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="justify" padding-left="1mm">
									<fo:block>
										<fo:inline>Che il proprio valore ISEE (Indicatore della Situazione Economica Equivalente) in corso di validità all’atto di presentazione della domanda è pari a euro</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_Isee"/></fo:inline>
										<fo:inline padding-left="1mm">e che la relativa certificazione è stata rilasciata in data</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/Richiedente_DataIsee"/></fo:inline>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<xsl:if test="/_/PrimoMinore_Disabile[text()='true']">
								<fo:table-row>
									<fo:table-cell text-align="right">
										<fo:block font-family="Symbol">&#x2022;</fo:block>
									</fo:table-cell>
									<fo:table-cell text-align="justify" padding-left="1mm">
										<fo:block>
											<fo:inline>Che la disabilità del minore è stata formalmente riconosciuta attraverso apposita certificazione n.</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_CertificatoDisabile"/></fo:inline>
											<fo:inline padding-left="1mm">rilasciata da</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_EnteCertificatoDisabile"/></fo:inline>
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
							</xsl:if>
							<fo:table-row>
								<fo:table-cell text-align="right">
									<fo:block font-family="Symbol">&#x2022;</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="justify" padding-left="1mm">
									<fo:block>
										<fo:inline>Che il minore per cui è richiesta la Dote Sport è preiscritto o iscritto ad un corso o attività della durata di mesi</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="format-number(translate(/_/PrimoMinore_DurataCorso, ',.', '.,'), '#')"/></fo:inline>
										<fo:inline padding-left="1mm">continuativi, compresi tra Settembre 2015 e Giugno 2016, per la seguente disciplina sportiva</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_DisciplinaSportiva"/></fo:inline>
									</fo:block>
									<fo:block>
										<fo:inline>presso l’associazione/società sportiva dilettantistica</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_RicercaDenominazione"/></fo:inline>
									</fo:block>
									<fo:block>
										<fo:inline>codice fiscale dell’Associazione/Società</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_RicercaCodiceFiscale"/></fo:inline>
										<fo:inline>, con sede a</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_RicercaComune"/></fo:inline>
										<fo:inline padding-left="1mm">(</fo:inline>
										<fo:inline><xsl:value-of select="/_/PrimoMinore_RicercaProvincia"/></fo:inline>
										<fo:inline>), affiliata alla Federazione Sportiva/Disciplina Sportiva Associata/Ente di Promozione sportiva</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_RicercaFsnDsa"/></fo:inline>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell text-align="right">
									<fo:block font-family="Symbol">&#x2022;</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="justify" padding-left="1mm">
									<fo:block>
										<fo:inline>Che il costo per la frequenza del corso o attività sportiva è pari a euro</fo:inline>
										<fo:inline padding-left="1mm"><xsl:value-of select="/_/PrimoMinore_CostoCorso"/></fo:inline>
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell text-align="right">
									<fo:block font-family="Symbol">&#x2022;</fo:block>
								</fo:table-cell>
								<fo:table-cell text-align="justify" padding-left="1mm">
									<fo:block>Di non aver percepito rimborsi o altre forme di agevolazione da parte di Regione Lombardia o da altri enti pubblici per lo stesso corso o attività sportiva e per lo stesso figlio.</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					<xsl:if test="/_/PrimoMinore_SecondaDote[text()='true']">
						<fo:block text-align="justify" space-after="5mm">
							<fo:inline>Consapevole che Regione Lombardia potrà accogliere domande per un secondo minore solo in caso di soddisfacimento di tutte domande pervenute per il primo minore e in presenza di risorse ancora disponibili - (Valore della seconda dote richiesta: </fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_DoteAssegnabile"/></fo:inline>
							<fo:inline padding-left="1mm">€)</fo:inline>
	          </fo:block>
						<fo:block text-align="center" space-after="5mm" font-size="14pt" font-weight="bold">
							CHIEDE
	          </fo:block>
						<fo:block text-align="left" space-after="2mm">che possa beneficiare della dote anche il seguente minore:</fo:block>
						<fo:block text-align="left" space-after="2mm">
	            <fo:inline>Cognome nome</fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_Cognome"/></fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_Nome"/></fo:inline>
	          </fo:block>
						<fo:block text-align="left" space-after="2mm">
	            <fo:inline>nato/a il</fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_DataNascita"/></fo:inline>
	          </fo:block>
						<fo:block text-align="left" space-after="5mm">
	            <fo:inline>codice fiscale del minore</fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_CodiceFiscale"/></fo:inline>
	          </fo:block>
						<fo:block text-align="center" space-after="5mm" font-size="14pt" font-weight="bold">
							DICHIARA
	          </fo:block>
						<fo:table table-layout="fixed" width="170mm" space-after="15mm">
							<fo:table-column column-width="10mm" />
							<fo:table-column column-width="160mm" />
							<fo:table-body>
								<xsl:if test="/_/SecondoMinore_Disabile[text()='true']">
									<fo:table-row>
										<fo:table-cell text-align="right">
											<fo:block font-family="Symbol">&#x2022;</fo:block>
										</fo:table-cell>
										<fo:table-cell text-align="justify" padding-left="1mm">
											<fo:block>
												<fo:inline>Che la disabilità del minore è stata formalmente riconosciuta attraverso apposita certificazione n.</fo:inline>
												<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_CertificatoDisabile"/></fo:inline>
												<fo:inline padding-left="1mm">rilasciata da</fo:inline>
												<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_EnteCertificatoDisabile"/></fo:inline>
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
								</xsl:if>
								<fo:table-row>
									<fo:table-cell text-align="right">
										<fo:block font-family="Symbol">&#x2022;</fo:block>
									</fo:table-cell>
									<fo:table-cell text-align="justify" padding-left="1mm">
										<fo:block>
											<fo:inline>Che il minore per cui è richiesta la Dote Sport è preiscritto o iscritto ad un corso o attività della durata di mesi</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="format-number(translate(/_/SecondoMinore_DurataCorso, ',.', '.,'), '#')"/></fo:inline>
											<fo:inline padding-left="1mm">continuativi, compresi tra Settembre 2015 e Giugno 2016, per la seguente disciplina sportiva</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_DisciplinaSportiva"/></fo:inline>
										</fo:block>
										<fo:block>
											<fo:inline>presso l’associazione/società sportiva dilettantistica</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_RicercaDenominazione"/></fo:inline>
										</fo:block>
										<fo:block>
											<fo:inline>codice fiscale dell’Associazione/Società</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_RicercaCodiceFiscale"/></fo:inline>
											<fo:inline>, con sede a</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_RicercaComune"/></fo:inline>
											<fo:inline padding-left="1mm">(</fo:inline>
											<fo:inline><xsl:value-of select="/_/SecondoMinore_RicercaProvincia"/></fo:inline>
											<fo:inline>), affiliata alla Federazione Sportiva/Disciplina Sportiva Associata/Ente di Promozione sportiva</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_RicercaFsnDsa"/></fo:inline>
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell text-align="right">
										<fo:block font-family="Symbol">&#x2022;</fo:block>
									</fo:table-cell>
									<fo:table-cell text-align="justify" padding-left="1mm">
										<fo:block>
											<fo:inline>Che il costo per la frequenza del corso o attività sportiva è pari a euro</fo:inline>
											<fo:inline padding-left="1mm"><xsl:value-of select="/_/SecondoMinore_CostoCorso"/></fo:inline>
										</fo:block>
									</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
									<fo:table-cell text-align="right">
										<fo:block font-family="Symbol">&#x2022;</fo:block>
									</fo:table-cell>
									<fo:table-cell text-align="justify" padding-left="1mm">
										<fo:block>Di non aver percepito rimborsi o altre forme di agevolazione da parte di Regione Lombardia o da altri enti pubblici per lo stesso corso o attività sportiva e per lo stesso figlio.</fo:block>
									</fo:table-cell>
								</fo:table-row>
							</fo:table-body>
						</fo:table>
						<fo:block text-align="left" space-after="5mm">
	            <fo:inline>Data</fo:inline>
							<fo:inline padding-left="1mm"><xsl:value-of select="java:format(java:java.text.SimpleDateFormat.new('dd/MM/yyyy'), java:java.util.Date.new())"/></fo:inline>
	          </fo:block>
					</xsl:if>

        </fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template>
</xsl:stylesheet>
