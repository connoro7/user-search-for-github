class UI {
  constructor() {
    // grab placeholder DOM element from index.html with id=profile
    this.profile = document.getElementById('profile');
  }

  // Print profile data
  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group>
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">User Since: ${user.created_at}</li>
                </ul>
            </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
    //console.log('Profile Loaded');
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any existing alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    // check to see if any existing alert
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    // When called, changes <div id="profile"> contents to contain nothing
    this.profile.innerHTML = '';
    //console.log('Profile Cleared');
  }
}
