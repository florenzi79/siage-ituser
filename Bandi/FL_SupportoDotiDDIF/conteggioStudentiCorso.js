var nomeProfilo = values.get('ASL_DN');
var descrizioneProfilo = values.get('Richiedente_ASL');
var sqlImportiRichiesti = "SELECT NVL(SUM(CAST(DAT_VL AS NUMBER)), 0) importo_richiesto "+
                          "FROM ag_sm_data_entries en "+
                          "WHERE DAT_PTH = 'SintesiCosti_ContributoRichiesto' "+
                          "AND FK_ID IN ( "+
                          "  SELECT inst.SM_ID "+
                          "  FROM ag_sm_instances inst "+
                          "  WHERE inst.SM_TMPL_DN = 'Adolescenti in difficolta''' "+
                          "  AND inst.CURRENT_STATE IN ( "+
                          "    '8e96cc52ae7a4141867441eb055d7996', "+
                          "    '1d676b4674fe4bb8b1b8b7b0ce75fded' "+
                          "  ) "+
                          "  AND EXISTS ( "+
                          "    SELECT null "+
                          "    FROM ag_sm_data_entries e "+
                          "    WHERE e.FK_ID = inst.SM_ID "+
                          "    AND DAT_PTH = 'Richiedente_ASL' "+
                          "    AND DAT_VL = '"+descrizioneProfilo+"' "+
                          "  ) "+
                          ") ";
var importiRichiesti = parseFloat(dizionarioService.getSingle(null, sqlImportiRichiesti));
var dispResidua = 0;
if (nomeProfilo == 'ASL-BG') {
  dispResidua = 361162 - importiRichiesti;
} else if (nomeProfilo == 'ASL-BS') {
  dispResidua = 370650 - importiRichiesti;
} else if (nomeProfilo == 'ASL-CO') {
  dispResidua = 182765 - importiRichiesti;
} else if (nomeProfilo == 'ASL-CR') {
  dispResidua = 107742 - importiRichiesti;
} else if (nomeProfilo == 'ASL-LC') {
  dispResidua = 107153 - importiRichiesti;
} else if (nomeProfilo == 'ASL-LO') {
  dispResidua = 71919 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MN') {
  dispResidua = 120205 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MI') {
  dispResidua = 426104 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MI-1') {
  dispResidua = 288208 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MI-2') {
  dispResidua = 193427 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MB') {
  dispResidua = 259961 - importiRichiesti;
} else if (nomeProfilo == 'ASL-PV') {
  dispResidua = 152418 - importiRichiesti;
} else if (nomeProfilo == 'ASL-SO') {
  dispResidua = 58647 - importiRichiesti;
} else if (nomeProfilo == 'ASL-VA') {
  dispResidua = 268364 - importiRichiesti;
} else if (nomeProfilo == 'ASL-VS') {
  dispResidua = 31275 - importiRichiesti;
}
var contributoRichiesto = 0;
if (!isEmpty('SintesiCosti_ContributoRichiesto')) {
  contributoRichiesto = parseFloat(values.get('SintesiCosti_ContributoRichiesto'));
}
var dispASL = dispResidua - contributoRichiesto;
if ((dispResidua <= 0) || (dispASL < 0)) {
  errors.put('Budget_ASL','disponibilita_val');
}
