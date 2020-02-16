Module.register("MMM-files",{
    defaults: {},
	loaded: function(callback) {
		this.finishLoading();
		Log.log(this.name + ' is loaded!');
		callback();
	},
	start: function() {
		Log.log(this.name + ' is started!');
	}


})