class Github {
  constructor() {
    this.client_id = '4995874354f69eb5551e';
    this.client_secret = '2adb6d3f90bed4adbbf943b5e52ce70965230d03';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // Create User Method
  async getUser(user) {
    // Using async await method to fetch data from api.github.com/users/USERNAME
    // Adding "?" adds a *query string*
    // Adding additional *query string* with use of "&"
    // Using template literals to pull data from our Github constructor into this response request URL
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // Get profile data by storing it in profileData variable that pulls the json data from our profile response request
    const profile = await profileResponse.json();

    // We *could* return just profile here, but we know we're also going to want to be returning profile repo data as well, so instead let's return an object that will contain both
    // return{
    //   profile: profile
    // }

    // In ES6, if you're returning an object called "NAME" and it contains a single variable called "NAME" as well (so, they have the same name), you don't need to do return{NAME: NAME}, you can just do return{NAME}
    // So the above becomes:
    return {
      profile
    };
  }
}
