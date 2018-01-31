//jQuery on load
$(function(){
	//this commented code before implementing the class concept
	/*var doc1 = {
		title: ko.observable("Hello World"),
		body: ko.observable("welcome to the knockout application")
	};
	var doc2 = {
		title: ko.observable("good bye"),
		body: ko.observable("welcome to the knockout application")
	};
	var viewModel = {
			documents: ko.observableArray(),
			selectedItem: ko.observable(),
			editItem: function(doc) {
				viewModel.selectedItem(doc);
			}
	};
	viewModel.documents.push(doc1);
	viewModel.documents.push(doc2);
	ko.applyBindings(viewModel);*/
	var viewModel = new knockoutDocs();
	viewModel.addItem(new Document("hello", "smorampudi"));
	viewModel.addItem(new Document("good Bye", "World"));

	ko.applyBindings(viewModel);
});