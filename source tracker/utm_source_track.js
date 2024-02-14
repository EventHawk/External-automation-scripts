    function addQueryParameters() {
  // Get the current URL
  var currentUrl = window.location.href;
  
  // Check if the URL already has a query string
  var hasQueryParams = currentUrl.indexOf('?') !== -1;

  // If there are existing query parameters in the URL, add them to local storage
  if (hasQueryParams) {
    var queryParams = currentUrl.split('?')[1];
    localStorage.setItem('queryParams', queryParams);
  } else {
    // If there are no query parameters in the URL, retrieve them from local storage
    var storedParams = localStorage.getItem('queryParams');
    if (storedParams) {
      // Construct the new URL with the stored query parameters
      var newUrl = currentUrl + '?' + storedParams;
      
      // Replace the current URL in the browser history with the new URL
      window.history.replaceState({}, document.title, newUrl);
    }
  }
}
// calling function
console.log("calling addQueryParameters function");
addQueryParameters();