/**
 * Spacer
 * adds an empty row of a defined height
 * @usage: {{spacer 30}} -> will create a space of 3Opx of height
 * @param: {number} -> number of pixels -> if not specified 15 is used
 */

module.exports.register = function (Handlebars, options) {
	Handlebars.registerHelper('spacer', function (context) {
		var height = typeof context != 'undefined' ? context + 'px' : '15px',
			tmpl = '<div class="baseline-spacer" style="' +
				'height: ' + height + ';' +
				'line-height: ' + height + ';' +
				'font-size: ' + height + ';' +
				'">&nbsp;</div>';

		return new Handlebars.SafeString(tmpl);
	});
};