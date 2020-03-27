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
        console.log('Profile Not Found');
        ui.showAlert('User Not Found', 'alert alert-danger');
        ui.clearProfile();
      } else {
        // Show profile
        //console.log('Loading Profile...');
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile elements from DOM
    ui.clearProfile();
  }
});
