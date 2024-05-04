document.getElementById("scraping-form").addEventListener("submit", handleScrapingFormSubmit);
document.getElementById("qa-form").addEventListener("submit", handleQAFormSubmit);

function handleScrapingFormSubmit(event) {
  event.preventDefault();
  const websiteUrl = document.getElementById("website-url").value;
  
  // Call the backend interface to initiate the scraping process with the websiteUrl parameter
  fetch('/scrape', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ websiteUrl })
  })
  .then(response => response.json())
  .then(data => {
    // Display the scraped data in the appropriate div element
    const scrapedDataDiv = document.getElementById("scraped-data");
    scrapedDataDiv.innerHTML = data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function handleQAFormSubmit(event) {
  event.preventDefault();
  const question = document.getElementById("question").value;
  
  // Call the backend interface to get the answer using the question parameter
  fetch('/qa', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question })
  })
  .then(response => response.json())
  .then(data => {
    // Display the answer in the appropriate div element
    const answerDiv = document.getElementById("answer");
    answerDiv.innerHTML = data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
