export class App {
  configureRouter(config, router) {
    config.title = 'Russell Walker';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'home',      nav: true, title: 'Home' },
      { route: 'projects',        name: 'projects',        moduleId: 'projects',        nav: true, title: 'Projects' },
      { route: 'experience', name: 'experience', moduleId: 'experience', nav: true, title: 'Experience'},
      { route: 'contact', name: 'contact', moduleId: 'contact', nav: true, title: 'Contact'}
    ]);

    this.router = router;
  }
}
