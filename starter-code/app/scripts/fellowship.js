// console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function(land) {
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })

  body.appendChild(middleEarth)
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  var hobbitsList = document.createElement('ul')
  var shire = document.querySelector('article:first-child')

  hobbits.forEach(function(hobbit) {
      var hobbitLi = document.createElement('li')
      var hobbitClass = hobbitLi.setAttribute('class','hobbit')
      hobbitLi.textContent = hobbit
      hobbitsList.appendChild(hobbitLi)
  })
  shire.appendChild(hobbitsList)
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var thering = document.createElement('div')
  thering.id = 'the-ring'
  thering.setAttribute('class','magic-imbued-jewelry')
  thering.addEventListener('click',nazgulScreech)
  var frodo = document.querySelectorAll('li.hobbit')[0]
  frodo.appendChild(thering)

}

keepItSecretKeepItSafe()

// Part 4


function makeBuddies() {

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var aside = document.createElement('aside')
  var buddiesList = document.createElement('ul')
  aside.appendChild(buddiesList)

  buddies.forEach(function(buddy) {
      var buddiesLi = document.createElement('li')
      var buddiesClass = buddiesLi.setAttribute('class','buddies')
      buddiesLi.textContent = buddy
      buddiesList.appendChild(buddiesLi)
  })

  var rivendell = document.querySelectorAll('article')[1]
  rivendell.appendChild(aside)

}
makeBuddies()

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aside = document.createElement('aside')
  var buddyArr = document.querySelectorAll('li.buddies')
  var striderIndex = buddies.indexOf("Strider")
  buddyArr[striderIndex].textContent = "Aragon"

}

beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

var hobbitsUl = document.querySelectorAll('ul')[0]


var shire = document.querySelector('article:first-child')
var rivendell = document.querySelector('aside')

rivendell.appendChild(hobbitsUl)

// hobbitsArr.forEach(function(hobbit) {
//   var hobbitMove = hobbitsUl.removeChild(hobbit)
//   buddiesUl.appendChild(hobbitMove)
// })

}
leaveTheShire()


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var fellowship = document.createElement('div')
  var rivendell = document.querySelector('aside')
  rivendell.appendChild(fellowship)
  var hobbitsArr = document.querySelectorAll('li.hobbit')
  var buddiesArr = document.querySelectorAll('li.buddies')

  buddiesArr.forEach(function(buddy) {
    fellowship.appendChild(buddy)
  })
  alert("The buddies have joined your party")

  hobbitsArr.forEach(function(hobbit) {
    fellowship.appendChild(hobbit)
  })
  alert("The hobbits have joined your party")

}
forgeTheFellowShip()

// Part 8


function theBalrog() {

  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  // listitems.forEach(function(a, index) {
  //     if(a.textContent === 'Frodo Baggins') { console.log(index) } else { console.log('not found') } } )

  var list = document.querySelectorAll('li.buddies')
  var gandalf = list[0]
  gandalf.textContent = 'Gandalf the White'

  // var buddiesArr = list.forEach(function(a, index) {
  //   if (a.textContent.toLowerCase() === 'gandalf the grey') {
  //     return a.textContent.toLowerCase()
  //   }
  // })
  //
  // var gandalfIndex = buddiesArr.indexOf("gandalf")
  gandalf.style.background = 'white'
  gandalf.style.border = "thick solid grey"

}
theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  var list = document.querySelectorAll('li.buddies')
  var boromir = list[4]
  alert("the horn of gondor has been blown")
  boromir.setProperty('text-decoration', 'line-through')
  var rivendell = document.querySelector('aside')
  var rivendell = document.querySelector('fellowship')

  fellowship.removeChild(boromir)

}
hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor


}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
