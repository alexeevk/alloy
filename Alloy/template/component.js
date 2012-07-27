var Alloy = require("alloy"), 
	_ = Alloy._, 
	A$ = Alloy.A;

exports.create = function() {
	var L$ = {},
		root$;

	// TODO: Move this definition into a component object module to be included
	//       in the runtime alloy/components path
	var $ = {
		addEventListener: function(evt,callback) {
			if (!L$[evt]) {
				L$[evt] = [];
			}
			L$[evt].push(callback);
		},
		fireEvent: function(evt,object) {
			if (_.isArray(L$[evt])) {
				for (var i = 0, l = L$[evt].length; i < l; i++) {
					L$[evt][i](object);
				}
			}
		},
		removeEventListener: function(evt,callback) {
			if (_.isArray(L$[evt])) {
				Ti.API.info(L$[evt]);
				L$[evt] = _.without(L$[evt], callback);
				Ti.API.info(L$[evt]);
			}
		},
		setParent: function(parent) {
			if (root$) {
				parent.add(root$);
			} 
		},
		getRoot: function() {
			return root$;
		}
	};

<%= onCreate %>

	// generated from view markup
<%= viewCode %>

	// generated from controller
<%= controllerCode %>

	return $;
};