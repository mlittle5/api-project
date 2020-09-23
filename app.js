

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo

function getDogImage(githubHandle) {
    fetch(`  https://api.github.com/users/${githubHandle}/repos`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
      console.log(githubHandle + " is the username you are searching for.");
  }

  function displayResults(responseJson) {
      console.log(responseJson);
      let endResult = [];
      let newObj = {};
      let url = "";
      let name = "";
      for (let i=0; i<responseJson.length; i++) {
              endResult.push(`<h3>${responseJson[i].name}</h3>`)
              endResult.push(`<a src="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`)
              
            }
console.log(url);
$('.js-results').html(endResult);
 $('.js-results').removeClass('hidden');
  }
  
//   function displayResults(responseJson) {
//     console.log(responseJson);
//     let url = [] ;
//     let repoName = $('input[type="text"]').val();
//     for (let i=0; i<responseJson.message.length; i++) {
//       url.push(`<p>${responseJson.url[i]}</p>`)
//     }
//     console.log(html);
    // $('.js-results').html(html)
    // $('.js-results').html(`<h2>Now showing you ${text} pictures of dogs.</h2>`);
     //replace the existing image with the new one
  //    $('.results-img').replaceWith(
  //      `<img src="${html}" class="results-img">`
  //    )
     //display the results section
//      $('.js-results').removeClass('hidden');
//   }
  function watchForm() {
    $('#js-form').submit(event => {
      event.preventDefault();
      let githubHandle = $('input[type="text"]').val()
      getDogImage(githubHandle);
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });