export class App {
  configureRouter(config, router) {
    // config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'home',      nav: true, title: 'Home' },
      { route: 'projects',        name: 'projects',        moduleId: 'projects',        nav: true, title: 'Projects' }
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
