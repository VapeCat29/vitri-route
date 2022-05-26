// Define the messages used in the game.
monogatari.action ('message').messages ({

});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	cafe_interior: 'cafe-interior.jpg',
	cafe_exterior: 'cafe-exterior.jpg'
});


// Define the Characters
monogatari.characters ({
	'leek': {
		name: 'Leek',
		color: '#61CF62',
		directory: 'leek',
		sprites: {
			happy: 'happy.png',
			neutral: 'neutral.png'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show background cafe_interior with fadeIn duration 1s',
		'show character leek neutral with fadeIn duration 1s',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					monogatari.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					monogatari.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'leek Hi {{player.name}}',
		'leek It is I, Leek and I’m the VA for Leek in the Updog Project',
		'jump Scene1_Start'
	],
	...scene1,
	...scene2
});
