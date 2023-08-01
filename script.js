const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  switch(key)
  {
	  case "red":
		   return true;
		  break;
      case "green":
		   return true;
		  break;
	  case "white":
		  return true;
		  break;
		  default return false;  
  }
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
