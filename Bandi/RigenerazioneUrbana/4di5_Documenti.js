// onLoad
//Adesione_File_AttoDelega
var isFirmatarioRappresentante = (values.get('Firmatario_RappresentanteLegale') == 'true');
items.get('Adesione_File_AttoDelega').setHidden(isFirmatarioRappresentante);
items.get('Adesione_File_AttoDelega').setRequired(!isFirmatarioRappresentante);

//Validazione
//pratica duplicata
{
	var codiceFiscaleRichiedente = values.get('Richiedente_CodiceFiscale');
	var sqlPraticheDuplicate =
	"  SELECT SM_ID ID_PRATICA "+
	"  FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
	"  WHERE DETTAGLIO.DAT_PTH = 'Richiedente_CodiceFiscale' "+
	"  AND DETTAGLIO.DAT_VL = '" + codiceFiscaleRichiedente +"' "+
	"  AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
	"  AND PRATICA.SM_TMPL_DN = 'Rigenerazione urbana' "+
	"  AND PRATICA.CURRENT_STATE in ('b6eb1d6973c8432281d3de1f66272093', 'a849d6d6b98040f092fbb7b814f1da06')"
	//							  					    	Attesa protocollazione			  			Presentata
	;
	var praticheDuplicate = dizionarioService.getList(null, sqlPraticheDuplicate);
	if(praticheDuplicate.size() > 0) {
		errors.put('Adesione_File_SchedaSintesi_Criterio1', 'PraticaDuplicata_val');
	}
}
