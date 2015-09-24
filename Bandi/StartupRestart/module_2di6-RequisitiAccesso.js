//onLoad
//TipologiaSoggettoRichiedente
{
  var naturaGiuridica = values.get('Richiedente_NaturaGiuridicaAdesione');
  var cfLineaStart = ['01625730179','01832280166','00136560208','01218460176','01689590980',
  	                  '02005200171','00866130156','04064170154','00111060190','02627400134',
  	                  '02342440399','02918860178','06800290964','02213320985','00195480199',
  	                  '00780360152','01156030130','04950940157','01054200157','02866900984',
  	                  '02292410988','05880030969','02345990028','03565050170','02170220178',
  	                  '01558540124','02890871201','02773710989','12112940155','02954340176',
  	                  '03903710964','00406400127','00480970177','01939000202','00112170196',
  	                  '00942610155','12494840155','08925360151','01492220171','11620890159',
  	                  '03329630176','01800170985','02163430982','02059150173','00756690160',
  	                  '01901770204','00297320178','00955910195','00292970175','03447810163',
  	                  '03432100174','00164390544','07461060969','10617240154','01441300199',
  					  '02166840203','02118880166','02130510122','00793550138','02229960238',
  	                  '00292980174','02292150980','00925090193','01796710810','07642920156',
  					  '00276240330','00922190178','01283120192','01705680179','00736230152',
  	                  '01934430164','01296590134','00849660154','00887310191'];
  var cfRichiedente = values.get('Richiedente_CodiceFiscalePersonaGiuridica');
  var k = 0;
  var cfPresente = false;
  while (k<cfLineaStart.length) {
    if (cfRichiedente == cfLineaStart[k]) {
    	cfPresente = true;
    }
    k++;
  }
  var categoriaSoggetto = '';
  if ((naturaGiuridica == 'NGPFL') || (naturaGiuridica == 'NGPFNL')) {
    categoriaSoggetto = 'A';
  } else if ((naturaGiuridica == '1.1.20') || (naturaGiuridica == '1.2.10') || (naturaGiuridica == '1.2.20') ||
             (naturaGiuridica == '1.2.30') || (naturaGiuridica == '1.3.10') || (naturaGiuridica == '1.3.20') ||
             (naturaGiuridica == '1.3.30') || (naturaGiuridica == '1.3.40') || (naturaGiuridica == '1.4.10') ||
             (naturaGiuridica == '1.4.20') || (naturaGiuridica == '1.4.30') || (naturaGiuridica == '1.4.40')) {
    categoriaSoggetto = 'B';
  } else if (naturaGiuridica == '1.9.00') {
    categoriaSoggetto = 'C';
  } else if ((naturaGiuridica == '1.1.30') || (naturaGiuridica == '1.1.40')) {
    categoriaSoggetto = 'D';
  } else if ((naturaGiuridica == '1.7.10') || (naturaGiuridica == '1.7.90')) {
    categoriaSoggetto = 'E';
  } else if (naturaGiuridica == '1.2.40') {
    categoriaSoggetto = 'F';
  }
  var lineaIntervento = '';
  if (values.get('Ambitodipartecipazionealbando') == 'ReStart') {
    lineaIntervento = 'restart';
  } else if (values.get('SelezionareAmbitoIntervento') == 'startimprese') {
    lineaIntervento = 'startimprese';
  } else if (values.get('SelezionareAmbitoIntervento') == 'starprofessioni') {
    lineaIntervento = 'startprofessioni';
  }
  var tipologiaSoggetto = '';
  if ((lineaIntervento == 'startimprese') && (categoriaSoggetto != 'A')) {
    tipologiaSoggetto = 'mpmimeno24';
  } else if ((lineaIntervento == 'startimprese') && (categoriaSoggetto == 'A')) {
    tipologiaSoggetto = 'aspiranteimprenditore';
  } else if ((lineaIntervento == 'startprofessioni') && (categoriaSoggetto == 'D')) {
    tipologiaSoggetto = 'professionistaformasingola';
  } else if ((lineaIntervento == 'startprofessioni') && (categoriaSoggetto == 'A') && (values.get('Selezionarelatipologiadisoggettobeneficiario') == 'opz1')) {
    tipologiaSoggetto = 'aspiranteprofessionistasingolo';
  } else if ((lineaIntervento == 'startprofessioni') && ((categoriaSoggetto == 'E') || (categoriaSoggetto == 'F'))) {
    tipologiaSoggetto = 'professionistaformaassociata';
  } else if ((lineaIntervento == 'startprofessioni') && (categoriaSoggetto == 'A') && (values.get('Selezionarelatipologiadisoggettobeneficiario') == 'opz2')) {
    tipologiaSoggetto = 'aspiranteprofessionistaassociato';
  } else if ((lineaIntervento == 'restart') && !cfPresente && (values.get('Sidichiaradiaveracquisito') == 'true')) {
    tipologiaSoggetto = 'newcomeno24';
  } else if ((lineaIntervento == 'restart') && cfPresente) {
    tipologiaSoggetto = 'mpmipra';
  } else if ((lineaIntervento == 'restart') && !cfPresente && (values.get('Sidichiaradiaveracquisito') == 'false')) {
    tipologiaSoggetto = 'newcompmi';
  } else if ((lineaIntervento == 'restart') && (categoriaSoggetto == 'A')) {
    tipologiaSoggetto = 'newcopersonafisica';
  }
  values.put('TipologiaSoggettoRichiedente',tipologiaSoggetto);
}
setSelectOptionsCached('Richiedente_ProvinciaResidenza','provincia_istat');
setSelectDependedOptionsAndShowCached('Richiedente_ComuneResidenza','comune_istat','Richiedente_ProvinciaResidenza');
items.get('Richiedente_NomeCittadinoRef').setHidden((tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Richiedente_CognomeCittadinoRef').setHidden((tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Richiedente_CodiceFiscalePersonaFisicaRef').setHidden((tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Richiedente_CodiceFiscalePersonaGiuridicaRef').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'professionistaformaassociata') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
items.get('CodiceStatoestero').setHidden(categoriaSoggetto != 'C');
items.get('Richiedente_RagioneSocialeRef').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'professionistaformaassociata') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
items.get('Richiedente_PartitaIvaRef').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'professionistaformaassociata') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
items.get('Richiedente_NaturaGiuridicaAdesioneRef').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'professionistaformaassociata') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
items.get('Richiedente_IscrizioneCciaaProvRef').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
items.get('Richiedente_IscrizioneCciaaNumeroRef').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
items.get('Richiedente_IscrizioneCciaaDataRef').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
items.get('Richiedente_DataInizioAttivita').setHidden((tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'professionistaformaassociata'));
items.get('Richiedente_ProvinciaResidenza').setHidden((tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Richiedente_ComuneResidenza').setHidden((tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Richiedente_CAP_Residenza').setHidden((tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Richiedente_Indirizzo_di_residenza').setHidden((tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('SelezionareOpzioniAlbioAssociazioni').setHidden((tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato'));
items.get('Richiedente_ProvinciaResidenza').setRequired((tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('Richiedente_ComuneResidenza').setRequired((tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('Richiedente_CAP_Residenza').setRequired((tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('Richiedente_Indirizzo_di_residenza').setRequired((tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('Richiedente_DataInizioAttivita').setRequired((tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'professionistaformaassociata'));
items.get('SelezionareOpzioniAlbioAssociazioni').setRequired((tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato'));
if ((tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcopersonafisica')) {
  values.put('Richiedente_NomeCittadinoRef',values.get('Richiedente_NomeCittadino'));
  values.put('Richiedente_CognomeCittadinoRef',values.get('Richiedente_CognomeCittadino'));
  values.put('Richiedente_CodiceFiscalePersonaFisicaRef',values.get('Richiedente_CodiceFiscalePersonaFisica'));
}
if ((tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi')) {
  values.put('Richiedente_RagioneSocialeRef',values.get('Richiedente_RagioneSociale'));
  values.put('Richiedente_IscrizioneCciaaProvRef',values.get('Richiedente_IscrizioneCciaaProvinciaDn'));
  values.put('Richiedente_IscrizioneCciaaNumeroRef',values.get('Richiedente_IscrizioneCciaaNumero'));
  values.put('Richiedente_IscrizioneCciaaDataRef',values.get('Richiedente_IscrizioneCciaaData'));
}
if ((tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi')) {
  values.put('Richiedente_PartitaIvaRef',values.get('Richiedente_PartitaIva'));
  values.put('Richiedente_NaturaGiuridicaAdesioneRef',values.get('Richiedente_NaturaGiuridicaAdesioneDn'));
}
if (tipologiaSoggetto == 'professionistaformaassociata') {
  values.put('Richiedente_RagioneSocialeRef',values.get('Richiedente_RagioneSociale'));
  values.put('Richiedente_PartitaIvaRef',values.get('Richiedente_PartitaIva'));
  values.put('Richiedente_NaturaGiuridicaAdesioneRef',values.get('Richiedente_NaturaGiuridicaAdesioneDn'));
}
if ((tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'professionistaformaassociata') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi')) {
  values.put('Richiedente_CodiceFiscalePersonaGiuridicaRef',values.get('Richiedente_CodiceFiscalePersonaGiuridica'));
}
if (categoriaSoggetto == 'C') {
  values.put('CodiceStatoestero',values.get('CodiceSoggettoEstero'));
}
items.get('Dichiarazioni_Adesione').clearOptions();
if (tipologiaSoggetto == 'mpmimeno24') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','che l’impresa NON risulta insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che l’impresa NON opera in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che l’impresa NON svolge attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz5','che l’impresa NON svolge attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'aspiranteimprenditore') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','che la costituenda impresa NON opererà in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che la costituenda impresa NON svolgerà attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che la costituenda impresa NON svolgerà attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'professionistaformasingola') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','di NON risultare insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz3','di NON operare in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz4','di NON svolgere attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz5','di NON svolgere attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'aspiranteprofessionistasingolo') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','che NON opererà in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che NON svolgerà attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che NON svolgerà attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'professionistaformaassociata') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','che il soggetto richiedente NON risulta insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che il soggetto richiedente NON opera in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che il soggetto richiedente NON svolge attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz5','che il soggetto richiedente NON svolge attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'aspiranteprofessionistaassociato') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','che il soggetto costituendo NON opererà in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che il soggetto costituendo NON svolgerà attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che il soggetto costituendo NON svolgerà attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'newcomeno24') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','di NON risultare insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che l’impresa NON risulta insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che l’impresa NON opera in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz5','che l’impresa NON svolge attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz6','che l’impresa NON svolge attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'mpmipra') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','di NON risultare insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che l’impresa NON risulta insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che l’impresa NON opera in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz5','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz6','che l’impresa NON svolge attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz7','che l’impresa NON svolge attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'newcompmi') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','di NON risultare insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che l’impresa NON risulta insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che l’impresa NON opera in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz5','che l’impresa NON svolge attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz6','che l’impresa NON svolge attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
if (tipologiaSoggetto == 'newcopersonafisica') {
  items.get('Dichiarazioni_Adesione').addOption('opz1','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz2','di NON risultare insolvente, così come definito nell’art. 4.3 lett. a) del Regolamento de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz3','che l’Intervento Finanziario previsto dal presente Bando NON sia cumulabile con altre agevolazioni concesse per le medesime spese, qualificabili come aiuti di Stato ai sensi degli articoli 107 e 108 del TFUE, ivi incluse quelle a titolo de minimis');
  items.get('Dichiarazioni_Adesione').addOption('opz4','che la costituenda impresa NON opererà in uno dei settori esclusi dall’applicazione del Regolamento de minimis tra cui in particolare tutti i settori corrispondenti ai codici di attività primario ricompresi nella sezione A (Agricoltura, silvicoltura e pesca) della classificazione Ateco 2007');
  items.get('Dichiarazioni_Adesione').addOption('opz5','che la costituenda impresa NON svolgerà attività relative alla trasformazione e commercializzazione di prodotti agricoli di cui all’Allegato 1 del Trattato UE');
  items.get('Dichiarazioni_Adesione').addOption('opz6',' che la costituenda impresa NON svolgerà attività subordinate all’impiego di prodotti nazionali rispetto a quelli d’importazione');
}
items.get('Adesione_DomandaDimensioneImpresa').setHidden((tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Adesione_DomandaDimensioneImpresa').setRequired((tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'newcopersonafisica'));
var richiestaDimensioneImpresa = (values.get('Adesione_DomandaDimensioneImpresa') == 'true');
fieldsets.get('e84bbf1211e84e4f8ea6a81634aac92e').setHidden(!richiestaDimensioneImpresa && (tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
fieldsets.get('faa5f5978d11414caa6bb8209d5f275f').setHidden(!richiestaDimensioneImpresa && (tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra') && (tipologiaSoggetto != 'newcompmi'));
items.get('Azienda_pmi').setRequired(richiestaDimensioneImpresa || (tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi'));
items.get('Azienda_periodoRiferimentoDimensioneImpresa').setRequired(richiestaDimensioneImpresa || (tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi'));
items.get('AziendaValoriEconomici_totaleBilancio').setRequired(richiestaDimensioneImpresa || (tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi'));
items.get('AziendaValoriEconomici_totaleFatturato').setRequired(richiestaDimensioneImpresa || (tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi'));
items.get('Azienda_Personale_totaleULA').setRequired(richiestaDimensioneImpresa || (tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi'));
items.get('ImpreseAssociateCollegate_presenza').setRequired(richiestaDimensioneImpresa || (tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi'));
items.get('Azienda_Dimensione_Dichiarata').setRequired(richiestaDimensioneImpresa || (tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra') || (tipologiaSoggetto == 'newcompmi'));
fieldsets.get('25e19d911464414abf179871b0e48aa0').setHidden((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcompmi') || (tipologiaSoggetto == 'newcopersonafisica'));
fieldsets.get('45f6c7eb3f424005ade0fa9a35b7f610').setHidden((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcompmi') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('SezioneCodiceAtecoIntendeAvviare').setRequired((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcompmi') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('DivisioneCodiceAtecoIntendeAvviare').setRequired((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcompmi') || (tipologiaSoggetto == 'newcopersonafisica'));
modules.get('ProfessionistaAssociato').setHidden((tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'professionistaformaassociata'));
modules.get('ProfessionistaAssociato').setRequired((tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'professionistaformaassociata'));
fieldsets.get('59b6b91747364aae8bd3ec1ccee33f58').setHidden((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcopersonafisica') || (tipologiaSoggetto == 'professionistaformasingola') || (tipologiaSoggetto == 'professionistaformaassociata'));
items.get('SedeLegale_Cap').setHidden(categoriaSoggetto == 'C');
items.get('SedeLegale_Comune').setReadonly(categoriaSoggetto != 'C');
items.get('SedeLegale_Comune').setRequired((categoriaSoggetto == 'C') && (tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica') && (tipologiaSoggetto != 'professionistaformasingola') && (tipologiaSoggetto != 'professionistaformaassociata'));
if (categoriaSoggetto == 'C') {
  values.put('SedeLegale_Provincia','EEE');
  values.put('SedeLegale_ProvinciaDn',getAnaDenominazione('provincia_istat', values.get('SedeLegale_Provincia')) );
}
fieldsets.get('96b1eb77270445f69aad46f9fe2162ef').setHidden((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcompmi') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('ProvinciaEEperStatoesteroAvvioAttivita').setRequired((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcompmi') || (tipologiaSoggetto == 'newcopersonafisica'));
fieldsets.get('2badcbdd9e7f4486858d1b41b88d3446').setHidden((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcompmi') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('DataIscrizioneCCIAAsedeop').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra'));
items.get('Datainizioattivitasedeoperativa').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra'));
items.get('NumeroREA').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra'));
items.get('ProvinciaIscrizioneCCIAASedeOperativa').setHidden((tipologiaSoggetto != 'mpmimeno24') && (tipologiaSoggetto != 'newcomeno24') && (tipologiaSoggetto != 'mpmipra'));
items.get('DataIscrizioneCCIAAsedeop').setRequired((tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra'));
items.get('Datainizioattivitasedeoperativa').setRequired((tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra'));
items.get('NumeroREA').setRequired((tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra'));
items.get('ProvinciaIscrizioneCCIAASedeOperativa').setRequired((tipologiaSoggetto == 'mpmimeno24') || (tipologiaSoggetto == 'newcomeno24') || (tipologiaSoggetto == 'mpmipra'));
items.get('ProvinciaSedeopeartiva').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcompmi') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Comune_statoesterosedeoperativa').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcompmi') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('CAPSedeOperativa').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcompmi') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('CAPSedeOperativa').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcompmi') && (tipologiaSoggetto != 'newcopersonafisica'));
fieldsets.get('20c1a17afa2345a0a84cb515b6b69ced').setHidden((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcompmi') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('ProvinciaIntenzioneAttivitaSedeOperativa').setRequired((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcompmi') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('ComuneIntenzioneAttivitaSedeOperativa').setRequired((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcompmi') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('CapIntenzioneAttivitaSedeOperativa').setRequired((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcompmi') || (tipologiaSoggetto == 'newcopersonafisica'));
fieldsets.get('7a75fe79bce24f93a834b46c4aa60405').setHidden((tipologiaSoggetto == 'aspiranteprofessionistasingolo') || (tipologiaSoggetto == 'aspiranteimprenditore') || (tipologiaSoggetto == 'aspiranteprofessionistaassociato') || (tipologiaSoggetto == 'newcopersonafisica'));
items.get('DatadiNascitaRapprLegale').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('TelefonoRapprLegale').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('EmailRapprLegale').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Agenzia').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('IstitutodiCredito').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('Intestatario').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));
items.get('IBAN').setRequired((tipologiaSoggetto != 'aspiranteprofessionistasingolo') && (tipologiaSoggetto != 'aspiranteimprenditore') && (tipologiaSoggetto != 'aspiranteprofessionistaassociato') && (tipologiaSoggetto != 'newcopersonafisica'));


//SelezionareOpzioniAlbioAssociazioni
var opzione1AlboAssociazioni = (values.get('SelezionareOpzioniAlbioAssociazioni') == 'opz1');
var opzione2AlboAssociazioni = (values.get('SelezionareOpzioniAlbioAssociazioni') == 'opz2');
items.get('NomeAlbo').setHidden(!opzione1AlboAssociazioni);
items.get('Tipologiaalbo').setHidden(!opzione1AlboAssociazioni);
items.get('Provinciaterritoriale').setHidden(!opzione1AlboAssociazioni);
items.get('Numerodi_iscrizione_albo').setHidden(!opzione1AlboAssociazioni);
items.get('AnnoAlbo').setHidden(!opzione1AlboAssociazioni);
items.get('TipologiaAssociazione').setHidden(!opzione2AlboAssociazioni);
items.get('Datadiadesioneallasuddettaassociazione').setHidden(!opzione2AlboAssociazioni);
items.get('NomeAlbo').setRequired(opzione1AlboAssociazioni);
items.get('Tipologiaalbo').setRequired(opzione1AlboAssociazioni);
items.get('Provinciaterritoriale').setRequired(opzione1AlboAssociazioni);
items.get('Numerodi_iscrizione_albo').setRequired(opzione1AlboAssociazioni);
items.get('AnnoAlbo').setRequired(opzione1AlboAssociazioni);
items.get('TipologiaAssociazione').setRequired(opzione2AlboAssociazioni);
items.get('Datadiadesioneallasuddettaassociazione').setRequired(opzione2AlboAssociazioni);

//CodiceAttivitaPrimariaPrevisto
setSelectOptions('CodiceAttivitaPrimariaPrevisto', 'ATECO2007');

//SezioneCodiceAtecoIntendeAvviare
setSelectWithoutDependedOptions('SezioneCodiceAtecoIntendeAvviare', 'ATECO2007');
setSelectDependedOptionsAndShow('DivisioneCodiceAtecoIntendeAvviare', 'ATECO2007', 'SezioneCodiceAtecoIntendeAvviare');
setSelectDependedOptionsAndShow('CodiceAtecoGruppoPrevisto', 'ATECO2007', 'DivisioneCodiceAtecoIntendeAvviare');
setSelectDependedOptionsAndShow('CodiceAtecoClassePrevisto', 'ATECO2007', 'CodiceAtecoGruppoPrevisto');
setSelectDependedOptionsAndShow('CodiceAtecoCategoriaPrevisto', 'ATECO2007', 'CodiceAtecoClassePrevisto');
setSelectDependedOptionsAndShow('CodiceAtecosottocategoriaPrevisto', 'ATECO2007', 'CodiceAtecoCategoriaPrevisto');

//CodiceAtecoGruppoPrevisto
if(isEmpty('CodiceAtecoGruppoPrevisto')) {
    items.get('CodiceAtecoGruppoPrevisto').addOption('', 'n.d.');
    values.put('CodiceAtecoGruppoPrevisto', '');
}

//CodiceAtecoClassePrevisto
if(isEmpty('CodiceAtecoClassePrevisto')) {
    items.get('CodiceAtecoClassePrevisto').addOption('', 'n.d.');
    values.put('CodiceAtecoClassePrevisto', '');
}

//CodiceAtecoCategoriaPrevisto
if(isEmpty('CodiceAtecoCategoriaPrevisto')) {
    items.get('CodiceAtecoCategoriaPrevisto').addOption('', 'n.d.');
    values.put('CodiceAtecoCategoriaPrevisto', '');
}

//CodiceAtecosottocategoriaPrevisto
if(isEmpty('CodiceAtecosottocategoriaPrevisto')) {
    items.get('CodiceAtecosottocategoriaPrevisto').addOption('', 'n.d.');
    values.put('CodiceAtecosottocategoriaPrevisto', '');
}

//SedeLegale_Provincia
setSelectOptionsCached('SedeLegale_Provincia', 'provincia_istat');
setSelectDependedOptionsCached('SedeLegale_Comune', 'comune_istat', path+'SedeLegale_Provincia');

//ProvinciaEEperStatoesteroAvvioAttivita
setSelectOptionsCached('ProvinciaEEperStatoesteroAvvioAttivita', 'provincia_istat');

//ProfessionistaAssociato.OpzioneIscrizione
if (iamIn('ProfessionistaAssociato')) {
  var isOpz1 = (values.get(path+'OpzioneIscrizione') == 'opz1');
  var isOpz2 = (values.get(path+'OpzioneIscrizione') == 'opz2');
  fieldsets.get('b3fd83b1319c43bd8c78c9c3b27d969b').setHidden(!isOpz1);
  fieldsets.get('852c1325305948d498e0fd125804ad2c').setHidden(!isOpz2);
  items.get('ProfessionistaAssociato.NomeAlboassociati').setRequired(isOpz1);
  items.get('ProfessionistaAssociato.TipologiaAlboassociati').setRequired(isOpz1);
  items.get('ProfessionistaAssociato.ProvinciaTerritorialeAssociati').setRequired(isOpz1);
  items.get('ProfessionistaAssociato.NumeroIscrizione').setRequired(isOpz1);
  items.get('ProfessionistaAssociato.DataIscrizione').setRequired(isOpz1);
  items.get('ProfessionistaAssociato.TipologiaAssociazione').setRequired(isOpz2);
  items.get('ProfessionistaAssociato.DataAdesioneAssociazione').setRequired(isOpz2);
} else {
  items.get('ProfessionistaAssociato.NomeAlboassociati').setRequired(false);
  items.get('ProfessionistaAssociato.TipologiaAlboassociati').setRequired(false);
  items.get('ProfessionistaAssociato.ProvinciaTerritorialeAssociati').setRequired(false);
  items.get('ProfessionistaAssociato.NumeroIscrizione').setRequired(false);
  items.get('ProfessionistaAssociato.DataIscrizione').setRequired(false);
  items.get('ProfessionistaAssociato.TipologiaAssociazione').setRequired(false);
  items.get('ProfessionistaAssociato.DataAdesioneAssociazione').setRequired(false);
}

//ProvinciaEEperStatoesteroAvvioAttivita
setSelectOptionsCached('ProfessionistaAssociato.ProvinciaTerritorialeAssociati', 'provincia_istat');


//onChange
//Richiedente_ProvinciaResidenza
values.put('Richiedente_ProvinciaResidenzaDn', getOptionLabel('Richiedente_ProvinciaResidenza', values.get(path+'Richiedente_ProvinciaResidenza')));
values.put(path+'Richiedente_ComuneResidenza', '');
values.remove('Richiedente_ComuneResidenzaDn');
setSelectDependedOptionsCached('Richiedente_ComuneResidenza', 'comune_istat', path+'Richiedente_ProvinciaResidenza');

//Richiedente_ComuneResidenza
values.put('Richiedente_ComuneResidenzaDn', getOptionLabel('Richiedente_ComuneResidenza', values.get(path+'Richiedente_ComuneResidenza')));

//SelezionareOpzioniAlbioAssociazioni
values.remove('NomeAlbo');
values.remove('Tipologiaalbo');
values.remove('Provinciaterritoriale');
values.remove('Numerodi_iscrizione_albo');
values.remove('AnnoAlbo');
values.remove('TipologiaAssociazione');
values.remove('Datadiadesioneallasuddettaassociazione');
var opzione1AlboAssociazioni = (values.get('SelezionareOpzioniAlbioAssociazioni') == 'opz1');
var opzione2AlboAssociazioni = (values.get('SelezionareOpzioniAlbioAssociazioni') == 'opz2');
items.get('NomeAlbo').setHidden(!opzione1AlboAssociazioni);
items.get('Tipologiaalbo').setHidden(!opzione1AlboAssociazioni);
items.get('Provinciaterritoriale').setHidden(!opzione1AlboAssociazioni);
items.get('Numerodi_iscrizione_albo').setHidden(!opzione1AlboAssociazioni);
items.get('AnnoAlbo').setHidden(!opzione1AlboAssociazioni);
items.get('TipologiaAssociazione').setHidden(!opzione2AlboAssociazioni);
items.get('Datadiadesioneallasuddettaassociazione').setHidden(!opzione2AlboAssociazioni);
items.get('NomeAlbo').setRequired(opzione1AlboAssociazioni);
items.get('Tipologiaalbo').setRequired(opzione1AlboAssociazioni);
items.get('Provinciaterritoriale').setRequired(opzione1AlboAssociazioni);
items.get('Numerodi_iscrizione_albo').setRequired(opzione1AlboAssociazioni);
items.get('AnnoAlbo').setRequired(opzione1AlboAssociazioni);
items.get('TipologiaAssociazione').setRequired(opzione2AlboAssociazioni);
items.get('Datadiadesioneallasuddettaassociazione').setRequired(opzione2AlboAssociazioni);

//Adesione_DomandaDimensioneImpresa
values.remove('Azienda_pmi');
values.remove('Azienda_periodoRiferimentoDimensioneImpresa');
values.remove('AziendaValoriEconomici_totaleBilancio');
values.remove('AziendaValoriEconomici_totaleFatturato');
values.remove('Azienda_Personale_totaleULA');
values.remove('ImpreseAssociateCollegate_presenza');
values.remove('Azienda_Dimensione_Dichiarata');
var richiestaDimensioneImpresa = (values.get('Adesione_DomandaDimensioneImpresa') == 'true');
fieldsets.get('e84bbf1211e84e4f8ea6a81634aac92e').setHidden(!richiestaDimensioneImpresa);
fieldsets.get('faa5f5978d11414caa6bb8209d5f275f').setHidden(!richiestaDimensioneImpresa);
items.get('Azienda_pmi').setRequired(richiestaDimensioneImpresa);
items.get('Azienda_periodoRiferimentoDimensioneImpresa').setRequired(richiestaDimensioneImpresa);
items.get('AziendaValoriEconomici_totaleBilancio').setRequired(richiestaDimensioneImpresa);
items.get('AziendaValoriEconomici_totaleFatturato').setRequired(richiestaDimensioneImpresa);
items.get('Azienda_Personale_totaleULA').setRequired(richiestaDimensioneImpresa);
items.get('ImpreseAssociateCollegate_presenza').setRequired(richiestaDimensioneImpresa);
items.get('Azienda_Dimensione_Dichiarata').setRequired(richiestaDimensioneImpresa);

//SezioneCodiceAtecoIntendeAvviare
values.put('DivisioneCodiceAtecoIntendeAvviare', '');
values.put('CodiceAtecoGruppoPrevisto', '');
values.put('CodiceAtecoClassePrevisto', '');
values.put('CodiceAtecoCategoriaPrevisto', '');
values.put('CodiceAtecosottocategoriaPrevisto', '');
clearOptionsAndHidden('CodiceAtecosottocategoriaPrevisto');
clearOptionsAndHidden('CodiceAtecoCategoriaPrevisto');
clearOptionsAndHidden('CodiceAtecoClassePrevisto');
clearOptionsAndHidden('CodiceAtecoGruppoPrevisto');
setSelectDependedOptionsAndShow('DivisioneCodiceAtecoIntendeAvviare', 'ATECO2007', 'SezioneCodiceAtecoIntendeAvviare');

//DivisioneCodiceAtecoIntendeAvviare
values.put('CodiceAtecoGruppoPrevisto', '');
values.put('CodiceAtecoClassePrevisto', '');
values.put('CodiceAtecoCategoriaPrevisto', '');
values.put('CodiceAtecosottocategoriaPrevisto', '');
clearOptionsAndHidden('CodiceAtecosottocategoriaPrevisto');
clearOptionsAndHidden('CodiceAtecoCategoriaPrevisto');
clearOptionsAndHidden('CodiceAtecoClassePrevisto');
setSelectDependedOptionsAndShow('CodiceAtecoGruppoPrevisto', 'ATECO2007', 'DivisioneCodiceAtecoIntendeAvviare');
if (!isEmpty('DivisioneCodiceAtecoIntendeAvviare')) {
  values.put('CodiceAttivitaPrimariaPrevisto', values.get('DivisioneCodiceAtecoIntendeAvviare'));
}

//CodiceAtecoGruppoPrevisto
values.put('CodiceAtecoClassePrevisto', '');
values.put('CodiceAtecoCategoriaPrevisto', '');
values.put('CodiceAtecosottocategoriaPrevisto', '');
clearOptionsAndHidden('CodiceAtecosottocategoriaPrevisto');
clearOptionsAndHidden('CodiceAtecoCategoriaPrevisto');
setSelectDependedOptionsAndShow('CodiceAtecoClassePrevisto', 'ATECO2007', 'CodiceAtecoGruppoPrevisto');
if (!isEmpty('CodiceAtecoGruppoPrevisto')) {
  values.put('CodiceAttivitaPrimariaPrevisto', values.get('CodiceAtecoGruppoPrevisto'));
}

//CodiceAtecoClassePrevisto
values.put('CodiceAtecoCategoriaPrevisto', '');
values.put('CodiceAtecosottocategoriaPrevisto', '');
clearOptionsAndHidden('CodiceAtecosottocategoriaPrevisto');
setSelectDependedOptionsAndShow('CodiceAtecoCategoriaPrevisto', 'ATECO2007', path+'CodiceAtecoClassePrevisto');
if (!isEmpty('CodiceAtecoClassePrevisto')) {
  values.put('CodiceAttivitaPrimariaPrevisto', values.get('CodiceAtecoClassePrevisto'));
}

//CodiceAtecoCategoriaPrevisto
values.put('CodiceAtecosottocategoriaPrevisto', '');
setSelectDependedOptionsAndShow('CodiceAtecosottocategoriaPrevisto', 'ATECO2007', path+'CodiceAtecoCategoriaPrevisto');
if (!isEmpty('CodiceAtecoCategoriaPrevisto')) {
  values.put('CodiceAttivitaPrimariaPrevisto', values.get('CodiceAtecoCategoriaPrevisto'));
}

//CodiceAtecosottocategoriaPrevisto
if (!isEmpty('CodiceAtecosottocategoriaPrevisto')) {
  values.put('CodiceAttivitaPrimariaPrevisto', values.get('CodiceAtecosottocategoriaPrevisto'));
}

//SedeLegale_Comune
values.put('SedeLegale_ComuneDn', getOptionLabel('SedeLegale_Comune', values.get(path+'SedeLegale_Comune')));

//ProfessionistaAssociato.OpzioneIscrizione
values.remove(path+'NomeAlboassociati');
values.remove(path+'TipologiaAlboassociati');
values.remove(path+'ProvinciaTerritorialeAssociati');
values.remove(path+'NumeroIscrizione');
values.remove(path+'DataIscrizione');
values.remove(path+'TipologiaAssociazione');
values.remove(path+'DataAdesioneAssociazione');
var isOpz1 = (values.get(path+'OpzioneIscrizione') == 'opz1');
var isOpz2 = (values.get(path+'OpzioneIscrizione') == 'opz2');
fieldsets.get('b3fd83b1319c43bd8c78c9c3b27d969b').setHidden(!isOpz1);
fieldsets.get('852c1325305948d498e0fd125804ad2c').setHidden(!isOpz2);
if (iamIn('ProfessionistaAssociato')) {
    items.get('ProfessionistaAssociato.NomeAlboassociati').setRequired(isOpz1);
    items.get('ProfessionistaAssociato.TipologiaAlboassociati').setRequired(isOpz1);
    items.get('ProfessionistaAssociato.ProvinciaTerritorialeAssociati').setRequired(isOpz1);
    items.get('ProfessionistaAssociato.NumeroIscrizione').setRequired(isOpz1);
    items.get('ProfessionistaAssociato.DataIscrizione').setRequired(isOpz1);
    items.get('ProfessionistaAssociato.TipologiaAssociazione').setRequired(isOpz2);
    items.get('ProfessionistaAssociato.DataAdesioneAssociazione').setRequired(isOpz2);
} else {
    items.get('ProfessionistaAssociato.NomeAlboassociati').setRequired(false);
    items.get('ProfessionistaAssociato.TipologiaAlboassociati').setRequired(false);
    items.get('ProfessionistaAssociato.ProvinciaTerritorialeAssociati').setRequired(false);
    items.get('ProfessionistaAssociato.NumeroIscrizione').setRequired(false);
    items.get('ProfessionistaAssociato.DataIscrizione').setRequired(false);
    items.get('ProfessionistaAssociato.TipologiaAssociazione').setRequired(false);
    items.get('ProfessionistaAssociato.DataAdesioneAssociazione').setRequired(false);
}


//validazione



//operations
