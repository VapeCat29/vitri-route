const vitri_2_vet_1B = {
  'vitri_2_vet_1B_start': [
    'show scene kaz_and_vape with fadeIn duration 1s',
    'show character finana neutral with exclaim',
    'finana You know, maybe we should find a new home for these two.',
    'show character finana neutral at left',
    'show character vitri surprised at center with exclaim',
    'vitri You’ll help me?. For real?',
    `<p class = "italicText">His tone was very cheerful when saying this. I can tell this means a lot to him.</p>`,
    `finana Of course, I just can’t go home and not do anything after seeing these cuties here`,
    `<p class = "italicText">As I said this, both Vape and Kaz came to my ankles and began brushing up against them. A small purr can be heard causing my heart to melt a little.</p>`,
    `finana Don't worry you two, we will make sure to  find you a good home`,
    `<p class = "italicText">We decided to take them to the vet. After this, we can begin looking for anyone who is looking to own them.</p>`,
    'show scene vet with fadeIn duration 1s',
    'show character vet neutral with fadeIn',
    'vet It is late today, but I can assure you that I will look over them and have them healthy for you.',
    'hide character vet',
    'show character vet neutral at right with fadeIn',
    `vet It’s rare to see such a young couple caring about strays`,
    'show character finana neutral at left with exclaim',
    'show character vitri surprised at center with exclaim',
    `finana We-`,
    'hide character vitri',
    'show character vitri surprised at center with exclaim',
    `vitri We-we are not a couple`,
    `<p class = "italicText">Vitri says this in an instant. I feel a little annoyed at the way he said that so suddenly, but I can tell from looking at him that he didn’t mean to offend me. His cheeks and ears are both as red as a tomato.</p>`,
    `<p class = "italicText">Seeing him act this way now makes me want to tease him. It’s funny, it’s usually me who is teased around but this is too fun. I wanna see what more reactions I can get out of him.</p>`,
    'hide character finana',
    'show character finana tease at left with exclaim',
    `finana:tease Oh, is that so? Well; So~rry!  for not being attractive to you`,
    `vitri I- I, I didn't say that. You’re very attractive.`,
    `finana:tease hmm, so you see me as attractive huh`,
    `<p class = "italicText">Vitri begins stuttering his words</p>`,
    `vitri y-yes, of course you are`,
    'finana:tease then tell me, what part of me attracts you then',
    `<p class = "italicText">I never knew someone’s face could turn this red. Vitri begins to form a word but then, another voice interrupts him</p>`,
    'hide character vet',
    'show character vet neutral at right with exclaim',
    'vet Ahem, you two should take your date somewhere else. I will contact you when they are ready to pick up.',
    `<p class = "italicText">We exchange numbers so that we can both come to check on them at the same time.</p>`,
    'show scene vet with fadeOut duration 1s',
    'wait 1000',
    'show scene laptop with fadeIn duration 1s',
    `<p class = "italicText">It's been a couple of days now and I have learned that Vitri is quite the energetic guy. He’s always looking up memes for a club he is in and also likes to play video games but seems to be a sore loser as well.</p>`,
    `<p class = "italicText">Part of me wonders why someone like him isn’t more popular. I heard that in college, people like him can be a “social butterfly”  I think is the term.</p>`,
    `<p class = "italicText">But then I started receiving constant messages from him. At first, I thought it was due to being excited for the cats but the messages didn't stop. In fact they got more and more frequent. It’s somewhat worrisome</p>`,
    
    'jump vitri_2_vet_1B_choice'
  ],
  'vitri_2_vet_1B_choice': [
    {
      'Choice': {
        'Dialog': 'I can’t let this keep on going as is, so I:',
        'Yes': {
          'Text': 'Ask him to talk in person',//2B
          'Do': 'To be continued'
        },
        'No': {
          'Text': 'Go and see how he acts with others',//3A
          'Do': 'To be continued'
        }
      }
    }
  ]
};
