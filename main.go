package main

import (
	"github.com/codegangsta/cli"
	"os"
)

func main() {
	app := cli.NewApp()
	app.Name = "glitch"
	app.Version = Version
	app.Usage = "Just another glitch command line tool"
	app.Author = "Shimpei Makimoto"
	app.Email = "github@makimoto.org"
	app.Commands = Commands

	app.Run(os.Args)
}
