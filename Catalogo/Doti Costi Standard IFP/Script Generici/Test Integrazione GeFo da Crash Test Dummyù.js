logger.info("\n\n\n\n\n\n\n\nXXXXX Test-Integrazione-GEFO: INIZIO Script\n\n\n\n\n\n\n\n");

// *************************************************
var cfDestinatario ='VLSSNO98S60E507L';
var offerteFormative=['56','48','532','243543']; // idOfferta = 56  Numero Offerta = 48

// *************************************************
//var mappaestraiStatoIscrizioni2 = estraiStatoIscrizioni(cfDestinatario,offerteFormative);
//var mappaestraiStatoIscrizioni2 = estraiStatoIscrizioni('VLSSNO98S60E507L',['56', '48']);
//var mappaestraiStatoIscrizioni2 = estraiStatoIscrizioni('VLSSNO98S60E507L',null);
//var mappaestraiOffertaFormativa = estraiOffertaFormativa(idOperatore, offerteFormative, idSede);

/*
var mappaestraiOffertaFormativa = estraiOffertaFormativa('171919', ['56','48'], '179778');
if (mappaestraiOffertaFormativa.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: mappaestraiOffertaFormativa: "+mappaestraiOffertaFormativa.result);
} else {
    logger.info("\n\n\n\n\nErrore: " + mappaestraiOffertaFormativa.message + "\n\n\n\n\n");
}
*/
var return_test;

return_test = verificaAccreditamentoOperatore('02481950984');
logger.info("XXXXX Test-Integrazione-GEFO: verificaAccreditamentoOperatore return_test.success: "+ return_test.success);
logger.info("XXXXX Test-Integrazione-GEFO: verificaAccreditamentoOperatore return_test.result: "+ return_test.result);

if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: verificaAccreditamentoOperatore: "+ return_test.result);
} else {
    logger.info("\n\n\n\n\nErrore su verificaAccreditamentoOperatore: " + return_test.message + "\n\n\n\n\n");
}
/*
return_test = verificaAccreditamentoSede('179778');
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: verificaAccreditamentoSede: "+ return_test.result);
} else {
    logger.info("\n\n\n\n\nErrore su verificaAccreditamentoSede: " + return_test.message + "\n\n\n\n\n");
}

return_test = estraiDotiBeneficiario('VLSSNO98S60E507L', ['56','48']);
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: estraiDotiBeneficiario: "+ return_test.result);
} else {
    logger.info("\n\n\n\n\nErrore su estraiDotiBeneficiario: " + return_test.message + "\n\n\n\n\n");
}

return_test = estraiStatoIscrizioni('VLSSNO98S60E507L', ['56','48']);
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni: "+ return_test.result);
    for (i = 0; i < return_test.result.get('iscrizioni').length; i++) {
        var elem = return_test.result.get('iscrizioni')[i];
        logger.info("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: "+ elem);
    }

} else {
    logger.info("\n\n\n\n\nErrore su estraiStatoIscrizioni: " + return_test.message + "\n\n\n\n\n");
}

return_test = estraiDettagliCorsi('171919', 'VLSSNO98S60E507L', ['56','48'], null);
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: estraiDettagliCorsi: "+ return_test.result);
} else {
    logger.info("\n\n\n\n\nErrore su estraiDettagliCorsi: " + return_test.message + "\n\n\n\n\n");
}

return_test = estraiOffertaFormativa('171919', ['56','48'], null);
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: estraiOffertaFormativa: "+ return_test.result);
} else {
    logger.info("\n\n\n\n\nErrore su estraiOffertaFormativa: " + return_test.message + "\n\n\n\n\n");
}

return_test = estraiInformazioniSede('02481950984', '179778');
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: estraiInformazioniSede: "+ return_test.result);
} else {
    logger.info("\n\n\n\n\nErrore su estraiInformazioniSede: " + return_test.message + "\n\n\n\n\n");
}

return_test = recuperaSedePratica();
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: recuperaSedePratica: "+ return_test.result);
} else {
    logger.info("\n\n\n\n\nErrore su recuperaSedePratica: " + return_test.message + "\n\n\n\n\n");
}

return_test = estraiOffertaFormativa('5498', ['001'], null);
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: estraiOffertaFormativa: "+ return_test.result);
    for (i = 0; i < return_test.result.length; i++) {
        var elem = return_test.result[i];
        logger.info("XXXXX Test-Integrazione-GEFO: estraiOffertaFormativa["+i+"]: "+ elem);
    }
} else {
    logger.info("\n\n\n\n\nErrore su estraiOffertaFormativa: " + return_test.message + "\n\n\n\n\n");
}
*/
//logger.info("XXXXX Test-Integrazione-GEFO: mappaestraiStatoIscrizioni2:"+mappaestraiStatoIscrizioni2);

logger.info("\n\n\n\n\n\n\n\nXXXXX Test-Integrazione-GEFO: FINE Script\n\n\n\n\n\n\n\n");
