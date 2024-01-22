const button = document.querySelector(".quote-button");
const displayQuote = document.querySelector(".quote-container");
const tweetButton = document.querySelector(".tweet-button");

button.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      const quote = data.message;
      displayQuote.innerHTML = quote;
      tweetButton.setAttribute(
        "href",
        `https://twitter.com/intent/tweet?text=${quote}`
      );
    });
}

//   const tweetInput = "https://twitter.com/intent/tweet?text="
//   window.open(`${tweetInput}${quote}`);
