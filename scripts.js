const sections = document.querySelectorAll('.sections	> *');

function hideSections () {
	const selectedDiv = this;
	sections.forEach(function(section){
			if(!(selectedDiv===section)){
				section.classList.toggle('hidesection');
			}
	});
}

sections.forEach((section) => section.addEventListener('click', hideSections));