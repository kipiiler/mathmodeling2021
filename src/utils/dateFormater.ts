export function convertDate(inputFormat: any) {
  function pad(s: any) {
    return "T" + s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

export function convertDatewihtMonth(inputFormat: any) {
  function pad(s: any) {
    return "Tháng " + s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getMonth() + 1), d.getFullYear()].join("/");
}
