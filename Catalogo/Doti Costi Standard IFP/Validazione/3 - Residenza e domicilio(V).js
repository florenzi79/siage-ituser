{
 var cap = values.get('Partecipante_ResidenzaCap');
 if (cap != null && cap != '') {
  var capInt = parseInt(cap);
  if (!isValidCap(cap)) {
   errors.put('Partecipante_ResidenzaCap', 'Partecipante_ResidenzaCap_val');
  }
 }
}

var email = getVal('Partecipante_Email');
if (email != null && email != '') {
    if (!isValidEmail(email)) {
      err('Partecipante_Email', 'Partecipante_Email_val');
    }
}

if (!(isProvinciaInRegioneIstat(values.get('Partecipante_ResidenzaProvincia'), '03'))) {
    var residenza = false;
	var idSede = values.get('Richiedente_IdSede_05');
	var idOperatore = values.get('Richiedente_IdOperatore_05');
	var comuneIstat = values.get('Partecipante_DomicilioComune');

	if ((idSede == '292116' && idOperatore == '6185' && comuneIstat == '013242') ||
		(idSede == '672769' && idOperatore == '120655' && comuneIstat == '013075') ||
		(idSede == '303580' && idOperatore == '126372' && comuneIstat == '014060') ||
		(idSede == '180414' && idOperatore == '171919' && comuneIstat == '017148') ||
		(idSede == '662451' && idOperatore == '577313' && comuneIstat == '097015')){
		    residenza = true;
	}
	if (residenza == false) {
	    err('Partecipante_DomicilioComune','Partecipante_DomicilioComune_val');
	}
}
