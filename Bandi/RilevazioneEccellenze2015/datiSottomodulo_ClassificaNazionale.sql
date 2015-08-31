DECLARE
  record_index VARCHAR2(5);
  idpratica VARCHAR2(200);
  richiedente VARCHAR2(200);
  cfrichiedente VARCHAR2(200);
  denominazione VARCHAR2(200);
  codicefiscale VARCHAR2(200);
  sedelegale VARCHAR2(200);
  denominazioneclassifica VARCHAR2(200);
  posizionamento VARCHAR2(200);
  sportdisabili VARCHAR2(200);
  disciplina VARCHAR2(200);
  sezione VARCHAR2(200);
  ntesserati VARCHAR2(200);
  ntesseratiunder VARCHAR2(200);
  affiliazione VARCHAR2(200);
  iscrizconi VARCHAR2(200);
BEGIN
  DBMS_OUTPUT.PUT_LINE('idPratica;indice;Denominazione richiedente;Codice fiscale richiedente;Denominazione ASD;Codice fiscale ASD;Sede legale ASD;Denominazione classifica;Posizionamento;Attivita legata a sport disabili;Disciplina;Sezione;Numero tesserati;Numero tesserati under 18;Numero affiliazione;Numero iscrizione CONI CIP');
  FOR uidpratica IN (
    SELECT SM_ID
    FROM AGORA.AG_SM_INSTANCES inst
    WHERE inst.SM_TMPL_DN = 'Rilevazione Eccellenze')
  LOOP
    FOR sottomoduloindex IN (
      SELECT DAT_PTH
      FROM AGORA.AG_SM_DATA_ENTRIES valori
      WHERE valori.FK_ID = uidpratica.SM_ID
      AND DAT_PTH LIKE 'FSN_DSA_discipline_campionato_classifica_nazionale[%].ASD_DenominazioneClassificaGenerale')
    LOOP
	    record_index := SUBSTR(sottomoduloindex.DAT_PTH,INSTR(sottomoduloindex.DAT_PTH,'[')+1,INSTR(sottomoduloindex.DAT_PTH,']')-INSTR(sottomoduloindex.DAT_PTH,'[')-1);
		  SELECT IDPRATICA.DAT_VL, RICHIEDENTE.DAT_VL, CFRICHIEDENTE.DAT_VL,DENOMINAZIONE.DAT_VL, CODICEFISCALE.DAT_VL, SEDELEGALE.DAT_VL, DENOMINAZIONECLASSIFICA.DAT_VL, POSIZIONAMENTO.DAT_VL, SPORTDISABILI.DAT_VL, DISCIPLINA.DAT_VL, SEZIONE.DAT_VL, NTESSERATI.DAT_VL, NTESSERATIUNDER.DAT_VL, AFFILIAZIONE.DAT_VL, ISCRIZCONI.DAT_VL
      INTO idpratica,richiedente,cfrichiedente,denominazione,codicefiscale,sedelegale,denominazioneclassifica,posizionamento,sportdisabili,disciplina,sezione,ntesserati,ntesseratiunder,affiliazione,iscrizconi
      FROM (
        SELECT SM_ID FROM AGORA.AG_SM_INSTANCES inst
        WHERE inst.SM_ID = uidpratica.SM_ID) I
      left outer join
      (select FK_ID,DAT_VL from AGORA.ag_sm_data_entries data_entries where dat_pth = 'idPratica' ) IDPRATICA ON I.SM_ID= IDPRATICA.FK_ID left outer join
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'Richiedente_Denominazione' ) RICHIEDENTE ON I.SM_ID= RICHIEDENTE.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'Richiedente_CodiceFiscale' ) CFRICHIEDENTE ON I.SM_ID= CFRICHIEDENTE.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_Denominazione' ) DENOMINAZIONE ON I.SM_ID= DENOMINAZIONE.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_CodiceFiscale' ) CODICEFISCALE ON I.SM_ID= CODICEFISCALE.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_Sedelegale' ) SEDELEGALE ON I.SM_ID= SEDELEGALE.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_DenominazioneClassificaGenerale' ) DENOMINAZIONECLASSIFICA ON I.SM_ID= DENOMINAZIONECLASSIFICA.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_Posizionamento' ) POSIZIONAMENTO ON I.SM_ID= POSIZIONAMENTO.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_LegataSportDisabili' ) SPORTDISABILI ON I.SM_ID= SPORTDISABILI.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].Disciplina' ) DISCIPLINA ON I.SM_ID= DISCIPLINA.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].Sezione' ) SEZIONE ON I.SM_ID= SEZIONE.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_N_Tesserati' ) NTESSERATI ON I.SM_ID= NTESSERATI.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_N_Tesserati_Under18' ) NTESSERATIUNDER ON I.SM_ID= NTESSERATIUNDER.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_N_Affiliazione' ) AFFILIAZIONE ON I.SM_ID= AFFILIAZIONE.FK_ID LEFT OUTER JOIN
        (SELECT FK_ID,DAT_VL FROM AGORA.AG_SM_DATA_ENTRIES WHERE DAT_PTH = 'FSN_DSA_discipline_campionato_classifica_nazionale['||record_index||'].ASD_N_IscrizioneCONI' ) ISCRIZCONI ON I.SM_ID= ISCRIZCONI.FK_ID
		  ;
      IF sportdisabili = 'true' THEN
        sportdisabili := 'Si';
      ELSE
        sportdisabili := 'No';
      END IF;
		  DBMS_OUTPUT.PUT_LINE(idpratica || ';' || record_index || ';'  || richiedente || ';="' || cfrichiedente || '";'|| denominazione || ';="' || codicefiscale || '";' || sedelegale || ';' || denominazioneclassifica || ';' || posizionamento || ';' || sportdisabili || ';' || disciplina || ';' || sezione || ';' || ntesserati || ';' || ntesseratiunder || ';="' || affiliazione || '";="' || iscrizconi || '"');
    end loop;
  end loop;
 end;
