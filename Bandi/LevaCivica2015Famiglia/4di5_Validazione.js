var fcv = 0;
var rcv = 0;
var i = 0;
while (values.get('Sedi['+i+'].CvDisponibile') !== null) {
	if (values.get('Sedi['+i+'].CvDisponibile') == 'false') {
        rcv++;
	}
	i++;
}
while (values.get('DocumentiCurricula['+fcv+'].File_Curriculum') !== null) {
	fcv++;
}

if (fcv == rcv) {
    var erroreCvSedi = false;
    var sedeConCv;
    var scv = 0;
    while (values.get('Sedi['+scv+'].CvDisponibile') !== null) {
    	if (values.get('Sedi['+scv+'].CvDisponibile') == 'false') {
            sedeConCv = false;
            dcv = 0;
            while (values.get('DocumentiCurricula['+dcv+'].CodiceIdentificativoSede') !== null) {
    			if (values.get('DocumentiCurricula['+dcv+'].CodiceIdentificativoSede') == values.get('Sedi['+scv+'].CodiceIdentificativoSede')) {
    				sedeConCv = true;
    			}
    			dcv++;
        	}
    		if (sedeConCv === false) {
    		    erroreCvSedi = true;
    		}
            scv++;
        }
    }
    if (erroreCvSedi) {
    	errors.put('MessaggioMultiCv', 'MessaggioSediCv_val');
    }
}
else {
	errors.put('MessaggioMultiCv', 'MessaggioMultiCv_val');
	println('WGX - fcv: ' + fcv + ' - cv: ' + rcv + '.');
}
