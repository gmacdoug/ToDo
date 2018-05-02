const sections = document.querySelectorAll('.sections	> *');

function toggleSections () {
	const selectedDiv = this;
	sections.forEach(function(section){
			if(!(selectedDiv===section)){
				section.classList.toggle('section-hidden');
			}
	});
}

sections.forEach((section) => section.addEventListener('click', toggleSections));