window.onload = function() {

  function getFirstConsonant(word){
    for(var x = 1; x< word.length; x++){
      if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) == -1) { return word[x]}
    }
    return 'x';
  }

  function getFirstVowel(word){
  for(var x = 1; x< word.length; x++){
    if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) !== -1) { return word[x]}
  }
  return 'x';
  }

  var name = document.getElementById('names')
  var firstSurname = document.getElementById('first-surname')
  var secondSurname = document.getElementById('second-surname')
  var birthDay = document.getElementById('birthDay')
  var birthMonth = document.getElementById('birthMonth')
  var birthYear = document.getElementById('birthYear')
  var maleGender = document.getElementById('maleGender')
  var femaleGender = document.getElementById('femaleGender')
  var birthPlace = document.getElementById('federativeState')
  var curpOutput = document.getElementById('curp')

  function generateCurp(){
    var curp = '';
    curp = firstSurname.value[0] || '';
    curp += getFirstVowel(firstSurname.value) || '';
    curp += secondSurname.value[0] || '';
    curp += name.value[0] || '';
    curp += birthYear.value.slice(-2) || '';
    curp += birthMonth.value || '';
    curp += birthDay.value || '';
    curp += maleGender.checked ? 'H' : 'M';
    curp += birthPlace.value || '';
    curp += getFirstConsonant(firstSurname.value ) || '';
    curp += getFirstConsonant(secondSurname.value ) || '';
    curp += getFirstConsonant(name.value ) || '';

    curpOutput.value = curp.toUpperCase();

    generateJSON()
  }

  function generateJSON() {
  var json = {
    name: name.value,
    ApellidoPaterno: firstSurname.value,
    ApellidoMaterno: secondSurname.value,
    dob: {
      Año: birthYear.value.slice(-2),
      Mes: birthMonth.value,
      Día: birthDay.value
    },
    Estado: birthPlace.value,
    Sexo: maleGender.checked ? 'H' : 'M'

  }
  document.getElementById('json').value = JSON.stringify(json);
}

  var curpFields = document.getElementsByClassName('curp-field');
  for (var i = 0; i < curpFields.length; i++) {
   var ev = curpFields[i].type == 'radio' ? 'click' : 'input';
   curpFields[i].addEventListener(ev, generateCurp);
  }

}
