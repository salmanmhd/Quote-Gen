const apiUrl = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  console.log(data);
}

getQuote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "%0A" +
      "- " +
      author.innerHTML,
    "Tweet Windows",
    "width=600",
    "height=300"
  );
}
