if (iamIn('DocumentiCurricula')){
    if (values.get(path+'RespAttivita_CognomeNome') === null) {
		items.get('DocumentiCurricula.RespAttivita_CognomeNome').setReadonly(false);
		items.get('DocumentiCurricula.CodiceIdentificativoSede').setReadonly(false);
        var nominativo;
        var codiceSede;
        var codSede;
        var sedeConCv;
        var pathIndex = parseInt(path.substr((path.lastIndexOf("[")+1), (path.lastIndexOf("]")-(path.lastIndexOf("[")+1))));
        var i;
        var scv;
        var dcv;
        i = 0;
        scv = 0;
        while (values.get('Sedi['+i+'].CvDisponibile') !== null) {
        	if (values.get('Sedi['+i+'].CvDisponibile') == 'false') {
				codSede = values.get('Sedi['+i+'].CodiceIdentificativoSede');
				sedeConCv = false;
				dcv = 0;
				while (values.get('DocumentiCurricula['+dcv+'].CodiceIdentificativoSede') !== null) {
					if (values.get('DocumentiCurricula['+dcv+'].CodiceIdentificativoSede') == codSede) {
						sedeConCv = true;
					}
					dcv++;
				}
				if (sedeConCv === false) {
					if (nominativo === undefined) {
						codiceSede = codSede;
						nominativo = values.get('Sedi['+i+'].RespAttivita_CognomeNome');
					}
				}
        		scv++;
        	}
        	i++;
        }
        if (nominativo !== undefined) {
            values.put(path+'RespAttivita_CognomeNome',nominativo);
            values.put(path+'CodiceIdentificativoSede',codiceSede);
			items.get('DocumentiCurricula.RespAttivita_CognomeNome').setReadonly(true);
			items.get('DocumentiCurricula.CodiceIdentificativoSede').setReadonly(true);
        }
    }
	else {
		items.get('DocumentiCurricula.RespAttivita_CognomeNome').setReadonly(true);
		items.get('DocumentiCurricula.CodiceIdentificativoSede').setReadonly(true);
	}
}
