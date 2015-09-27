var dataInvioProtocollo = new Date();
values.put('DataOraInvioProtocollo',''+dataInvioProtocollo.getTime());
var dataInvioProtocolloDn = '';
if ((dataInvioProtocollo !== null) && (dataInvioProtocollo !== '')) {
  var year = dataInvioProtocollo.getFullYear();
  var month = (1 + dataInvioProtocollo.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = dataInvioProtocollo.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  var hour = dataInvioProtocollo.getHours().toString();
  hour = hour.length > 1 ? hour : '0' + hour;
  var minutes = dataInvioProtocollo.getMinutes().toString();
  minutes = minutes.length > 1 ? minutes : '0' + minutes;
  var seconds = dataInvioProtocollo.getSeconds().toString();
  seconds = seconds.length > 1 ? seconds : '0' + seconds;
  var milliseconds = dataInvioProtocollo.getMilliseconds().toString();
  if (milliseconds.length == 2) {
    milliseconds = '0' + milliseconds;
  } else if (milliseconds.length == 1) {
    milliseconds = '00' + milliseconds;
  }
  dataInvioProtocolloDn = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds + ' ' + milliseconds;
}
values.put('DataOraInvioProtocolloDn',dataInvioProtocolloDn);
save();
