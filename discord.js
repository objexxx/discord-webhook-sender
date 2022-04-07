function sendMessage() {
    var getData = document.getElementById("input__text");
    var request = new XMLHttpRequest();
    request.open("POST", getData);
    request.setRequestHeader('Content-type', 'application/json');

    var myEmbed = {
        title: "Test Successful! 🥳",
        color: hexToDecimal("#2A67E8")
    }
      
    var params = {
        username: "Exhibition AIO",
        avatar_url: "https://i.ibb.co/7X9szNY/exhbition-webhookicon1.png",
        embeds: [ myEmbed ]
    }
      
      request.send(JSON.stringify(params));

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
    }
}