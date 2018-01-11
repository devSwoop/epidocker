var args = require('args');
var docker = require('./docker');
var project = require('./project');
var opts = require('./options');

manage = {
	flags : {},
	init : function() {
		args
			.command('run'		, 'Access a container after create it if needed'	, manage.execArg	, ['r'])
			.command('list'		, 'Display containers list'							, manage.execArg	, ['l'])
			.command('delete'	, 'Delete a container'								, manage.execArg	, ['d'])
			.option('image'		, 'Docker image to take'							, opts.image)
			.option('remote'	, 'Remote directory to put the project in'			, opts.remote)
		manage.flags = args.parse(process.argv);
	},
	execArg : function(name, sub, options) {
		opts.image = options.image;
		opts.remote = options.remote;
		manage[name[0]](sub, options);
	},
	run : function(sub, options) {
		let containerName = sub[0];

		if (!containerName)
			project.init();
		else
			project.name = containerName;
		docker.check((error) => {
			if (!error)
				docker.run();
		});
	},
	list : function(sub, options) {
		docker.list();
	},
	delete : function(sub, options) {
		docker.delete(sub);
	},
	start : function(sub, options) {
		docker.start(sub);
	}
}

module.exports = manage;