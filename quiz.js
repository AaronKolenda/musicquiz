var questions = new Array();			//the array of item objects
var x = 0;
var score = 0;
var counter = 0;

var questionOne = new questionClass('Bach composed music in what genre?', 
'Baroque', 'Romantic', '20-century', 'Renaissance', 1, ' Baroque ', '<iframe width="560" height="315" src="http://www.youtube.com/embed/p1XD1MSES_8" frameborder="0" allowfullscreen></iframe>');
	questions.push(questionOne);										//added to array of objects
	
var questionTwo = new questionClass(('This guitarist is known as The Originator' + 
' because of his influential role in the transition of blues to rock:'), 
'Elvis', 'Jimi Hendrix', 'Bo Diddley', 'Jimmy Page', 2, ' Bo Diddley ', '<img src="originator.png" alt="Originator">');
	questions.push(questionTwo);										//added to array of object
	
var questionThree = new questionClass(('What was the first genre of American music that took the' + 
' African musical concepts of blue notes, improvisation, polyrhythms, syncopation and the swung note' +
' - and combined them with European harmony and form?'),
'Heavy Metal', 'Jazz', 'Country', 'Doo-wop', 3, ' Jazz ', '<iframe width="420" height="315" src="http://www.youtube.com/embed/__OSyznVDOY" frameborder="0" allowfullscreen></iframe>');
	questions.push(questionThree);										//added to array of objects
	
var questionFour = new questionClass('Where did Techno first emerge?',
'Chicago', 'Berlin', 'Detroit', 'London', 4, ' Detroit ', 'Although Germany is often associated with the origins of Electronic Music, the specific genre of Techno emerged from an American city');
	questions.push(questionFour);										//added to array of objects
	
var questionFive = new questionClass(('Surf rock musician Dick Dale\'s guitar playing was influenced' + 
' by the Lebanese folk music his uncle played on mandolin. This unique mix of rock and Lebanese folk' +
 ' influenced what genre years later?'),
'Hip-Hop', 'Drum n\' Bass', 'Funk', 'Punk Rock', 5, ' Punk Rock ', '<iframe width="420" height="315" src="http://www.youtube.com/embed/PScmRiaZhwk" frameborder="0" allowfullscreen></iframe>');
	questions.push(questionFive);										//added to array of objects
	
var questionSix = new questionClass('Which drummer first popularized the drum solo?',
'Gene Krupa', 'Tony Williams', 'Ringo Starr', 'Keith Moon', 6, ' Gene Krupa ', '<img src="drums.png" alt="drums">');
	questions.push(questionSix);										//added to array of objects
	
var questionSeven = new questionClass(('Who is credited as being the \'father\' of Hip Hop music for ' + 
'building upon the Jamaican tradition of impromptu toasting, boastful poetry and speech over music?'),
'Grandmaster Flash', 'DJ Kool Herc', 'Ice Cube', 'Jam Master Jay', 7, ' DJ Kool Herc ', 'Born in Jamaica, he created Hip Hop in the early 70\'s in The Bronx');
	questions.push(questionSeven);										//added to array of objects
	
var questionEight = new questionClass(('This genre of Electronic Dance Music dates back to 1998, when' + 
' tracks were featured as B-sides of 2-step garage single releases. These tracks were darker, more' +
' experimental remixes with less emphasis on vocals, and attempted to incorporate elements of breakbeat' +
' and drum and bass into 2-step garage.'),
'Psychedelic Trance', 'Electro House', 'Industrial', 'Dubstep', 8, ' Dubstep ', '<iframe width="560" height="315" src="http://www.youtube.com/embed/82XPZA6ul6M" frameborder="0" allowfullscreen></iframe>');
	questions.push(questionEight);										//added to array of objects
	
var questionNine = new questionClass('Who developed the first mass-produced electric bass in the 1950\'s?',
'Leo Fender', 'Martin Ibanez', 'Chuck Berry', 'Les Paul', 9, ' Leo Fender ', '1956 Precision Bass:</br><img src="bass.png" alt="bass">');
	questions.push(questionNine);										//added to array of objects
	
var questionTen = new questionClass(('This subgenre of country music with jazz influences was popular in Texas, ' +
'Oklahoma, and California until a federal war-time nightclub tax in 1944 led to its decline:'),
'Dixieland', 'Rockabilly', 'Western Swing', 'Red Dirt', 10, ' Western Swing ', '<iframe width="420" height="315" src="http://www.youtube.com/embed/_po4iAUw0Fg" frameborder="0" allowfullscreen></iframe>');
	questions.push(questionTen);										//added to array of objects

	
$(document).ready(function(){
	
	$("#continue").click(function(){
	counter++;
	console.log("x is " + x);
	console.log("counter is " + counter);
	if (counter == 1) {
	questions[x].display();
	$('.hint').html("Click here for a hint!");
	}
	else if ((counter >= 1) && (counter <= 10)) {
		if (questions[x].isSelected()) {
			$('.warning').html("");
			$('.hint').html("Click here for a hint!");
			questions[x].checkAnswer();
			$('.score').html("<p>Your score is " + score + " out of 10</p>");
			x++;
			if (x < 10){
			questions[x].display();
			}
		}
	}
	else if ((counter >= 11) && (!questions[x].isSelected())) {
			return;
			}
		else {
			$('.warning').html("");
			questions[x].checkAnswer();
			
			$('.score').empty();
			$('.hint').empty();
	$('#container').html('<h1>You scored ' + score + ' out of ten.</h1></br>');
		if (score > 8) {
		$('#container').append('<h1>Good job, you know your music history!</h1>');
		$('#container').append('<input type="button" id="tryAgain" value="Try Again!">');
		}
		else if ((score > 4) && (score < 9)){
		$('#container').append('<h1>Not bad!</h1>');
		$('#container').append('<input type="button" id="tryAgain" value="Try Again!">');
		}
		else if (score < 5){
		$('#container').append('<h1>Hmm, not so good, you should try again.</h1>');
		$('#container').append('<input type="button" id="tryAgain" class="button" value="Try Again!">');
		$('#tryAgain').toggleClass(" button ");
		$('#tryAgain').addClass("button");
		}
		counter = 0;
		x=0;
		score=0;
	}
	
	});
	
	$(".hint").click(function(){
		if (counter > 0) {
		questions[x].getHint();
		}
	});

	$("#container").on('click', '#tryAgain', function(){
	location.reload(true);
	});
	
	$(document).keypress(function(event){			
    var keycode = (event.which);				//when key is pressed
		if(keycode == '13'){						//if that key was 13 (enter)
        $("#continue").click();   				//then button is "clicked"
		}
	});
	
});

function questionClass (q, a1, a2, a3, a4, n, c, h) {

	this.question = q; 			
	this.answer1 = a1;
	this.answer2 = a2;
	this.answer3 = a3;
	this.answer4 = a4;
	this.number = n;
	this.correct = c;	//pass either a1, a2, a3, or a4 as c. c will now = correct answer.
	this.hint = h;
	
	//console.log("name of q is " + this.question);
	//console.log("a1 is " + this.answer1);
	//console.log("a2 is " + this.answer2);
	//console.log("a3 is " + this.answer3);
	//console.log("a4 is " + this.answer4);
	//console.log("n is " + this.number);
	console.log("c is " + this.correct);

	this.display=display;					
	function display() {
		$('.question').html('<p>' + this.question + '</p>');
		$('.choices').html(
		'<input type="radio" name=" ' + this.number + ' " value=" ' + this.answer1 + ' " id=" ' + this.answer1 + ' ">' + 
		'<label for=" ' + this.answer1 + ' ">' + this.answer1 + '</label></br>' +
		'<input type="radio" name=" ' + this.number + ' " value=" ' + this.answer2 + ' " id=" ' + this.answer2 + ' ">' + 
		'<label for=" ' + this.answer2 + ' ">' + this.answer2 + '</label></br>' +
		'<input type="radio" name=" ' + this.number + ' " value=" ' + this.answer3 + ' " id=" ' + this.answer3 + ' ">' + 
		'<label for=" ' + this.answer3 + ' ">' + this.answer3 + '</label></br>' +
		'<input type="radio" name=" ' + this.number + ' " value=" ' + this.answer4 + ' " id=" ' + this.answer4 + ' ">' + 
		'<label for=" ' + this.answer4 + ' ">' + this.answer4 + '</label></br>'
		); 
	}
	
	this.checkAnswer=checkAnswer;
	function checkAnswer() {
	
		if ($('input:radio[name=" ' + this.number + ' "]:checked').val() == this.correct) {
		score++;
		
		}
		else if ($('input:radio[name=" ' + this.number + ' "]:checked').val() == this.correct) {
		score++;
		
		}
		else if ($('input[id=" ' + this.answer3 + ' "]:checked') && (this.answer3 == this.correct)) {
		score++;
		
		}
		else if ($('input[id=" ' + this.answer4 + ' "]:checked') && (this.answer4 == this.correct)) {
		score++;
		
		}
		else {
		console.log("you got the wrong answer");
		}
		console.log("score is " + score);
	}
	
	this.isSelected=isSelected;
	function isSelected() {
	if (!$('input[name=" ' + this.number + ' "]:checked').length > 0) {
		$('.warning').html('');
		$('.warning').html("You didn't select any boxes!");
		counter--;
		return false;
		}
		return true;
	}
	
	this.getHint=getHint;
	function getHint() {
		$(".hint").html(this.hint);
	}
	
}



