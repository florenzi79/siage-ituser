var dt_odierna=new Date().getTime();
var dt_iscrizione=dt_odierna;
logger.info('##### data odierna ' + dt_odierna);
if(!isEmpty('Richiedente_IscrizioneCciaaData')) {
  dt_iscrizione = parseFloat(values.get('Richiedente_IscrizioneCciaaData'));
}
var totalDuration = parseFloat(calcolaGiorni(dt_iscrizione, dt_odierna));
var mesi = Math.floor(totalDuration / 30);
logger.info('mesi' +mesi);
if (mesi > 24) {
  errors.put('Richiedente_IscrizioneCciaaData','Richiedente_IscrizioneCciaaData_val');
}
