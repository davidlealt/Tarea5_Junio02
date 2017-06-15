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
  var gender = document.getElementById('maleGender')
  var birthPlace = document.getElementById('federativeState')

  //1. primera letra y la primera vocal del primer apellido
  var firstRule = firstSurname.value.charAt(0) + getFirstVowel(firstSurname.value)
  //2. primera letra del segundo apellido
  var secondRule = secondSurname.value.charAt(0)
  //3. Tercer Regla: primera letra del nombre de pila; si el primer nombre es José o María, se tomará en cuenta el segundo nombre
  var thirdRule = name.value.charAt(0)
  //4. fecha de nacimiento sin espacios en orden de año, mes y dia; ejemplo 990917 (1999, septiembre 17)
  var fourthRule = birthDay.value.toString() + birthMonth.value.toString() + birthYear.value.toString().substring(2,4)
  //5. letra del sexo (H o M);
  var fifthRule = maleGender.value
  //6. dos letras correspondientes a la entidad de nacimiento;
  //en el caso de nacer en el extranjero, se marca como NE (Nacido en el Extranjero); Catálogo de Claves de Entidades Federativas
  var sixthRule = birthPlace.value
  //7. primera consonante interna (no inicial) del primer apellido;
  var firstSurnameSubstring = firstSurname.value.substring(1,firstSurname.length)
  var seventhRule = getFirstConsonant(firstSurnameSubstring)
  //8. primera consonante interna (no inicial) del segundo apellido;
  var secondSurnameSubstring = secondSurname.value.substring(1,secondSurname.length)
  var eigthRule = getFirstConsonant(secondSurnameSubstring)
  //9. primera consonante interna (no inicial) del nombre,
  var nameSubstring = name.value.substring(1,name.length)
  var ninthRule = getFirstConsonant(nameSubstring)

  curpOutput.value = firstRule + secondRule + thirdRule + fourthRule + fifthRule + sixthRule + seventhRule + eigthRule + ninthRule
  curpOutput.value = curpOutput.value.toUpperCase()
}
