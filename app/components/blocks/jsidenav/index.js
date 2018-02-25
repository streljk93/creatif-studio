var Jsidenav = function() {
	this.isOpen = false;

	this.jpage = document.querySelector('.jpage');
	this.jnav = this.jpage.querySelector('.jnav__wrap');
	this.button = document.querySelector('[onclick="jsidenavInstance.toggle()"]');
	this.jsidenav = document.querySelector('.jsidenav');
}

Jsidenav.prototype.toggle = function() {
	var self = this;

	if(self.isOpen) {
		self.jsidenav.style.width = "0";
		self.jpage.style.marginLeft = "0";

		self.jnav.classList.remove('jnav_margin_null');

		self.button.classList.remove('fa-times');
		self.button.classList.add('fa-bars');
	} else {
		self.jsidenav.style.width = "265px";
		self.jpage.style.marginLeft = "265px";

		self.jnav.classList.add('jnav_margin_null');

		self.button.classList.remove('fa-bars');
		self.button.classList.add('fa-times');
	}

	self.isOpen = !self.isOpen;
}

var jsidenavInstance = new Jsidenav();