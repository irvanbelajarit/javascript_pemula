var nama;
var usia = 12;
var keterangan = "ini adalah keterangan";
umur = 24;

document.write("var global : " + usia);

function cekvariable() {
  var lokal = "jenis variable lokal";
  document.write("didalam fungsi: " + lokal + "<br>");
}
cekvariable();

{
  let num = 30;
  document.write("didalam kurung kurawal { } = " + num + "<br>");
}

document.write("diluar  fungsi: " + lokal);

document.write("<br> Diluar kurung kurawal = " + num);
