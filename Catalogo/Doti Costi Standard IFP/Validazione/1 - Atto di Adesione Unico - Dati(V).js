/* ******************************************************
Questo script presuppone che siano configurati i seguenti errori:
AttoUnico_FirmatarioCodiceFiscale_val ==> Codice fiscale del firmatario non valido
Richiedente_AttoUnicoPresentato_FALSE_val  ==> Prima di presentare una richiesta di dote è necessario presentare l'atto di adesione unico
Richiedente_AttoUnicoPresentato_TRUE_val ==> E' gia stato presentato un atto di adesione unico. Proseguire con il pulsante "Compila Dote"
 ******************************************************
*/
var cf = getVal('AttoUnico_FirmatarioCodiceFiscale');
if ((cf !== null) && (cf !== '')) {
    if (!isValidCf(cf)) {
      err('AttoUnico_FirmatarioCodiceFiscale', 'AttoUnico_FirmatarioCodiceFiscale_val');
    }
}


var isPresentatoAttoUnico = getVal('Richiedente_AttoUnicoPresentato');

if ((isPresentatoAttoUnico !== null) && (isPresentatoAttoUnico !== '')) {
    if ((inputAction == 'Compila Dote')&& (isPresentatoAttoUnico == 'false')) {
        err('Richiedente_Denominazione', 'Richiedente_AttoUnicoPresentato_FALSE_val');
    }
}

if ((isPresentatoAttoUnico !== null) && (isPresentatoAttoUnico !== '')) {
    if ((inputAction == 'Compila Atto di Adesione Unico')&& (isPresentatoAttoUnico == 'true')) {
        err('Avviso_AttoUnicoOk', 'Richiedente_AttoUnicoPresentato_TRUE_val');
    }
}
