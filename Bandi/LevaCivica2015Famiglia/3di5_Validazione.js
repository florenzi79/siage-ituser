{
	var num_Volontari = values.get('Progetto_NumeroVolontari'); 
	var num_Disabili = values.get('Progetto_NumeroVolontariDisabili');
	var quota_Disabili = 0;
	if ((num_Volontari!==null) && (num_Volontari!=='')){
		if (parseInt(num_Volontari) < 1) {
			errors.put('Progetto_NumeroVolontari', 'Progetto_NumeroVolontari_val');
		}
		if ((num_Disabili!==null) && (num_Disabili!=='')){
			if (parseInt(num_Disabili) > parseInt(num_Volontari)) {
				errors.put('Progetto_NumeroVolontariDisabili', 'Progetto_NumeroVolontariDisabili_val');
			}
    		if (parseInt(num_Volontari) > 9) {
    		    quota_Disabili = parseInt(parseInt(num_Volontari) / 10);
				if (parseInt(num_Disabili) < quota_Disabili) {
					errors.put('Progetto_NumeroVolontariDisabili', 'Progetto_NumeroVolontariDisabili_val');
				}
			}
		}
	}

	var num_DurataMesi = values.get('Progetto_DurataMesi'); 
	if ((num_DurataMesi!==null) && (num_DurataMesi!=='')){
		if (parseInt(num_DurataMesi) < 1 || parseInt(num_DurataMesi) > 12) {
			errors.put('Progetto_DurataMesi', 'Progetto_DurataMesi_val');
		}
		// var num_Volontari = values.get('Progetto_NumeroVolontari'); 
		// var ContributoMensile = values.get('Progetto_ContributoMensileAlVolontario'); 
		// var CostoCalcolato = (parseInt(num_DurataMesi) * parseInt(num_Volontari) * parseFloat(ContributoMensile));
		// values.put('DettaglioCosti.Presentato',''+(CostoCalcolato).toFixed(2));
	}

	var num_MonteOre = values.get('Progetto_MonteOreMedioSettimanale'); 
	if ((num_MonteOre!==null) && (num_MonteOre!=='')){
		if (parseInt(num_MonteOre) < 12 || parseInt(num_MonteOre) > 30) {
			errors.put('Progetto_MonteOreMedioSettimanale', 'Progetto_MonteOreMedioSettimanale_val');
		}
	}

	var num_GiorniServizio = values.get('Progetto_GiorniServizioSettim'); 
	if ((num_GiorniServizio!==null) && (num_GiorniServizio!=='')){
		if (parseInt(num_GiorniServizio) < 1 || parseInt(num_GiorniServizio) > 6) {
			errors.put('Progetto_GiorniServizioSettim', 'Progetto_GiorniServizioSettim_val');
		}
	}

    if (values.get('Sedi[0].AttuazioneProgetto') === null) {
        errors.put('MessaggioMultiSedi', 'Sedi_val');
    }

	var sede_i;
	var sede_j;
	var sediDuplicate = false;
	sede_i = 0;
	while (values.get('Sedi['+sede_i+'].CodiceIdentificativoSede') !== null) {
	    sede_j = 0;
		while (values.get('Sedi['+sede_j+'].CodiceIdentificativoSede') !== null) {
			if (sede_i !== sede_j) {
				if (values.get('Sedi['+sede_i+'].CodiceIdentificativoSede') == values.get('Sedi['+sede_j+'].CodiceIdentificativoSede')) {
					sediDuplicate = true;
				}
			}
			sede_j++;
		}
		sede_i++;
	}
	if (sediDuplicate === true) {
	    errors.put('MessaggioMultiSedi', 'SediDuplicate_val');
	}
}