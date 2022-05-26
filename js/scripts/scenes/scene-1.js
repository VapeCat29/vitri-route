const scene1 = {
  'Scene1_Start': [
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
		'show character leek happy with pulse duration .5s',
		'leek Thats awesome!',
    'jump Scene2_Start'
	],

	'Scene1_No': [
		'leek ...',
		'jump Scene1_Start'
	]
};
