

//*********** x Alberto ******************++
//var CF_Oper ='92022330168';
//var CF_Oper ='97425530157';
var CF_Oper ='12621570154';
var m_A = __verificaAccreditamentoOperatore(CF_Oper, [ACC_FORM_A], false);
var m_B =__verificaAccreditamentoOperatore(CF_Oper, [ACC_FORM_B] , false);
var m_L =__verificaAccreditamentoOperatore(CF_Oper, [ACC_LAVORO], false);
logger.info("AAAAAAA DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_A.result:"+m_A.result);
logger.info("AAAAAAA DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_B.result:"+m_B.result);
logger.info("AAAAAAA DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_L.result:"+m_L.result);
var m_accreditamentoOperatore = verificaAccreditamentoOperatoreFormazioneSezioneA(CF_Oper);
	logger.info("AAAAAAA DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_accreditamentoOperatore.result:"+m_accreditamentoOperatore.result);



logger.info("AAAAAAA DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_accreditamentoOperatore.success:"+m_accreditamentoOperatore.success);
if (m_accreditamentoOperatore.success) {
	logger.info("AAAAAAA DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_accreditamentoOperatore.result:"+m_accreditamentoOperatore.result);
	if(m_accreditamentoOperatore.result) {
			logger.info('AAAAAAA  Ente Accreditato');
	} else {
			logger.info('AAAAAAA  Operatore NON Accreditato - Visualizzo avviso 01');
	}
} else {  // se non è stato possibile verificare l'accreditamento dell'operatore
	logger.info("AAAAAAA Errore su verificaAccreditamentoOperatore: " + m_accreditamentoOperatore.message + "\n\n\n\n\n");
}
