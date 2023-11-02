function scuberGreetingForFeet(freeRide){
  // Write your code here!
  if (freeRide <= 400) {
    return 'This one is on me!'
  } else if (freeRide <= 2000) {
    return 'That will be twenty bucks.'
  } else if (freeRide > 2500) {
    return 'No can do.'
  } else if (freeRide > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(destinationCity){
  // Write your code here!
  const passengerCity = (destinationCity !== "NYC") ? "No go." : "Ok, sounds good.";
    return passengerCity;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    case "anything else":
      return "Bye.";
    default:
      return "Bye.";
  }
}