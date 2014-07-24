package main

import (
	"bytes"
	"fmt"
	"github.com/codegangsta/cli"
	"io/ioutil"
	"log"
	"math/rand"
	"os"
	"strconv"
	"time"
)

var Commands = []cli.Command{
	commandSed,
	commandRepeat,
}

var commandSed = cli.Command{
	Name:  "sed",
	Usage: "sed glitch a.k.a. replacement glitch",
	Description: `
`,
	Action: doSed,
	Flags: []cli.Flag{
		cli.StringFlag{"o, output", "output.jpg", "Output file"},
		cli.StringFlag{"f, from", "", "character or string to be replaced from (default: random)"},
		cli.StringFlag{"t, to", "", "character or string to be replaced with (default: random)"},
		cli.IntFlag{"e, header-size-rate", 5, "Percentage of header bytes (10: automatic)"},
	},
}

var commandRepeat = cli.Command{
	Name:  "repeat",
	Usage: "repeat glitch",
	Description: `
`,
	Action: doRepeat,
	Flags: []cli.Flag{
		cli.StringFlag{"o, output", "output.jpg", "Output file"},
		cli.IntFlag{"n, number", 3, "Number of byte repeats"},
		cli.IntFlag{"e, header-size-rate", 5, "Percentage of header bytes"},
		cli.IntFlag{"b, block-size", 200, "Size of block bytes"},
	},
}

func debug(v ...interface{}) {
	if os.Getenv("DEBUG") != "" {
		log.Println(v...)
	}
}

func assert(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func doSed(c *cli.Context) {
	fi, err := os.Open(c.Args()[0])
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}

	defer func() {
		if err := fi.Close(); err != nil {
			panic(err)
		}
	}()

	inputBytes, err := ioutil.ReadAll(fi)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}

	headerSizeRate := c.Int("e")
	fromStr := c.String("f")
	toStr := c.String("t")

	rand.Seed(time.Now().Unix())

	if len(fromStr) == 0 {
		fromStr = string(rand.Int31n(255))
	}

	if len(toStr) == 0 {
		toStr = string(rand.Int31n(255))
	}

	if headerSizeRate < 0 || 100 < headerSizeRate {
		fmt.Fprintln(os.Stderr, "Fatal: Invalid arguments: -e must be between 0 and 100, but "+strconv.Itoa(headerSizeRate))
		os.Exit(1)
	}

	headerSize := len(inputBytes) / 100 * headerSizeRate

	outputBytes := []byte{}
	outputBytes = append(outputBytes, inputBytes[0:headerSize]...)
	outputBytes = append(outputBytes, bytes.Replace(inputBytes[headerSize:], []byte(fromStr), []byte(toStr), -1)...)
	writeToFile(c.String("o"), outputBytes)
}

func doRepeat(c *cli.Context) {
	fi, err := os.Open(c.Args()[0])
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}

	defer func() {
		if err := fi.Close(); err != nil {
			panic(err)
		}
	}()

	inputBytes, err := ioutil.ReadAll(fi)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}

	number := c.Int("n")
	headerSizeRate := c.Int("e")
	blockSize := c.Int("b")

	if headerSizeRate < 0 || 100 < headerSizeRate {
		fmt.Fprintln(os.Stderr, "Fatal: Invalid arguments: -e must be between 0 and 100, but "+strconv.Itoa(headerSizeRate))
		os.Exit(1)
	}

	if blockSize <= 0 {
		fmt.Fprintln(os.Stderr, "Fatal: Invalid arguments: -b must larger than 0, but "+strconv.Itoa(blockSize))
		os.Exit(1)
	}

	headerSize := len(inputBytes) / 100 * headerSizeRate
	if c.Int("b") > 0 {
		blockSize = c.Int("b")
	}
	var targetBytes []byte
	if len(inputBytes) < headerSize+blockSize {
		targetBytes = inputBytes[headerSize:]
	} else {
		targetBytes = inputBytes[headerSize : headerSize+blockSize]
	}

	outputBytes := []byte{}
	outputBytes = append(outputBytes, inputBytes[0:headerSize]...)
	outputBytes = append(outputBytes, bytes.Repeat(targetBytes, number)...)
	outputBytes = append(outputBytes, inputBytes[headerSize+blockSize:]...)
	writeToFile(c.String("o"), outputBytes)
}

func writeToFile(filename string, outputBytes []byte) {
	fo, err := os.Create(filename)

	if err != nil {
		panic(err)
	}

	defer func() {
		if err := fo.Close(); err != nil {
			panic(err)
		}
	}()

	fo.Write(outputBytes)
}
