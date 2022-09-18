const vitri_3_house_1A = {
  'vitri_3_house_1A_start': [
    'show scene kaz_and_vape with fadeIn duration 1s',
    'show character finana neutral with exclaim',
    'finana What If I take care of them at my place for now? I can’t sleep at night knowing these two are out here',
    'show character finana neutral at left',
    'show character vitri surprised at center with exclaim',
    `<p class = "italicText">Vitris face went from his carefree look to just dumbfounded in but a single moment.</p>`,
    'vitri Are, are you sure? I, I don’t know what to say but thank you. I can’t let you do all this by yourself though.',
    `<p class = "italicText">We both agreed to share one cat each. Vitri was to keep Kaz and I was to take care of Vape. You know vape is cuter now that I think about it. I can’t wait to lift her in my arms and cuddle.</p>`,
    `<p class = "italicText">*I see what you did there OZ</p>`,
    `<p class = "italicText">We exchange numbers(or discord?) and agree to keep a check on each other until we find a solution for the cats.</p>`,
    'show scene kaz_and_vape with fadeOut duration 1s',
    'wait 1000',
    'show scene laptop with fadeIn duration 1s',
    `vitri Hey , Kaz is very rowdy here, but seems to be good, how's vape?`,
    `<p class = "italicText">I pick up vape in my arms and pose to send a picture. Vape’s warm and soft hair tickles my arms and I can’t help but giggle.</p>`,
    '*Oh i cant draw this one ._.',
    `finana Vape is a good girl, I might even keep her`,
    `<p class = "italicText">The two of us kept the conversation going for a while and then vitri suggested meeting after classes in his “meme club”</p>`,
    'jump vitri_3_house_1A_choice'
  ],
  'vitri_3_house_1A_choice': [
    {
      'Choice': {
        'Dialog': 'What should I do:',
        'Yes': {
          'Text': 'Agree to meet',//2A
          'Do': 'To be continued'
        },
        'No': {
          'Text': 'Suggest  meeting somewhere else',//3B
          'Do': 'To be continued'
        }
      }
    }
  ]
};
