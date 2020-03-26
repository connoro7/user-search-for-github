// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    //console.log(userText);
    github.getUser(userText).then(data => {
      // console.log(data);
      if (data.profile.message === 'Not Found') {
        // Show alert for User Not Found
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile elements from DOM
  }
});
