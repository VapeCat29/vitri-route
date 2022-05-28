const scene1 = {
  'Scene1_Start': [
		'show character leek neutral with fadeIn duration 1s',
		'leek Hi {{player.name}}',
		'leek It is I, Leek and I’m the VA for Leek in the Updog Project',
		'play voice 1_leek_1',
		'leek Do you wanna go to a cafe? I have some time',
		'show background cafe_interior with showScene',
		'show character leek neutral with fadeIn duration .5s',
		'wait 500',
		'show character leek happy with exclaim',
		'leek So many vegetables here!',
		'show character leek neutral',
		'wait 500',
		'jump Scene1_Choice'
	],

	'Scene1_Choice': [
		{
			'Choice': {
				'Dialog': 'leek Do you know my favorite vegetable?',
				'Yes': {
					'Text': 'Leek?',
					'Do': 'jump Scene1_Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump Scene1_No'
				}
			}
		}
	],

	'Scene1_Yes': [
		'show character leek happy with exclaim',
		'leek Thats awesome!',
    'jump Scene2_Start'
	],

	'Scene1_No': [
		'leek ...',
		'jump Scene1_Choice'
	]
};
