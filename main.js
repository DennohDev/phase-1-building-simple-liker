document.addEventListener('DOMContentLoaded', () => {
  // Defining text characters for the empty and full hearts for you to use later.
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'

  // Your JavaScript code goes here!

  const likeButtons = document.querySelectorAll('.like-glyph')

  // Function to display error modal
  function displayErrorModal(errorMessage) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = errorMessage;
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 3000);
  }
  // addEventListener for each like button
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => mimicServerCall().then(() => {
      if (likeButton.textContent === EMPTY_HEART) {
        likeButton.textContent = FULL_HEART;
        likeButton.classList.add('activated-heart');
      } else {
        likeButton.textContent = EMPTY_HEART;
        likeButton.classList.remove('activated-heart');
      }
    })
      .catch((error) => {
        displayErrorModal(error);
      })
    )
  });



  //------------------------------------------------------------------------------
  // Don't change the code below: this function mocks the server response
  //------------------------------------------------------------------------------

  function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }

})