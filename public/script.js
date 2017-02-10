var words = new Words()

var s0 = document.getElementById('scrollable')
var s1 = document.getElementById('scrolled')
var s1h = s1.offsetHeight
window.onresize = function() { s1h = s1.offsetHeight }

s0.addEventListener('scroll', function(){ 
	var st = s0.scrollTop
	words.show(st/s1h*100)
}, false)

function Words() {
	var o = this
	o.data = []
	getData(o)
	o.show = function(x) {
		o.data.forEach(function(d) {
			if(d.n > x) { d.el.setAttribute('opacity', 1) }
			else { d.el.setAttribute('opacity', 0) }
		})
	}
}

function getData(o) {
	var all = document.getElementById('words').children
	for(i=0;i<all.length;i++) {
		o.data.push({n: +all[i].getAttribute('class').split('-')[1], el: all[i]})
	}
}

