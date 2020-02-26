/*************************** MODEL ***************************/
class Model {
	constructor() {

	}

}

/*************************** VIEW ****************************/
class View {
	constructor() {

	}
	
}

/*************************** CONTROLLER **********************/
class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}
	
}

/*************************************************************/
// Instantiate the app with a Controller object,
// a Model object and a View object
const app = new Controller(new Model(), new View());
