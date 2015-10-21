var i = 0;
var cv = 0;
var fcv = 0;
while (values.get('Sedi['+i+'].CvDisponibile') !== null) {
	if (values.get('Sedi['+i+'].CvDisponibile') == 'false') {
		cv++;
	}
	i++;
}
while (values.get('DocumentiCurricula['+fcv+'].File_Curriculum') !== null) {
	fcv++;
}
if (fcv != cv) {
	errors.put('MessaggioMultiCv', 'MessaggioMultiCv_val');
	println('WGX - fcv: ' + fcv + ' - cv: ' + cv + '.');
}
