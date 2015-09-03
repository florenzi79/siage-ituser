estraiStatoIscrizioni result: {datiAnagrafici={
  capdomicilio=23861,
  capresidenza=23861,
  codicefiscale=VLSSNO98S60E507L,
  cognome=VALSECCHI,
  datanascita=20/11/1998,
  genere=F,
  indirizzodomicilio=SEGANTINI, 95,
  indirizzoresidenza=SEGANTINI, 95,
  comunedomicilio=097021,
  istatcomunenascita=097042,
  istatcomuneresidenza=097021,
  nome=SONIA
}, 66678={idcorso=66678, iddote=35417757, idiscrizione=502926, numeroofferta=048, statoiscrizione=I}, 91010={idcorso=91010, iddote=41180104, idiscrizione=588364, numeroofferta=048, statoiscrizione=I}, 110036={idcorso=110036, iddote=50420706, idiscrizione=748344, numeroofferta=048, statoiscrizione=I}, 105061={idcorso=105061, iddote=51346779, idiscrizione=793791, numeroofferta=120, statoiscrizione=I}, iscrizioni=[Ljava.util.LinkedHashMap;@47c9d892}
XXXXXX (1) estraiStatoIscrizioni message: undefined
XXXXX Test-Integrazione-GEFO: cognome: VALSECCHI
XXXXX Test-Integrazione-GEFO: nome   : SONIA

13:02:07,118 INFO  [stdout] (http-/0.0.0.0:8080-28)  XXXXXX (1) estraiStatoIscrizioni message: undefined
13:02:07,124 INFO  [stdout] (http-/0.0.0.0:8080-28) XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: {idcorso=66678, iddote=35417757, idiscrizione=502926, numeroofferta=048, statoiscrizione=I}
13:02:07,124 INFO  [stdout] (http-/0.0.0.0:8080-28) XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: {idcorso=91010, iddote=41180104, idiscrizione=588364, numeroofferta=048, statoiscrizione=I}
13:02:07,125 INFO  [stdout] (http-/0.0.0.0:8080-28) XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: {idcorso=110036, iddote=50420706, idiscrizione=748344, numeroofferta=048, statoiscrizione=I}
13:02:07,126 INFO  [stdout] (http-/0.0.0.0:8080-28) XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: {idcorso=105061, iddote=51346779, idiscrizione=793791, numeroofferta=120, statoiscrizione=I}


return_test = estraiStatoIscrizioni('VLSSNO98S60E507L', ['56','48']);
if (return_test.success) {
    logger.info("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni: "+ return_test.result);
    for (i = 0; i < return_test.result.get('iscrizioni').length; i++) {
        var elem = return_test.result.get('iscrizioni')[i];
        logger.info("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: "+ elem);
    }
