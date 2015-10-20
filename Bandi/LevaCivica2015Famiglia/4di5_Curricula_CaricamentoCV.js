if (iamIn('DocumentiCurricula')){
    if (values.get(path+'RespAttivita_CognomeNome') === null) {
        var nominativo;
        var codiceSede;
        var pathIndex = parseInt(path.substr((path.lastIndexOf("[")+1), (path.lastIndexOf("]")-(path.lastIndexOf("[")+1))));
        var i = 0;
        var cv = 0;
        while (values.get('Sedi['+i+'].CvDisponibile') !== null) {
        	if (values.get('Sedi['+i+'].CvDisponibile') == 'false') {
                if (pathIndex === cv) {
                    nominativo = values.get('Sedi['+i+'].RespAttivita_CognomeNome');
                    codiceSede = values.get('Sedi['+i+'].CodiceIdentificativoSede');
                }
        		cv++;
        	}
        	i++;
        }
        if (nominativo !== undefined) {
            values.put(path+'RespAttivita_CognomeNome',nominativo);
            values.put(path+'CodiceIdentificativoSede',codiceSede);
        }
    }
}
