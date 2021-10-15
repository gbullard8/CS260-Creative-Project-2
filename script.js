document.getElementById("buttonSubmit").addEventListener("click", function(event)
{
  event.preventDefault();
  const value1 = document.getElementById("artist").value;
  const value2 = document.getElementById("song").value;

  const url = "https://api.lyrics.ovh/v1/" + value1 + "/" + value2;
fetch(url)
  .then(function(response)
  {
    return response.json();
  })
  .then(function(json)
  {
    console.log(json);
    let results = "";
    results += '<h2>Lyrics for ' + value2 + " by " + value1 + "</h2>";
    results += '<pre>' + json.lyrics + '</pre>';

    document.getElementById("lyrics").innerHTML = results;

  });
});
