var Jnav = function() {
	this.isOpen = false;
}

Jnav.prototype.toggle = function() {
	var self = this;
	var bar = document.querySelectorAll('.jnav__logo i')[1];

	if(self.isOpen) {
		bar.classList.remove('fa-bars');
		bar.classList.add('fa-times');
	} else {
		bar.classList.add('fa-bars');
		bar.classList.remove('fa-times');
	}

	self.isOpen = !self.isOpen;
}

var jnavInstance = new Jnav();