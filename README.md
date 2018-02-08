## epidocker
Docker CLI wrapper for Epitech<br><br>

Current version __1.4.0__

## Install

* Install the latest version of NodeJs (https://nodejs.org/en/download/package-manager/)<br>
* Check that Node is installed by running `node --version`, you should have something like 8.* or 9.*.<br>
  - In case you don't have at least Node 8, run `sudo npm install -g n` and `n latest`. This should do the update.<br> 
* Then you'll be able to `sudo npm install -g epidocker`<br>

## Update

To update your epidocker, just run `epidocker update` (since 1.1.3), it will check for updates and do the update if necessary.

## Usage

See `epidocker -h`

__Basic__

The main command is `epidocker run`.<br>
It brings you to a Docker container and link the content of your current directory with the container. Every changes you will make will be shared bewteen your machine and the Docker container.<br>

Containers are automatically removed, don't worry about ghost containers.<br>
If you do not want to remove your container at exit, run `epidocker run --save`. You can get the list of all the containers you created with `epidocker list`.

You can delete a container with `epidocker delete [container name]` and you can go back in a created container by typing `epidocker run [container name]`.

__Graphical project (BETA)__

If you want to run a graphical project, just set the `--graphical` flag to true: `epidocker run --graphical`. Your project should run as expected.<br>
This feature is a bit tricky and can not works on your machine. If you encounter any issues, please report it in the Issues section with as much informations as possible (like operating system and graphical drivers informations).<br>

OS | Graphical driver type | Supported
--- | --- | ---
Ubuntu | Intel | Yes
macOS | | Not yet

_You can help me to fill this table by telling me if it worked for you or not_

__Hot reloading__

Do not run your compile command each time you did a change, epidocker will do it for you. You juste have to configure it a bit.<br>
First, you need to add a `.epidocker` file at the root of your project, you will write your configuration in this file as JSON.<br>
Here a basic example:

 ```json
 {
	"commands" : {
		"refresh" : "make && ./my_binary arg1 arg2 ...",
		"test" : "make test"
	},
	"hotreload" : {
		"active" : true,
		"command" : "refresh",
		"watch" : ["src", "include", "Makefile"]
	}
}
```

You can define some commands in the `commands` object.<br>
To activate the hot reloading, you have to specify it by setting `active: true` to the `hotreload` object<br>
Then you have to specify what command you want to run<br>
and what files or directory to watch.<br>
Once you have done this, you can run `epidocker run` and the command you have written will be executed when the files you specified will change. You can edit your configuration while the hot reloading is running.
