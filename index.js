function sendMessage() {

    let grabData = document.getElementById("input");
    
    var request = new XMLHttpRequest();
    request.open("POST", grabData.value);
    // attempt to add url to request open
    request.setRequestHeader('Content-type', 'application/json');
    
    var myEmbed = {
      title: "type what you want your webhook to say",
      color: hexToDecimal("#3ad45")
    }
    
    var params = {
      username: "bot name here",
      avatar_url: "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg",
      embeds: [ myEmbed ]
    }
    
    request.send(JSON.stringify(params));
    
    // function that converts a color HEX to a valid Discord color
    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }
}