/*
var conisql = "SELECT ANA_DS "+
			  "FROM AG_ANAGRAFICHE "+
			  "WHERE ANA_TIPO = 'associati_coni' "+
			  "AND ANA_CD = '"+cfAssociazione+"'";

*/

var qualificheSql = "SELECT ANA_DS FROM AG_ANAGRAFICHE "+
        "WHERE ANA_TIPO = 'Qualifiche_Doti_Costi_Standard_IFP' "
//        +
        //"and SUBSTR(ANA_CD, 0, INSTR(ANA_CD, '|')-1) = TRIM(BOTH ' ' FROM '910') " +
//        "and coalesce (SUBSTR(ANA_CD, INSTR(ANA_CD, '|')+1),'no') =TRIM(BOTH ' ' FROM 'no')  "
;

var qualificheResult = dizionarioService.getList(null, qualificheSql);
    logger.info("XXXXX qualificheResult: "+ qualificheResult);
if(qualificheResult.size() > 0) {
  var i=0;
  for (i = 0; i < qualificheResult.size(); i++) {
    var qualificheResultStr = ''+qualificheResult.get(i);
    var datiQualifiche = qualificheResultStr.split("|");
    logger.info("XXXXX : "+ datiQualifiche);
  }


    /*
  	values.put('PrimoMinore_RicercaDenominazione',''+datiQualifiche[1]);
  	values.put('PrimoMinore_RicercaIndirizzo',''+datiQualifiche[2]);
  	values.put('PrimoMinore_RicercaComune',''+datiQualifiche[3]);
  	values.put('PrimoMinore_RicercaProvincia',''+datiQualifiche[4]);
  	values.put('PrimoMinore_RicercaFsnDsa',''+datiQualifiche[5]);
    */
}
