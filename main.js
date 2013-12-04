$(function(){
	var wordAmount = Math.floor((Math.random()*3)+3);
	var titles = $('h4').last().next().find('.course-title');
	var words = [];
	for(i = 0; i < wordAmount; i++) {
		if(i === 2 && wordAmount == 4) {
			words.push('of');
		} else if(wordAmount == 5 && (i === 2 || i === 3)) {
			if(i === 2) {
				words.push('for');
			} else {
				words.push('the');
			}
		} else {
			var word = '';
			while(word.length < 4 || word.toLowerCase() === 'thesis' || word.indexOf('(') !== -1 ) {
				word = $(titles[Math.floor(Math.random()*titles.length)]).html().split(' ');
				word = word[Math.floor(Math.random()*word.length)];
				word = word.replace(':', '');
				word = word.replace(',', '');
				word = word.replace(')', '');
			}
			words.push(word);
		}
	}
	$('h2').html(words.join(' '));
});