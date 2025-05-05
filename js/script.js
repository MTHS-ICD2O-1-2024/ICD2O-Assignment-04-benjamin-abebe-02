// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  let sizePrice = 0
  let size = ""
  let team = ""
  let jerseyPrice = 0
  let totalPrice = 0

  // Get the selected size by the user
  if (document.getElementById("size-s").checked) {
    sizePrice = 30
    size = "Small"
  } else if (document.getElementById("size-m").checked) {
    sizePrice = 40
    size = "Medium"
  } else if (document.getElementById("size-l").checked) {
    sizePrice = 50
    size = "Large"
  } else if (document.getElementById("size-xl").checked) {
    sizePrice = 70
    size = "Extra Large"
  }

  // Get selected team by the user
  if (document.getElementById("team-barca").checked) {
    team = "Barcelona"
    jerseyPrice = 20
  } else if (document.getElementById("team-madrid").checked) {
    team = "Real Madrid"
    jerseyPrice = 5
  } else if (document.getElementById("team-liverpool").checked) {
    team = "Liverpool"
    jerseyPrice = 30
  } else if (document.getElementById("team-arsenal").checked) {
    team = "Arsenal"
    jerseyPrice = 10
  }

  // Calculate the final result
  if (size && team) {
    totalPrice = "$" + (sizePrice + jerseyPrice).toFixed(2)
    document.getElementById("answer").innerHTML = 
      "<p>You ordered a " + size + " size " + team + " jersey for " + totalPrice + "</p>"
  } else {
    document.getElementById("answer").innerHTML = 
      "<p>Please make sure to select both a size and a team to calculate and order.</p>"
  }
}
