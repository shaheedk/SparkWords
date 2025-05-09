let allQuotes = []; 

async function fetchQuotes() {
  try {
    const response = await fetch('quotes.json'); 
    allQuotes = await response.json();  
    getQuote(); // show first quote
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

function getQuote() {
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  const selected = allQuotes[randomIndex];

  document.getElementById("quote").innerText = `"${selected.quote}"`;
  document.getElementById("author").innerText = `— ${selected.author}`;
}

// call on page load
window.onload = fetchQuotes;
