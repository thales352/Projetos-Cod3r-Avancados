function cripto(numero: number) {
  return numero.toString(2);
}
function desCripto(numero) {
  return parseInt(numero, 2);
}
export { cripto, desCripto };
