"use strict"

function roll(x) {
    return Math.floor(Math.random() * (x))+1;
}

function rolls(x,y,z) {
    var output = []
    for (var i = 0; i < x; i++) {
        output.push(roll(y));
    }
    for (var i=0; i<z; i++) {
        output.splice(output.indexOf(Math.min(...output)),1)
    }
    return output

}
// so to roll 4d6 drop lowest rolls(4,6,1) will generate an array, and then results.reduce(function(total,num) {return total += num},0) will return the total of the three rolls
function calculateProf() {
   if (parseInt(document.getElementById('pcLevel').value) > 16) {profBonus = 6}
    else if (parseInt(document.getElementById('pcLevel').value) > 12) {profBonus = 5}
   else if (parseInt(document.getElementById('pcLevel').value) > 8) {profBonus = 4}
   else if (parseInt(document.getElementById('pcLevel').value) > 4) {profBonus = 3}
   else if (parseInt(document.getElementById('pcLevel').value) <= 4) {profBonus = 2}
    proficiencyBonus.innerHTML = "+ " + profBonus;
}

function updateCharacter() {
    character.strength = parseInt(characterStrength.value);
    character.dexterity = parseInt(characterDexterity.value);
    character.constitution = parseInt(characterConstitution.value);
    character.intelligence = parseInt(characterIntelligence.value);
    character.wisdom = parseInt(characterWisdom.value);
    character.charisma = parseInt(characterCharisma.value);
    characterCreation();
}

function characterCreation() {
    var characterCost = 0;
    for (var i = 0; i < Object.values(character).length; i++) {
        if (Object.values(character)[i] == 9) {characterCost++}
        else if (Object.values(character)[i] == 10) {characterCost += 2}
        else if (Object.values(character)[i] == 11) {characterCost += 3}
        else if (Object.values(character)[i] == 12) {characterCost += 4}
        else if (Object.values(character)[i] == 13) {characterCost += 5}
        else if (Object.values(character)[i] == 14) {characterCost += 7}
        else if (Object.values(character)[i] == 15) {characterCost += 9}
            }
    pointTotals.innerHTML = characterCost + "/" + characterCostGoal;
}

var profBonus = 2;

var character = {};

var characterCostGoal = 27;

var proficiencyBonus = document.getElementById('profBonus');
var characterLevel = document.getElementById('pcLevel');
var characterClass = document.getElementById('pcClass');
var characterStrength = document.getElementById('str');
var characterDexterity = document.getElementById('dex');
var characterConstitution = document.getElementById('con');
var characterIntelligence = document.getElementById('int');
var characterWisdom = document.getElementById('wis');
var characterCharisma = document.getElementById('cha');
var pointTotals = document.getElementById('creation')

characterLevel.addEventListener('change', calculateProf);
characterStrength.addEventListener('change', updateCharacter);
characterDexterity.addEventListener('change', updateCharacter);
characterConstitution.addEventListener('change', updateCharacter);
characterIntelligence.addEventListener('change', updateCharacter);
characterWisdom.addEventListener('change', updateCharacter);
characterCharisma.addEventListener('change', updateCharacter);