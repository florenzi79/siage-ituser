// nel caso il tutor sia anche dipendente
// il TutorAziendale_LivelloSuperioreAdApprendista deve essere true
{
    var isTutorDiLivelloSuperiore = values.get('TutorAziendale_LivelloSuperioreAdApprendista'); 
    var isTutorDipendente = values.get('TutorAziendale_LavoratoreDipendente'); 

    
    if (( isTutorDiLivelloSuperiore == 'false') && (isTutorDipendente == true) ) {
        errors.put('TutorAziendale_LivelloSuperioreAdApprendista', 'TutorAziendale_LivelloSuperioreAdApprendista_val'); 
        }
    
}

var cf = getVal('TutorFormativo_CodiceFiscale');
if (cf !== null && cf !== '') { 
    if (!isValidCf(cf)) { 
      err('TutorFormativo_CodiceFiscale', 'TutorFormativo_CodiceFiscale_val');
    } 
} 

var titoloDiStudio = values.get('TutorFormativo_TitoloDiStudioNome');
var esperienza = values.get('TutorFormativo_EsperienzaAnni');
var esperienzaSettore = values.get('TutorFormativo_EsperienzaSettore');

if (((titoloDiStudio == 'masterPostLaureaTriennale') | (titoloDiStudio == 'masterPostLaureaSpecialistica') | (titoloDiStudio == 'specializzazionePostLaurea') | (titoloDiStudio == 'dottoratoDiRicerca')) && (esperienza < 2)) {
	err('TutorFormativo_EsperienzaAnni', 'TutorFormativo_EsperienzaAnni_MinoreDue_val');
}
if (esperienza == 0) {
	err('TutorFormativo_EsperienzaAnni', 'TutorFormativo_EsperienzaAnni_Zero_val');
}
if (((titoloDiStudio == 'laureaTriennale') | (titoloDiStudio == 'diplomaUniversitario') | (titoloDiStudio == 'afam') | (titoloDiStudio == 'laureaSpecialistica')) && (esperienzaSettore < 2)) {
	err('TutorFormativo_EsperienzaSettore', 'TutorFormativo_EsperienzaSettore_MinoreDue_val');
}
if (((titoloDiStudio == 'diplomaSiAccessoUniversita') | (titoloDiStudio == 'diplomaNoAccessoUniversita')) && (esperienzaSettore < 3)) {
	err('TutorFormativo_EsperienzaSettore', 'TutorFormativo_EsperienzaSettore_MinoreTre_val');
}
if (esperienzaSettore == 0) {
	err('TutorFormativo_EsperienzaSettore', 'TutorFormativo_EsperienzaSettore_Zero_val');
}
if (esperienzaSettore > esperienza) {
	err('TutorFormativo_EsperienzaSettore', 'TutorFormativo_EsperienzaSettore_Maggiore_val');
}