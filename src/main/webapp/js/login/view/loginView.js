Ext.define('loginView', {
	extend: 'Ext.container.Viewport',
	id: 'app1-viewport1',

	initComponent: function() {
		me = this;
		alert("in view1");
		Ext.applyIf(me, {
			items: [{
				xtype: 'combobox',
				fieldLabel: 'c1',
				renderTo: Ext.getBody()
			}]
		});
		this.callParent(arguments);
	}
})