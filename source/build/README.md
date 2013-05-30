#Grunt Build Scripts

This build script uses Grunt (<https://github.com/cowboy/grunt>), a task-based command line build tool for JavaScript projects.

##  What you need beforehand:

You'll need the following libraries. Project verified with the versions in parentheses.

1. Node (0.8.22)
2. NPM (1.2.14)

Download and install node by grabbing an installer from the project site: <http://nodejs.org>. NPM comes along with it. You can also install Node via Homebrew:

```brew install node```

## Dependencies:

Install the grunt dependencies by running the following from the project root directory (the directory that holds *package.json* and *gruntfile.js*):

```npm install```

## Stylus

[Stylus documentation](http://learnboost.github.io/stylus/)

### NIB
Nib is a library of mixins written in Stylus, by the same author. It provides a number of helpful mixins including global-reset(), linear-gradient(), clearfix() and more, and is already defined as an import within the stylus grunt build config. [Read more about it](https://github.com/visionmedia/nib).


### Compiling

Grunt has already been configured to compile stylus files. To compile **non-minified** CSS simply run:

```./node_modules/grunt-cli/bin/grunt css```

To compile **production ready**, minified CSS, run

```./node_modules/grunt-cli/bin/grunt cssmin```

### Stylus Organization

The stylus grunt configuration allows one to easily segment their CSS into separate logically organized files. For example, saving the mobile specific media queries and related styles in *mobile.styl* will keep code clean and nicely organized. This also has the advantage of helping teams to avoid merge conflicts.

To use this, notice the folder structure in *www/stylesheets/stylus*:

    app/
    |- main.styl
    |- mobile.styl
    print/
    |- print.styl

The stylus grunt configuration will automatically discover all folders and files. In the structure above, *main.styl* and *mobile.styl* will be compiled and concatenated into *www/stylesheets/generated/app.css* and *print.styl* will be compiled into *www/stylesheets/generated/print.css*

Therefore, if you want a separate .css file for IE, just create an *ie* folder containing at least one *.styl* file.

To segment sections of the primary *app.css* file in a team setting, simply add more files to *www/stylesheets/stylus/app* as needed.

### Stylus Doesn't Sprite

Sprites are a pain, especially when trying to manage them manually. Compass did a nice job of auto creation but then compiling took forever!

Instead of spriting, Stylus with the addition of the "nib" extension, does something even better: **data inlining**. This means that the image data is saved as a [data URI](http://en.wikipedia.org/wiki/Data_URI_scheme) *directly in the CSS*! The advantages are that the CSS can be minified and gzipped, and the absence of a sprite means the absence of an additional HTTP request. All the image data is already there!

To use this feature, simply save each background image as a separate file and apply as normal using a url() directive, using a root-relative path: ```/images/texture.png```. In a production build, Stlyus will automatically convert the path to a data URI.

This is supported in all modern browsers, even down to IE8. In the case that you need to support <IE8 look into [grunt-oversprite](https://npmjs.org/package/grunt-oversprite)

### Grid

Grid is a small collection of mixins designed to help support grid system based layouts. It will automatically set the width and margins of an element based on the number of columns you want the element to span. It can also shift an element horizontally by a specified number of columns.

First include the grid.styl using the stylus @import directive (different than the CSS @import, [see documentation](http://learnboost.github.io/stylus/docs/import.html)):
``` @import "../grid.styl" ```

Then set the following variables:

```
$gridWidth = 940px // the overall width of the layout.
$gridColumns = 12 // the number of columns in the grid.
$gridGutter = 20px // the width between columns.

```
#### gridContainer([$center=true])

**$center** *optional default true* whether to center the element with ```margin: 0 auto;```

Used for elements that should conform to the overall width of the layout.

```
// assuming the above mentioned variables are set
body
.contain
	gridContainer()

// compiles to

body, .contain {
	width: 940px;
	margin: 0 auto;
}
```

#### gridSpan($columns, [$setMargin=true])

**$columns** the number of columns to span  
**$setMargin** *optional default true* whether to set the right margin (which would equal $gutterWidth)

Sets the width of an element to the number of columns spanned. It automatically determines column width and accounts for the appropriate number of gutters for the number of columns specified.

```
.call-to-action
	gridSpan(3)

#sidebar
	gridSpan(4, false) // do without the right margin

// compiles to

.call-to-action {
  float: left;
  width: 220px;
  margin-right: 20px;
}
#sidebar {
  float: left;
  width: 300px;
}
```

*gridSpan* can detect an elements box-model properties and use these to adjust the width accordingly, but only if they are set explicitly and not via shorthand properties.

```
blockquote
	padding 8px       // for top and bottom
	padding-left 8px
	padding-right 8px // must explicitly state padding-left and padding-right for gridSpan to detect these values
	border solid 1px #000 // same with border
	border-left-width 1px
	border-right-width 1px
	gridSpan(4)      // will now adjust the width accounting for padding and border

// compiles to

blockquote {
  padding: 8px;
  padding-left: 8px;
  padding-right: 8px;
  border: solid 1px #000;
  border-left-width: 1px;
  border-right-width: 1px;
  float: left;
  width: 282px; // notice the final calculated width accounts for padding and border
  margin-right: 20px;
}
```

#### gridShift($columns, [$direction=right, $method=margin])

**$columns** the number of columns to shift
**$direction** *optional default right* sets the direction of shifting  
**$method** *optional default margin* determines whether to use margin or positioning

Shifts the element to the specified direction a distance equal to the width of the specified number of columns.

```
#logo
	gridSpan(2, false); // dont set margin
	gridShift(1, left, relative)

// compiles to

#logo {
  float: left;
  width: 140px;
  left: -60px;
  position: relative;
}

```


## JS Unit Testing

We use Grunt's built-in QUnit task for this, which utilizes a headless webkit instance (PhantomJS). You'll need to have PhantomJS installed - the easiest way to do this is with Homebrew:

```brew install phantomjs```

More info [here](http://code.google.com/p/phantomjs/wiki/Installation).

Once you have PhantomJS installed, just run:

```./node_modules/grunt-cli/bin/grunt jstest```

This command will also build a detailed report at 'test/test.html'

#### Building JS Documentation

Just run:

```./node_modules/grunt-cli/bin/grunt docs```

#### Beautify JS

Just run:

```./node_modules/grunt-cli/bin/grunt beautify```