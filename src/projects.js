import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Projects {
  heading = 'Projects';
  user = {};
  repos = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate() {
    this.http.fetch('users/russeru/repos')
      .then(response => response.json())
      .then(repos => this.repos = repos)
    return this.http.fetch('users/russeru')
      .then(response => response.json())
      .then(user => this.user = user)
      .then(response => console.log(response))
  }
}
