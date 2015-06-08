glitch
====

Just another glitch command line tool

## Synopsis

```
$ glitch sed -f a -t b -e 15 -o glitched.jpg /path/to/yourfile.jpg
$ glitch repeat -e 15 -b 200 -n 10 -o glitched.jpg /path/to/yourfile.jpg
```

## Installation

```
$ go get github.com/makimoto/glitch
```

## Usage

```
NAME:
   glitch - Just another glitch command line tool

USAGE:
   glitch [global options] command [command options] [arguments...]

VERSION:
   0.1.0

COMMANDS:
   sed		sed glitch a.k.a. replacement glitch
   repeat	repeat glitch
   help, h	Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --version, -v	print the version
   --help, -h		show help
```

## Samples

### sed glitch

```
glitch sed -f a -t b -o sed.jpg original.jpg
```

![](./samples/sed.jpg)

### repeat glitch

```
glitch repeat -n 5 -b 400 original.jpg
```

![](./samples/repeat.jpg)

### the original image

![](./samples/original.jpg)

## Author

[Shimpei Makimoto](http://shimpei.makimoto.org)

## License

[MIT](http://makimoto.mit-license.org/)
