# Welcome to the CP+B Geddy & Web Standards Boilerplate

## Requirements
[Geddy w/ Swig Support](https://github.com/mde/geddy/tarball/8eb04352f85bad26be2b8965e50197fc891c3f7c)
* Swig integration has not been released in a full Geddy release yet so we have to target a specific revision.

## Running

```
$ cd /path/to/app/source
$ npm install
// Run locally installed version of geddy using the 'local' config with 1 worker process
$ node_modules/.bin/geddy -e local -w 1
```

Navigate to http://localhost:4000

## Grunt
[/source/build/README.md](source/build/README.md)

## License
[GNU General Public License Version 3](http://www.gnu.org/licenses/gpl.html)