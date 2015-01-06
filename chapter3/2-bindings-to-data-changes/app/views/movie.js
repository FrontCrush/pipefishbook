var _ = require('underscore');
var $ = require('jquery-untouched');
var Backbone = require('backbone');

var MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: '<h1><%= title %><hr></h1>',

  initialize: function() {
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
  },
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  }
});
module.exports = MovieView;
