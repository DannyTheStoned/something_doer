var gameData = {
  something: 0,
  somethingsPerClick: 1,
  somethingsPerClickCost: 10
}

function doSomething() {
  gameData.something += gameData.somethingsPerClick
  document.getElementById("somethingDone").innerHTML = gameData.something + " Somethings Done"
}

function buySomethingsperClick() {
  if (gameData.something >= gameData.somethingsPerClickCost) {
    gameData.something -= gameData.somethingsPerClickCost
    gameData.somethingsPerClick += 1
    gameData.somethingsPerClickCost *= 2
    document.getElementById("somethingDone").innerHTML = gameData.something + " Somethings Done"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Something (Currently Level "+gameData.somethingsPerClick +") Cost: " + gameData.somethingsPerClickCost + " Gold"
  }
}

var mainGameLoop = window.setInterval(function() {
  doSomething()
}, 1000)
