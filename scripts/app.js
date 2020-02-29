import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';

// Instantiate the app with a Controller object,
// a Model object and a View object
const app = new Controller(new Model(), new View());
export default app;
