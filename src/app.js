export class App {
  configureRouter(config, router) {
    config.title = 'Russell Walker';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'home',      nav: true, title: 'Home' },
      { route: 'projects',        name: 'projects',        moduleId: 'projects',        nav: true, title: 'Projects' },
      { route: 'resume', name: 'resume', moduleId: 'resume', nav: true, title: 'Resume'}
    ]);

    this.router = router;
  }
}
