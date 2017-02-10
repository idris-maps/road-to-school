var fs = require('fs')

var text = require('./data/text.json')
var words = require('./data/words.json')

var title = 'The Road to School'
var css = 'style.css'
var script = 'script.js'
var htmlStart = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"/><title>' + title + '</title><link rel="stylesheet" href="' + css + '"></head><body><div id="container">'
var htmlEnd = '</div></body><script src="' + script + '"></script></html>'

var html = htmlStart + scrollable(title, text) + svg(words) + htmlEnd
fs.writeFileSync('public/index.html', html, 'utf-8')

function scrollable(title, text) {
	var html = '<div id="scrollable">'
		+ '<div id="scrolled">'
		+ '<h1>' + title + '</h1>'
	text.forEach(function(d) {
		html = html + '<h2 class="' + d.cl + '">' + d.text + '</h2>'
	})
	return html + '<div id="bottom-buffer"></div></div></div>'
}

function svg(words) {
	var xml = '<div id="graph"><svg viewBox="0 0 700 400">'
		+ '<g id="words" transform="translate(10, 50)">'
	var pos = []
	for(x=0;x<10;x++) {
		for(y=0;y<18;y++) { pos.push([x, y]) }
	}
	pos.forEach(function(p) {
		var px = p[0] * 70
		var py = p[1] * 20
		xml = xml + '<text x="' + px + '" y="'  + py + '" class="cl-' + getData() + '">' + getWord(words) + '</text>'
	})
	xml = xml + '</g>' + '</svg></div>'
	return xml
}

function getWord(words) {
	return words[Math.floor(Math.random() * words.length)]
}

function getData() {
	return Math.floor(Math.random() *100)
}
