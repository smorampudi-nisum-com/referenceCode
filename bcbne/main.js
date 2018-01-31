/*(function($){

  // Object declarations goes here

  $(document).ready(function () {

   // Start application code goes here

   // Create AddTwoNumbersModel instance and set
    // model attributes.
    var addTwoNumbersModel = new AddTwoNumbersModel({
      number1: 2,
      number2: 3
    });

    // Create PreviewAddNumbersView instance.
    var previewAddNumbersView = new PreviewAddNumbersView({

      // Pass our model.
      model: addTwoNumbersModel,

      // Set element where to render HTML.
      el: 'body'
    });

    // Render view manually.
    previewAddNumbersView.render();

  });*/

  var AddTwoNumbersModel = Backbone.Model.extend({

    // Set default values.
    defaults: {
      number1: 0,
      number2: 0
    },

    // Calculate amount.
    calculateAmount: function() {
      return this.get('number1') + this.get('number2');
    }
  });
  
  var PreviewAddNumbersView = Backbone.View.extend({

    // Define template using templating engine from
    // Underscore.js.
    template: _.template('\
      First Number: <%= number1 %>.\
      Second Number: <%= number2 %>.\
      Sum: <%= sum %>.\
    '),

    // Render view.
    render: function () {

      // Generate HTML by rendering the template.
      var html = this.template({

        // Pass model properties to the template.
        number1: this.model.get('number1'),
        number2: this.model.get('number2'),

        // Calculate amount and pass it to the template.
        sum: this.model.calculateAmount()
      });

      // Set html for the view element using jQuery.
      $(this.el).html(html);
    }
  });

//})(jQuery);