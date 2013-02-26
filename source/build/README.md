Grunt Build Scripts
===================

This build script uses Grunt (<https://github.com/cowboy/grunt>), a task-based command line build tool for JavaScript projects.

####  What you need beforehand:

You'll need the following libraries. Project verified with the versions in parentheses.

1. Node (0.8.1)
2. NPM (1.1.35)
3. Compass (0.12.2)
4. Sass (3.1.20)

Download and install node by grabbing an installer from the project site: <http://nodejs.org>. NPM comes along with it.

Install notes for Compass are here: <http://compass-style.org/install/>

Install notes for Sass are here: <http://sass-lang.com/download.html>

####  Installing Grunt:

Simple: "**npm -g install grunt**"

#### Installing Grunt Dependencies:

Each grunt project has a set of dependencies specified in `package.json`.

Install the grunt dependencies by running the following in the build directory:

**npm install**

Then build the project with a simple "**grunt**" in the grunt directory

#### JS Unit Testing

We use Grunt's built-in QUnit task for this, which utilizes a headless webkit instance (PhantomJS). You'll need to have PhantomJS installed - the easiest way to do this is with Homebrew:

**brew install phantomjs**

More info [here](http://code.google.com/p/phantomjs/wiki/Installation).

Once you have PhantomJS installed, just run:

**grunt jstest**

This command will also build a detailed report at 'test/test.html'

#### Building JS Documentation

Just run:

**grunt docs**

#### Beautify JS

Just run:

**grunt beautify**