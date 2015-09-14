//onLoad
//TipologiaPartenership
var isAssociata = (values.get('Richiedente_TipologiaPartecipazione') == 'associata');
items.get('TipologiaPartenership').setHidden(!isAssociata);
items.get('TipologiaPartenership').setRequired(isAssociata);
modules.get('Partnership').setHidden(!isAssociata);
modules.get('Partnership').setRequired(isAssociata);
//onChange

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
		errors.put('Progetto_Nome', 'PraticaDuplicata_val');
	}
}
{
	var dataStart = new Date(2011, 0, 1, 0, 0, 0, 0).getTime();
	var dataEnd = new Date(2015, 8, 30, 0, 0, 0, 0).getTime();
	if (!isEmpty('Porgetto_DataApprovazioneIniziativa')) {
		var dataApprovazione = Math.floor(parseFloat(values.get('Porgetto_DataApprovazioneIniziativa')));
		if ((dataApprovazione < dataStart) || (dataApprovazione > dataEnd)) {
			errors.put('Porgetto_DataApprovazioneIniziativa','Porgetto_DataApprovazioneIniziativa_val');
		}
	}
}
