$(document).ready(function() {
  const userAge = parseInt(prompt("Please enter your age:"));

  if (userAge >=18) {
    $("#votingAge").show();
  } else {
    $("#underVotingAge").show();
  }
  
});