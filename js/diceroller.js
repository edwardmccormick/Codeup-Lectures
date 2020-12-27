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

var skills = [2, "arcana", "history", "investigation", "medicine", "nature", "perception", "sleightofhand"]

var barbarianskills = [2, "animalhandling", "athletics", "intimidation", "nature", "perception", "survival"]

var bardskills = [3, "acrobatics", "athletics", "arcana", "deception", "insight", "intimidation", "investigation", "nature", "perception", "performance", "persuasion", "religion", "sleightofhand", "stealth"]

var clericskills = [2, "history", "insight", "medicine", "persuasion", "religion"]

var druidskills = [2, "animalhandling", "arcana", "insight", "medicine", "nature", "perception", "religion", "survival"]

var fighterskills = [2, "acrobatics", "animalhandling", "athletics", "history", "insight", "intimidation", "perception", "survival"]

var monkskills = [2, "acrobatics", "athletics", "history", "insight", "religion", "stealth"]

var paladinskills = [2, "athletics", "insight", "intimidation", "medicine", "persuasion", "religion"]

var rangerskills = [3, "animalhandling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"]

var rogueskills = [4, "acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleightofhand", "stealth"]

var sorcererskills = [2, "arcana", "deception", "insight", "intimidation", "persuasion", "religion"]

var warlockskills = [2, "arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"]

var wizardskills = [2, "arcana", "history", "insight", "investigation", "medicine", "religion"]

function parseSkills(x) {
    // if (x === "barbarian") {var y = barbarianskills};
    // else if (x==="bard") {var y = bardskills};
    //
    // for (var i = 1; i<y.length; i++) {
    //     document.getElementById("y[i]")
    // }

}

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
characterClass.addEventListener('change', parseSkills)
characterStrength.addEventListener('change', updateCharacter);
characterDexterity.addEventListener('change', updateCharacter);
characterConstitution.addEventListener('change', updateCharacter);
characterIntelligence.addEventListener('change', updateCharacter);
characterWisdom.addEventListener('change', updateCharacter);
characterCharisma.addEventListener('change', updateCharacter);