function colorChanger() {
  const color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  const color1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  const color2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  const color3 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  const color4 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  document.body.style.backgroundColor = color;
  document.getElementById("buttoncolor").style.backgroundColor = color1;
  document.getElementById("buttoncolor").style.borderColor = color2;
  document.getElementById("buttoncolor2").style.backgroundColor = color3;
  document.getElementById("buttoncolor2").style.borderColor = color4;
}
function rpc() {
  const choixUser = document.getElementById("entervalue").value;

  const computerChoice = Math.random()
  result = ''
  if (computerChoice < 0.33) {
    result = 'rock'
    document.getElementById("ordi").value = 'rock';
  }
  else if (computerChoice < 0.66) {
    result = 'paper'
    document.getElementById("ordi").value = 'paper';
  }
  else {
    result = 'cissor'
    document.getElementById("ordi").value = 'cissor';
  }
  document.getElementById("joueur").value = choixUser;
  document.getElementById("entervalue").value = '';
  console.log('Ordi :', computerChoice, result)
  console.log('Joueur :', choixUser)
  const resultat = comparer(choixUser, result)
  function comparer(choixUser, result) {
    if (choixUser === 'rock' && result === 'cissor'
    || choixUser === 'paper' && result === 'rock'
    || choixUser === 'cissor' && result === 'paper') {
    document.getElementById("winner").style.color = "Green";
    return document.getElementById("winner").value = 'Player';
  } else if (choixUser === result) {
    document.getElementById("winner").style.color = "Blue";
    return document.getElementById("winner").value = 'Equality';
  } else if(
    result === 'rock' && choixUser === 'cissor'
    || result === 'paper' && choixUser === 'rock'
    || result === 'cissor' && choixUser === 'paper'
  ){
    document.getElementById("winner").style.color = "Red";
    return document.getElementById("winner").value = 'Computer';
  }else{
    document.getElementById("winner").style.color = "Black";
    return document.getElementById("winner").value = "  ERROR, wrong word  ";
  }
  }
  console.log('gagnant :', resultat)
}
function dice() {
  const numberdice = document.getElementById("dicevalue").value;

  if(numberdice === 'one'){
    document.getElementById('result').innerHTML = '';
    diceroll()
  }
  else if (numberdice === 'two') {
    document.getElementById('result').innerHTML = '';
    for (var i = 0; i < 2; i++) {
      diceroll()
    }
  }
  else if (numberdice === 'three') {
    document.getElementById('result').innerHTML = '';
    for (var i = 0; i < 3; i++) {
      diceroll()
    }
  }
  else if (numberdice === 'four') {
    document.getElementById('result').innerHTML = '';
    for (var i = 0; i < 4; i++) {
      diceroll()
    }
  }
  else {
    document.getElementById('result').innerHTML = '';
    for (var i = 0; i < 5; i++) {
      diceroll()
    }
  }
  function diceroll() {
    const computerDice = Math.random()
    resultats = ''
    if (computerDice < 0.16) {resultats = '1'}
    else if (computerDice < 0.32) {resultats = '2'}
    else if (computerDice < 0.48) {resultats = '3'}
    else if (computerDice < 0.64) {resultats = '4'}
    else if (computerDice < 0.8) {resultats = '5'}
    else {resultats = '6'}
    const dice = document.createElement("INPUT");
    dice.setAttribute("type", "text");
    dice.setAttribute("value", resultats);
    document.getElementById('result').appendChild(dice);
    console.log(resultats);
  }

    // if(numberdice === 'one'){
    //   diceroll()
    //   document.getElementById("one").value = resultats;
    //   document.getElementById("two").value = '';
    //   document.getElementById("three").value = '';
    //   document.getElementById("four").value = '';
    //   document.getElementById("five").value = '';
    // }
    // else if (numberdice === 'two') {
    //   for (var i = 0; i < 2; i++) {
    //     diceroll()
    //     document.getElementById("one").value = resultats;
    //     document.getElementById("two").value = resultats;
    //     document.getElementById("three").value = '';
    //     document.getElementById("four").value = '';
    //     document.getElementById("five").value = '';
    //   }
    //
    // }
    // else if (numberdice === 'three') {
    //   for (var i = 0; i < 3; i++) {
    //     diceroll()
    //   }
    //   document.getElementById("one").value = resultats;
    //   document.getElementById("two").value = resultats;
    //   document.getElementById("three").value = resultats;
    //   document.getElementById("four").value = '';
    //   document.getElementById("five").value = '';
    // }
    // else if (numberdice === 'four') {
    //   for (var i = 0; i < 4; i++) {
    //     diceroll()
    //   }
    //   document.getElementById("one").value = resultats;
    //   document.getElementById("two").value = resultats;
    //   document.getElementById("three").value = resultats;
    //   document.getElementById("four").value = resultats;
    //   document.getElementById("five").value = '';
    // }
    // else {
    //   for (var i = 0; i < 5; i++) {
    //     diceroll()
    //   }
    //   document.getElementById("one").value = resultats;
    //   document.getElementById("two").value = resultats;
    //   document.getElementById("three").value = resultats;
    //   document.getElementById("four").value = resultats;
    //   document.getElementById("five").value = resultats;
    // }

    // function inputcreatee() {
    //   var input = document.createElement("INPUT");
    //   input.setAttribute("type", "text");
    //   input.setAttribute("value", resultats);
    //   input.setAttribute(disabled);
    //   document.body.appendChild(input);
    // }
}
