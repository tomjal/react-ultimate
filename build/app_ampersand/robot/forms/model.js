"use strict";

var FormView = require("ampersand-form-view"), _InputView = require("ampersand-input-view");

var templater = require("../../templater");

var InputView = _InputView.extend({
  template: templater.lazyRender("robot/templates/formInput.html")
});

module.exports = FormView.extend({
  fields: function () {
    return [new InputView({
      label: "First Name",
      name: "firstName",
      value: this.model && this.model.firstName,
      placeholder: "First Name",
      parent: this
    }), new InputView({
      label: "Last Name",
      name: "lastName",
      value: this.model && this.model.lastName,
      placeholder: "Last Name",
      parent: this
    }), new InputView({
      label: "Coolness Factor",
      name: "coolnessFactor",
      value: this.model && this.model.coolnessFactor,
      type: "number",
      placeholder: "8",
      parent: this,
      tests: [function (val) {
        if (val < 0 || val > 11) {
          return "Must be between 0 and 11";
        }
      }, function (val) {
        if (!/^[0-9]+$/.test(val)) {
          return "Must be a number.";
        }
      }]
    })];
  }
});