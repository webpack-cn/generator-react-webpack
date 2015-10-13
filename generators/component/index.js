'use strict';
let generator = require('yeoman-generator');
let utils = require('../../utils/all');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {

    let settings = utils.yeoman.getAllSettingsFromComponentName(this.name, this.config.get('style'));

    // Create the style template
    this.fs.copyTpl(
      this.templatePath(`styles/Component${settings.style.suffix}`),
      this.destinationPath(settings.style.path + settings.style.fileName),
      settings
    );

    // Create the component
    this.fs.copyTpl(
      this.templatePath('components/Base.js'),
      this.destinationPath(settings.component.path + settings.component.fileName),
      settings
    );

    // Create the unit test
    this.fs.copyTpl(
      this.templatePath('tests/Base.js'),
      this.destinationPath(settings.test.path + settings.test.fileName),
      settings
    );
  }
});
