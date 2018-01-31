(function($) {
	
	var UserInputView = Backbone.View.extend({
		
		el : '#UserInput',
		
		initialize : function() {
			this.helloListView = new HelloListView();
		},
		
		events : {
			'click button' : 'addToHelloCollection'
		},

		addToHelloCollection : function(e) {
			var hello = new Hello({
				name1 : this.$('input').val,
				name2 : this.$('input').val
			});
			this.helloListView.collection.add(hello);
			//alert(hello);
		}
	});

	var Hello = Backbone.Model.extend({
		initialize : function() {
			this.name1 = 'name1',
			this.name2 = 'name2'
		}
	});

	var HelloView = Backbone.View.extend({
		tagName : 'li',
		render : function() {
			$(this.el).html(this.model.get('name1') + this.model.get('name2'));
			//return this;
			alert(this.name1);
		}
	});
	
	var HelloList = Backbone.Collection.extend({
		model : Hello
	});

	var HelloListView = Backbone.View.extend({
		
		el : '#HelloList',
		
		initialize : function() {
			_.bindAll(this, 'render', 'appendToHelloUL');
			this.collection = new HelloList();
			this.collection.bind('add', this.appendToHelloUL);
		},
		
		render:function(){

			$.each(this.collection.models, function(i, helloModel){
				self.appendToHelloUL(helloModel);
			});
		},
		
		appendToHelloUL : function(helloModel) {
			var helloView = new HelloView({
				model : helloModel
			});
			$(this.el).append(helloView.render().el);
		}
	});

	new UserInputView();

})(jQuery);