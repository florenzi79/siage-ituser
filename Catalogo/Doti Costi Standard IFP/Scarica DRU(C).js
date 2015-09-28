{
    values.put('File_PdfDru', getContextPath()+'/file/'+values.get('File_PdfDruTmp'));
    values.put('File_PdfPip', getContextPath()+'/file/'+values.get('File_PdfPipTmp'));
    values.put('File_CheckListIstruttoria', getContextPath()+'/file/'+values.get('File_CheckListIstruttoriaTmp'));
}

// verifica accreditamento sede
var idSedePratica = values.get('Richiedente_IdSede');
var result_AccrSedeSezA = verificaAccreditamentoSedeFormazioneSezioneA(idSedePratica);
if (result_AccrSedeSezA.success) {
	var is_AccrSedeSezA=result_AccrSedeSezA.result;
	logger.info("XXXXX Test-Integrazione-GEFO: m_AccrSedeSezA: "+ is_AccrSedeSezA);
	if (is_AccrSedeSezA) {
		values.put('Richiedente_SedeOperativaAccrSezA','true');
	} else {
		values.put('Richiedente_SedeOperativaAccrSezA','false');
	}
	values.put('isQueryVerificaSedeAccreditataOk','true');
	items.get('Avviso_AccreditamentoSedeNonVerificabileDOTE').setHidden(true);

}
else { // interrogazione gefo accreditamento Sede non andata a buon fine
	logger.info("XXXXX interrogazione gefo accreditamento sede non andata a buon fine");
	values.put('isQueryVerificaSedeAccreditataOk','false');
	items.get('Avviso_AccreditamentoSedeNonVerificabileDOTE').setHidden(false);
}
// fine verifica accreditamento sede
// verifiche dotazioni finanziarie
var idOperatore = values.get('Richiedente_IdOperatore');
var nomeTemplate = values.get('Bando_NomeTemplate');
var idStatiDotePresentata = "'4a8eb456b84549a895bd0e87a59e0b67','1629519c9d5f43d1bc8b6b036f4a4a8e'";
var catalogoBando=values.get('CatalogoBando');


logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 1");
var sql_dotazioneFinCorsi_Erosa =   " select nvl(sum(to_number(DAT_VL, '999999999999999999999.9999999999999999999999999')),0) as IMPORTO_EROGATO_CORSI   " +
																		 " from ag_sm_data_entries data_entries "+
																	 " where "+
																	 " dat_pth = 'ServiziFormazione_ImportoTotaleCorsi'     "+
																	 " and fk_id in"+
																	 " ( select sm_id  FROM ag_sm_instances inst "+
																	 " WHERE "+
																	 " inst.sm_tmpl_dn = '"+nomeTemplate+"' "+
																	 " and inst.current_state in ("+idStatiDotePresentata+")) ";
logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 2");

var sql_dotazioneFinDisabilita_Erosa = "select nvl(sum(to_number(DAT_VL, '999999999999999999999.9999999999999999999999999')),0) as IMPORTO_EROGATO_Disabilita   " +
																		 " from ag_sm_data_entries data_entries "+
																	 " where "+
																	 " dat_pth = 'ServiziFormazione_ImportoTotaleDisabilita'"+
																	 " and fk_id in"+
																	 " ( select sm_id  FROM ag_sm_instances inst"+
																	 " WHERE "+
																	 " inst.sm_tmpl_dn = '"+nomeTemplate+"' "+
																	 " and inst.current_state in ("+idStatiDotePresentata+"))";

var sql_dotazioneFinCorsiOperatore_Erosa =
																	 " Select sum(IMPORTO) from 																																		"+
																		" (																																												"+
																		"   SELECT TO_NUMBER (IMPORTO.DAT_VL) as IMPORTO                                                                                          "+
																		"   FROM                                                                                                                                                                     "+
																		"     (SELECT sm_id                                                                                                                                                     "+
																		"     FROM ag_sm_instances inst                                                                                                                                   "+
																		"     WHERE inst.sm_tmpl_dn   = '"+nomeTemplate+"'                                                                                                  "+
																		"     AND inst.current_state IN ("+idStatiDotePresentata+")                         "+
																		"     ) I                                                                                                                                                                          "+
																		"   LEFT OUTER JOIN                                                                                                                                                   "+
																		"     (SELECT FK_ID,                                                                                                                                                    "+
																		"       DAT_VL                                                                                                                                                               "+
																		"     FROM ag_sm_data_entries data_entries                                                                                                                   "+
																		"     WHERE dat_pth = 'ServiziFormazione_ImportoTotaleCorsi'                                                                                        "+
																		"     ) IMPORTO                                                                                                                                                             "+
																		"   ON I.sm_id= IMPORTO.fk_id                                                                                                                                      "+
																		"   LEFT OUTER JOIN                                                                                                                                                    "+
																		"     (SELECT FK_ID,                                                                                                                                                     "+
																		"       DAT_VL                                                                                                                                                                "+
																		"     FROM ag_sm_data_entries data_entries                                                                                                                    "+
																		"     WHERE dat_pth = 'Richiedente_IdOperatore'                                                                                                             "+
																		"     ) ID_OPERATORE                                                                                                                                                   "+
																		"   ON I.sm_id            = ID_OPERATORE.fk_id                                                                                                                "+
																		"   WHERE IMPORTO.dat_VL IS NOT NULL                                                                                                                     "+
																		"   AND ID_OPERATORE.DAT_VL ='"+idOperatore+"'                                                                                                                     "+
																		"   UNION ALL                                                                                                                                                                "+
																		"   Select 0 as IMPORTO from dual                                                                                                                                  "+
																		"  )                                                                                                                                                                                 "+
																		"                                                                                                                                                                                    "
																		;


logger.info("XXXXX DOTI - sql_dotazioneFinCorsi_Erosa:"+sql_dotazioneFinCorsi_Erosa);
logger.info("XXXXX DOTI - sql_dotazioneFinDisabilita_Erosa:"+sql_dotazioneFinDisabilita_Erosa);
logger.info("XXXXX DOTI - sql_dotazioneFinCorsiOperatore_Erosa:"+sql_dotazioneFinCorsiOperatore_Erosa);

logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 3");

var dotazioneFinCorsi_Erosa = dizionarioService.getSingle(null, sql_dotazioneFinCorsi_Erosa);
logger.info("XXXXX DOTE IFP: Dotazione Finanziaria Corsi BANDO:"+dotazioneFinCorsi_Erosa);
values.put('Bando_DotazioneFinCorsi_Erosa',''+dotazioneFinCorsi_Erosa);

logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 4");

var dotazioneFinDisabilita_Erosa = dizionarioService.getSingle(null, sql_dotazioneFinDisabilita_Erosa);
logger.info("XXXXX DOTE IFP: Dotazione Finanziaria DISABILITA:"+dotazioneFinDisabilita_Erosa);
values.put('Bando_DotazioneFinDisabilita_Erosa',''+dotazioneFinDisabilita_Erosa);

var dotazioneFinCorsiOperatore_Erosa = dizionarioService.getSingle(null, sql_dotazioneFinCorsiOperatore_Erosa);
logger.info("XXXXX DOTE IFP: Dotazione Finanziaria OPERATORE:"+dotazioneFinCorsiOperatore_Erosa);
values.put('Bando_DotazioneFinOperatore_Erosa',''+dotazioneFinCorsiOperatore_Erosa);

logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 5 FINE");

var corsiDF = parseFloat(values.get('Bando_DotazioneFinCorsi_Iniziale'))-parseFloat(values.get('Bando_DotazioneFinCorsi_Erosa'));
logger.info('XXXXX DOTI  corsiDF ' + corsiDF);
var disabilitaDF = parseFloat(values.get('Bando_DotazioneFinDisabilita_Iniziale'))-parseFloat(values.get('Bando_DotazioneFinDisabilita_Erosa'));
logger.info('XXXXX DOTI  disabilitaDF ' + disabilitaDF);
var operatoreDF = parseFloat(values.get('Bando_DotazioneFinOperatore_Iniziale'))-parseFloat(values.get('Bando_DotazioneFinOperatore_Erosa'));
logger.info('XXXXX DOTI  operatoreDF ' + operatoreDF);

//Bando_DotazioneFinCorsi_Rimanente_Protoc   ==> Avviso_DotazioneFinCorsi_Rimanente_Esaurita_Protoc_val
// ==> La dotazione finanziaria relativa al bando è esaurita. Non sarà possiblie proseguire con la presentazione della domanda.
//Bando_DotazioneFinDisabilita_Rimanente_Protoc ==> Avviso_DotazioneFinDisabilita__Esaurita_Protoc_val
// ==> La dotazione finanziaria relativa al bando per componente disabilità è esaurita. Non sarà possiblie proseguire con la presentazione della domanda.
//Bando_DotazioneFinOperatore_Rimanente_Protoc  ==> Avviso_DotazioneFinOperatore_Rimanente_Esaurita_Protoc_val
// ==> Il budget assegnato all'operatore è esaurito. Non sarà possibile proseguire con la presentazione della domanda.

values.put('Bando_DotazioneFinCorsi_Rimanente_Protoc',''+corsiDF);
values.put('Bando_DotazioneFinDisabilita_Rimanente_Protoc',''+disabilitaDF);
if((idOperatore != null)&&(idOperatore !='')) {  // se ha funzionato l'integrazione con gefo
	values.put('Bando_DotazioneFinOperatore_Rimanente_Protoc',''+operatoreDF);
}
else {
values.put('Bando_DotazioneFinOperatore_Rimanente','');
}
var is_DotazioneFinCorsi_Esaurita = (corsiDF < parseFloat(values.get('Bando_DotazioneFinCorsi_SogliaPrimoModulo')));
var is_DotazioneFinDisabilita_Esaurita = (disabilitaDF < parseFloat(values.get('Bando_DotazioneFinDisabilita_SogliaPrimoModulo')));
var is_DotazioneFinOperatore = (operatoreDF < parseFloat(values.get('Bando_DotazioneFinOperatore_SogliaPrimoModulo')));
