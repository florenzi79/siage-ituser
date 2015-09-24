function getFormattedDate() {
  var res = '';
  var dataInvioProtocollo = values.get('DataInvioPerProtocollazione');
  if ((dataInvioProtocollo !== null) && (dataInvioProtocollo !== '')) {
    var dataclic = new Date(dataInvioProtocollo);
    var year = dataclic.getFullYear();
    var month = (1 + dataclic.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = dataclic.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    var hour = dataclic.getHours().toString();
    hour = hour.length > 1 ? hour : '0' + hour;
    var minutes = dataclic.getMinutes().toString();
    minutes = minutes.length > 1 ? minutes : '0' + minutes;
    var seconds = dataclic.getSeconds().toString();
    seconds = seconds.length > 1 ? seconds : '0' + seconds;
    var milliseconds = dataclic.getMilliseconds().toString();
    if (milliseconds.length == 2) {
      milliseconds = '0' + milliseconds;
    } else if (milliseconds.length == 1) {
      milliseconds = '00' + milliseconds;
    }
    res = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds + ' ' + milliseconds;
  }
  return res;
}

getFormattedDate();
