import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import layout from '../templates/components/paper-data-table-row';

export default Component.extend({
	layout,
	tagName: 'tr',
	classNames: ['md-row'],
  classNameBindings: ['disabled:md-disabled'],
	showEdit: false,
	attributeBindings: ['style', 'disabled'],
	style: computed('edit', 'onClick', function() {
		if (this.get('onClick') || this.get('edit')) {
			return htmlSafe('cursor: pointer;');
		}
		return htmlSafe('');
	}),

	click() {
		if (this.get('onClick')) { this.get('onClick')() }
		if (this.get('edit')) {
			this.set('showEdit',true);
		}
	},

	actions: {
		close() {
			if (this.get('onClose')) { this.get('onClose')(this) }
		},
		toggleEdit() {
			this.toggleProperty('showEdit');
		}
	}
});
