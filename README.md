## epidocker
Docker CLI wrapper for Epitech

## Install

* Install the latest version of NodeJs (https://nodejs.org/en/download/package-manager/)<br>
* Check that Node is installed by running `node --version`, you should have something like 8.* or 9.*.<br>
  - In case you don't have at least Node 8, run `sudo npm install -g n` and `n latest`. This should do the update.<br> 
* Then you'll be able to `sudo npm install -g epidocker`<br>

## Update

To update your epidocker, just run `sudo npm update -g epidocker`

## Usage

See `epidocker -h`

The main command is `epidocker run`, it brings you to a Docker container with the content of you current directory in _/home/student/local_repository_.<br><br>

For example, running `epidocker run` in _/home/epitech/my_project_  will create a container with your project in _/home/student/my_project_.<br><br>

Oh, and the directory is _shared_, it means that every changes you'll make will be shared between your container and your local machine.<br>
You don't have to rerun anything, just do what you have to do !<br><br>

#### And you just wrote two words.<br><br>

You can get the list of all the containers you created with `epidocker list`.<br><br>

You can delete a container with `epidocker delete [container name]` and you can go back in a created container by typing `epidocker run [container name]`.<br><br>

## Known issues

_Nothing here for now, report me your issues !_
