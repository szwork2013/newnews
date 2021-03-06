/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',

    './sender'
], function ($, _, Backbone, JST, SenderView) {
    'use strict';

    var SenderListView = Backbone.View.extend({
        template: JST['app/scripts/templates/senders.ejs'],

        tagName: 'table',
        className: 'table',

        initialize: function () {
            this.collection.bind('reset', this.render, this);
            this.collection.bind('add', this.render, this);
            this.collection.bind('remove', this.render, this);
        },

        render: function () {
            var els = [];
            this.collection.each(function (item) {
                var itemView = new SenderView({ model: item });
                els.push(itemView.render().el);
            });
            this.$el.html(els);
            return this;
        }
    });

    return SenderListView;
});
