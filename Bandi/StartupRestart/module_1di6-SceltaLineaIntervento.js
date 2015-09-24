//onLoad
//Richiedente_RagioneSociale
setSelectOptionsCached('Richiedente_IscrizioneCciaaProvincia','provincia_istat');
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
  values.put('statoPratica','In bozza');
  values.put('fasePratica','Adesione');
  values.put( 'Richiedente_NaturaGiuridicaAdesione', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
  var categoriaSoggetto = '';
  var naturaGiuridica = values.get('Richiedente_NaturaGiuridicaAdesione');
	var mappaValoriSgProf = ricercaProfiloSgProf(user);
	if (mappaValoriSgProf !== null) {
		if (naturaGiuridica == 'NGPFL') {
      categoriaSoggetto = 'A';
      values.put('Richiedente_CodiceFiscalePersonaFisica',user.getCodiceFiscale());
    	values.put('Richiedente_Email',user.getEmail());
			if( mappaValoriSgProf.get('ASCS013') !== null ) values.put( 'Richiedente_CognomeCittadino', mappaValoriSgProf.get('ASCS013').toString() );
			if( mappaValoriSgProf.get('ASCS000') !== null ) values.put( 'Richiedente_NomeCittadino', mappaValoriSgProf.get('ASCS000').toString() );
			if( (mappaValoriSgProf.get('ASCS005') !== null) && (values.get('Richiedente_ComuneResidenza') === null)) {
				values.put( 'Richiedente_ComuneResidenza', mappaValoriSgProf.get('ASCS005').toString() );
				values.put( 'Richiedente_ComuneResidenzaDn', getAnaDenominazione('comune_istat', values.get('Richiedente_ComuneResidenza')) );
				var sqlProvinciaResidenza = "SELECT ANA_PARENT_CD "+
											"FROM AG_ANAGRAFICHE "+
											"WHERE ANA_TIPO = 'comune_istat' "+
											"AND ANA_CD = '"+values.get('Richiedente_ComuneResidenza')+"' ";
				var provinciaResidenza = dizionarioService.getList(null, sqlProvinciaResidenza);
				if(sqlProvinciaResidenza.size() > 0) {
					values.put('Richiedente_ProvinciaResidenza',''+provinciaResidenza.get(0));
					values.put( 'Richiedente_ProvinciaResidenzaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_ProvinciaResidenza')) );
				}
			}
      if( mappaValoriSgProf.get('ASCS007') !== null ) values.put( 'Richiedente_CAP_Residenza', mappaValoriSgProf.get('ASCS007').toString() );
		} else if (naturaGiuridica == 'NGPFNL') {
      categoriaSoggetto = 'A';
      values.put('Richiedente_CodiceFiscalePersonaFisica',user.getCodiceFiscale());
    	values.put('Richiedente_Email',user.getEmail());
			if( mappaValoriSgProf.get('ASIS015') !== null ) values.put( 'Richiedente_CognomeCittadino', mappaValoriSgProf.get('ASIS015').toString() );
			if( mappaValoriSgProf.get('ASIS016') !== null ) values.put( 'Richiedente_NomeCittadino', mappaValoriSgProf.get('ASIS016').toString() );
			if( (mappaValoriSgProf.get('ASIS011') !== null) && (values.get('Richiedente_Indirizzo_di_residenza') === null)) values.put( 'Richiedente_Indirizzo_di_residenza', mappaValoriSgProf.get('ASIS011').toString() );
			if( (mappaValoriSgProf.get('ASIS012') !== null) && (values.get('Richiedente_ComuneResidenza') === null)) {
				values.put( 'Richiedente_ComuneResidenza', mappaValoriSgProf.get('ASIS012').toString() );
				values.put( 'Richiedente_ComuneResidenzaDn', getAnaDenominazione('comune_istat', values.get('Richiedente_ComuneResidenza')) );
			}
			if( (mappaValoriSgProf.get('ASIS013') !== null) && (values.get('Richiedente_ProvinciaResidenza') === null)) {
				values.put( 'Richiedente_ProvinciaResidenza', mappaValoriSgProf.get('ASIS013').toString() );
				values.put( 'Richiedente_ProvinciaResidenzaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_ProvinciaResidenza')) );
			}
      if( mappaValoriSgProf.get('ASIS014') !== null ) values.put( 'Richiedente_CAP_Residenza', mappaValoriSgProf.get('ASIS014').toString() );
		} else {
      if ((naturaGiuridica == '1.1.20') || (naturaGiuridica == '1.2.10') || (naturaGiuridica == '1.2.20') || (naturaGiuridica == '1.2.30') || (naturaGiuridica == '1.3.10') || (naturaGiuridica == '1.3.20') || (naturaGiuridica == '1.3.30') || (naturaGiuridica == '1.3.40') || (naturaGiuridica == '1.4.10') || (naturaGiuridica == '1.4.20') || (naturaGiuridica == '1.4.30') || (naturaGiuridica == '1.4.40')) {
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
      if (naturaGiuridica == '1.1.20') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Imprenditore individuale non agricolo');
      }
      if (naturaGiuridica == '1.2.10') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società semplice');
      }
      if (naturaGiuridica == '1.2.20') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società in nome collettivo');
      }
      if (naturaGiuridica == '1.2.30') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società in accomandita semplice');
      }
      if (naturaGiuridica == '1.3.10') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società per azioni');
      }
      if (naturaGiuridica == '1.3.20') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società a responsabilità limitata');
      }
      if (naturaGiuridica == '1.3.30') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società a responsabilità limitata con un unico socio');
      }
      if (naturaGiuridica == '1.3.40') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società in accomandita per azioni');
      }
      if (naturaGiuridica == '1.4.10') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società cooperativa a mutualità prevalente');
      }
      if (naturaGiuridica == '1.4.20') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società cooperativa diversa');
      }
      if (naturaGiuridica == '1.4.30') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società cooperativa sociale');
      }
      if (naturaGiuridica == '1.4.40') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Società di mutua assicurazione');
      }
      if (naturaGiuridica == '1.9.00') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Impresa o ente privato costituito all’estero non altrimenti classificabile');
      }
      if (naturaGiuridica == '1.1.30') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Libero professionista');
      }
      if (naturaGiuridica == '1.1.40') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Lavoratore autonomo');
      }
      if (naturaGiuridica == '1.2.40') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Studio associato e società di professionisti');
      }
      if (naturaGiuridica == '1.7.10') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Associazione riconosciuta');
      }
      if (naturaGiuridica == '1.7.90') {
        values.put('Richiedente_NaturaGiuridicaAdesioneDn','Altra forma di ente privato con personalità giuridica');
      }
      if( mappaValoriSgProf.get('AA037') !== null ) values.put( 'Richiedente_RagioneSociale', mappaValoriSgProf.get('AA037').toString() );
      if( mappaValoriSgProf.get('AA038') !== null ) values.put( 'Richiedente_PartitaIva', mappaValoriSgProf.get('AA038').toString() );
      if( mappaValoriSgProf.get('AA042') !== null ){
        var dataDiCostituzione =  mappaValoriSgProf.get('AA042').toString() ;
        values.put( 'DataCostituzione', ''+manager.parseDateToLong(dataDiCostituzione, 'dd/MM/yyyy HH:mm:ss'));
      }
      if( mappaValoriSgProf.get('AA060') !== null ) values.put( 'SedeLegale_Indirizzo', mappaValoriSgProf.get('AA060').toString() );
      if( mappaValoriSgProf.get('AA061') !== null ) {
        values.put( 'SedeLegale_Comune', mappaValoriSgProf.get('AA061').toString());
        values.put( 'SedeLegale_ComuneDn', getAnaDenominazione('comune_istat', values.get('SedeLegale_Comune')) );
      }
      if( mappaValoriSgProf.get('AA062') !== null ) {
        values.put( 'SedeLegale_Provincia', mappaValoriSgProf.get('AA062').toString() );
        values.put( 'SedeLegale_ProvinciaDn', getAnaDenominazione('provincia_istat', values.get('SedeLegale_Provincia')) );
      }
      if( mappaValoriSgProf.get('AA063') !== null ) values.put( 'SedeLegale_Cap',  mappaValoriSgProf.get('AA063').toString() );
      if (categoriaSoggetto == 'D') {
        if( mappaValoriSgProf.get('AA142') !== null ) values.put( 'Richiedente_CodiceFiscalePersonaFisica', mappaValoriSgProf.get('AA142').toString() );
        if( mappaValoriSgProf.get('AA029') !== null ) values.put( 'Richiedente_CognomeCittadino', mappaValoriSgProf.get('AA029').toString() );
        if( mappaValoriSgProf.get('AA030') !== null ) values.put( 'Richiedente_NomeCittadino', mappaValoriSgProf.get('AA030').toString() );
      }
      if( mappaValoriSgProf.get('AA142') !== null ) values.put( 'CFRappresentanteLegale', mappaValoriSgProf.get('AA142').toString() );
      if( mappaValoriSgProf.get('AA029') !== null ) values.put( 'CognomeRappLegale', mappaValoriSgProf.get('AA029').toString() );
      if( mappaValoriSgProf.get('AA030') !== null ) values.put( 'NomeRappLegale', mappaValoriSgProf.get('AA030').toString() );
      if( mappaValoriSgProf.get('AA206') !== null ) values.put( 'Richiedente_CodiceFiscalePersonaGiuridica', mappaValoriSgProf.get('AA206').toString() );
      if( mappaValoriSgProf.get('AA053') !== null ) {
        values.put( 'Richiedente_IscrizioneCciaaProvincia',  mappaValoriSgProf.get('AA053').toString() );
        values.put( 'Richiedente_IscrizioneCciaaProvinciaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_IscrizioneCciaaProvincia')) );
      }
      if( mappaValoriSgProf.get('AA051') !== null ) values.put( 'Richiedente_IscrizioneCciaaNumero',  mappaValoriSgProf.get('AA051').toString() );
      if( mappaValoriSgProf.get('AA052') !== null ) {
        var dataIscrizioneCciaa =  mappaValoriSgProf.get('AA052').toString();
        values.put( 'Richiedente_IscrizioneCciaaData', ''+manager.parseDateToLong(dataIscrizioneCciaa, 'dd/MM/yyyy HH:mm:ss'));
      }
      if( mappaValoriSgProf.get('AA208') !== null && isEmpty('Richiedente_PEC') ) values.put( 'Richiedente_PEC',  mappaValoriSgProf.get('AA208').toString() );
      if( mappaValoriSgProf.get('AA241') !== null ) values.put( 'CodiceSoggettoEstero', mappaValoriSgProf.get('AA241').toString() );
      if( mappaValoriSgProf.get('AA209') !== null ) values.put( 'Richiedente_CodiceattivitaprimariaAteco', mappaValoriSgProf.get('AA209').toString() );
		}
	}
  items.get('Richiedente_NomeCittadino').setHidden((categoriaSoggetto != 'A') && (categoriaSoggetto != 'D'));
  items.get('Richiedente_CognomeCittadino').setHidden((categoriaSoggetto != 'A') && (categoriaSoggetto != 'D'));
  items.get('Richiedente_CodiceFiscalePersonaFisica').setHidden((categoriaSoggetto != 'A') && (categoriaSoggetto != 'D'));
  items.get('Richiedente_CodiceFiscalePersonaGiuridica').setHidden((categoriaSoggetto != 'B') && (categoriaSoggetto != 'E') && (categoriaSoggetto != 'F'));
  items.get('CodiceSoggettoEstero').setHidden(categoriaSoggetto != 'C');
  items.get('Richiedente_RagioneSociale').setHidden((categoriaSoggetto == 'A') || (categoriaSoggetto == 'D'));
  items.get('Richiedente_NaturaGiuridicaAdesioneDn').setHidden(categoriaSoggetto == 'A');
  items.get('Richiedente_PartitaIva').setHidden(categoriaSoggetto == 'A');
  items.get('Richiedente_IscrizioneCciaaProvincia').setHidden((categoriaSoggetto != 'C') && isEmpty('Richiedente_IscrizioneCciaaProvincia'));
  items.get('Richiedente_IscrizioneCciaaData').setHidden((categoriaSoggetto != 'C') && isEmpty('Richiedente_IscrizioneCciaaData'));
  items.get('Richiedente_IscrizioneCciaaNumero').setHidden((categoriaSoggetto != 'C') && isEmpty('Richiedente_IscrizioneCciaaNumero'));
  items.get('DataCostituzione').setHidden((categoriaSoggetto != 'C') && isEmpty('DataCostituzione'));
  items.get('Richiedente_PartitaIva').setReadonly(mappaValoriSgProf.get('AA038') !== null);
  items.get('Richiedente_IscrizioneCciaaProvincia').setReadonly(categoriaSoggetto != 'C');
  items.get('Richiedente_IscrizioneCciaaData').setReadonly(categoriaSoggetto != 'C');
  items.get('Richiedente_IscrizioneCciaaNumero').setReadonly(categoriaSoggetto != 'C');
  items.get('DataCostituzione').setReadonly(categoriaSoggetto != 'C');
  items.get('Richiedente_PartitaIva').setRequired((categoriaSoggetto == 'C') && (mappaValoriSgProf.get('AA038') === null));
  items.get('Richiedente_IscrizioneCciaaProvincia').setRequired(categoriaSoggetto == 'C');
  items.get('Richiedente_IscrizioneCciaaData').setRequired(categoriaSoggetto == 'C');
  items.get('Richiedente_IscrizioneCciaaNumero').setRequired(categoriaSoggetto == 'C');
  items.get('DataCostituzione').setRequired(categoriaSoggetto == 'C');

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
  items.get('Sidichiaradiaveracquisito').setRequired((categoriaSoggetto != 'A') && (values.get('Ambitodipartecipazionealbando') == 'ReStart') && !cfPresente);
  items.get('Sidichiaradiaveracquisito').setHidden((categoriaSoggetto == 'A') || (values.get('Ambitodipartecipazionealbando') != 'ReStart') || cfPresente);

  var titolo = 'Nuova pratica';
  if (isEmpty('Richiedente_RagioneSociale')) {
    titolo = values.get('Richiedente_NomeCittadino') + ' ' + values.get('Richiedente_CognomeCittadino');
  } else {
    titolo = values.get('Richiedente_RagioneSociale');
  }
  values.put('title',titolo);
  items.get('title').setHidden(true);
}

//SelezionareAmbitoIntervento
var isStart = (values.get('Ambitodipartecipazionealbando') == 'Start');
items.get('SelezionareAmbitoIntervento').setRequired(isStart);
items.get('SelezionareAmbitoIntervento').setHidden(!isStart);


//Selezionarelatipologiadisoggettobeneficiario
var isStartProfessioni = (values.get('SelezionareAmbitoIntervento') == 'starprofessioni');
var isCittadino = ((values.get('Richiedente_NaturaGiuridicaAdesione') == 'NGPFL') || (values.get('Richiedente_NaturaGiuridicaAdesione') == 'NGPFNL'));
var isNotRegistroImprese = (isEmpty('Richiedente_IscrizioneCciaaProvincia') && isEmpty('Richiedente_IscrizioneCciaaData') && isEmpty('Richiedente_IscrizioneCciaaNumero'));
items.get('Selezionarelatipologiadisoggettobeneficiario').setHidden(!isStartProfessioni || !isCittadino);
items.get('Siconfermadinonessereiscrittialregistrodelleimprese').setHidden(!isStartProfessioni || isCittadino || !isNotRegistroImprese);
items.get('Selezionarelatipologiadisoggettobeneficiario').setRequired(isStartProfessioni && isCittadino);
items.get('Siconfermadinonessereiscrittialregistrodelleimprese').setRequired(isStartProfessioni && !isCittadino && isNotRegistroImprese);


//onChange
//Ambitodipartecipazionealbando
values.remove('SelezionareAmbitoIntervento');
values.remove('Sidichiaradiaveracquisito');
var isStart = (values.get('Ambitodipartecipazionealbando') == 'Start');
items.get('SelezionareAmbitoIntervento').setRequired(isStart);
items.get('SelezionareAmbitoIntervento').setHidden(!isStart);
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
var isStartProfessioni = (values.get('SelezionareAmbitoIntervento') == 'starprofessioni');
var isCittadino = ((values.get('Richiedente_NaturaGiuridicaAdesione') == 'NGPFL') || (values.get('Richiedente_NaturaGiuridicaAdesione') == 'NGPFNL'));
var isNotRegistroImprese = (isEmpty('Richiedente_IscrizioneCciaaProvinciaDn') && isEmpty('Richiedente_IscrizioneCciaaData') && isEmpty('Richiedente_IscrizioneCciaaNumero'));
items.get('Selezionarelatipologiadisoggettobeneficiario').setHidden(!isStartProfessioni || !isCittadino);
items.get('Siconfermadinonessereiscrittialregistrodelleimprese').setHidden(!isStartProfessioni || isCittadino || !isNotRegistroImprese);
items.get('Selezionarelatipologiadisoggettobeneficiario').setRequired(isStartProfessioni && isCittadino);
items.get('Siconfermadinonessereiscrittialregistrodelleimprese').setRequired(isStartProfessioni && !isCittadino && isNotRegistroImprese);
items.get('Sidichiaradiaveracquisito').setRequired(!isCittadino && (values.get('Ambitodipartecipazionealbando') == 'ReStart') && !cfPresente);
items.get('Sidichiaradiaveracquisito').setHidden(isCittadino || (values.get('Ambitodipartecipazionealbando') != 'ReStart') || cfPresente);

//SelezionareAmbitoIntervento
values.remove('Selezionarelatipologiadisoggettobeneficiario');
values.remove('Siconfermadinonessereiscrittialregistrodelleimprese');
var isStartProfessioni = (values.get('SelezionareAmbitoIntervento') == 'starprofessioni');
var isCittadino = ((values.get('Richiedente_NaturaGiuridicaAdesione') == 'NGPFL') || (values.get('Richiedente_NaturaGiuridicaAdesione') == 'NGPFNL'));
var isNotRegistroImprese = (isEmpty('Richiedente_IscrizioneCciaaProvincia') && isEmpty('Richiedente_IscrizioneCciaaData') && isEmpty('Richiedente_IscrizioneCciaaNumero'));
items.get('Selezionarelatipologiadisoggettobeneficiario').setHidden(!isStartProfessioni || !isCittadino);
items.get('Siconfermadinonessereiscrittialregistrodelleimprese').setHidden(!isStartProfessioni || isCittadino || !isNotRegistroImprese);
items.get('Selezionarelatipologiadisoggettobeneficiario').setRequired(isStartProfessioni && isCittadino);
items.get('Siconfermadinonessereiscrittialregistrodelleimprese').setRequired(isStartProfessioni && !isCittadino && isNotRegistroImprese);


//validazione
if ((values.get('SelezionareAmbitoIntervento') == 'startimprese') && !isEmpty('DataCostituzione')) {
  var dataCostituzione = parseFloat(values.get('DataCostituzione'));
  var dataOdierna = parseFloat(new Date().getTime());
  var mesi24 = 63115200000;
  if (dataCostituzione < (dataOdierna - mesi24)) {
    errors.put('DataCostituzione','DataCost24Mesi_val');
  }
}
var isCittadino = ((values.get('Richiedente_NaturaGiuridicaAdesione') == 'NGPFL') || (values.get('Richiedente_NaturaGiuridicaAdesione') == 'NGPFNL'));
var isEstero = (values.get('Richiedente_NaturaGiuridicaAdesione') == '1.9.00');
var isMaybeNotRegistroImprese = (isEmpty('Richiedente_IscrizioneCciaaProvincia') || isEmpty('Richiedente_IscrizioneCciaaData') || isEmpty('Richiedente_IscrizioneCciaaNumero'));
var isNotRegistroImprese = (isEmpty('Richiedente_IscrizioneCciaaProvincia') && isEmpty('Richiedente_IscrizioneCciaaData') && isEmpty('Richiedente_IscrizioneCciaaNumero'));
if ((values.get('Ambitodipartecipazionealbando') == 'ReStart') && !isCittadino && !isEstero && isMaybeNotRegistroImprese) {
  errors.put('Ambitodipartecipazionealbando','ReStartNonAmmesso_val');
}
if ((values.get('SelezionareAmbitoIntervento') == 'startimprese') && !isCittadino && !isEstero && isMaybeNotRegistroImprese) {
  errors.put('SelezionareAmbitoIntervento','StartImpreseNonAmmesso_val');
}
if ((values.get('SelezionareAmbitoIntervento') == 'starprofessioni') && !isCittadino && !isNotRegistroImprese) {
  errors.put('SelezionareAmbitoIntervento','StartProfessNonAmmesso_val');
}
if ((values.get('SelezionareAmbitoIntervento') == 'starprofessioni') && (values.get('Siconfermadinonessereiscrittialregistrodelleimprese') == 'false')) {
  errors.put('Siconfermadinonessereiscrittialregistrodelleimprese','DichStartProfessNonAmmesso_val');
}
