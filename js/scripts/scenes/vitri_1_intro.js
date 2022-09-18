const vitri_1_intro = {
  'vitri_1_intro_start': [
    'play music feeshIntro with loop volume 20',
    'show scene park with fadeIn duration 1s',
    'show character finana neutral with fadeIn',
    'finana I haven’t been to this park in a while, the air feels so nice. There should be a place where I can rest for a moment  and enjoy the view for a while',
    `<p class = "italicText">The wind carries with it the scent of spring, the sun’s rays are somewhat strong today but it's not too bad. As I walk through the park, looking for a seat, something catches my eye.
    </p>`,
    'show scene kaz_and_vape with fadeIn duration 1s',
    'I spotted a white cat nearby, it seems to be playing with another one. ',
    'show character finana neutral with fadeIn',
    "???: They are so cute, aren’t they? ",
    '<p class = "italicText">I hear an unfamiliar voice, I turn back to face the source of it.</p>',
    'show character finana neutral at left with exclaim',
    'show character vitri neutral at center bounceInUp',
    '???: Oh, my bad I probably scared you. The name’s Vitri.',
    'jump vitri_1_fake_intro_choice'
  ],
  'vitri_1_fake_intro_choice': [
    {
      'Choice': {
        'Dialog': 'vitri By the way have you heard of updog? ',
        'Yes': {
          'Text': 'What’s Updog?',
          'Do': 'jump vitri_1_fake_intro_Yes'
        },
        'No': {
          'Text': 'What’s Updog?',
          'Do': 'jump vitri_1_fake_intro_Yes'
        }
      }
    }
  ],
  'vitri_1_fake_intro_Yes':[
    'vitri nothing much, how about you?',
    'hide character finana',
    'show character finana angry at left with exclaim',
    'finana:angry <p class = "italicText">The air went silent, as I realized what had just happened, thoughts of rage came to my head for a moment.</p>',
    "vitri haha sorry, couldn't help myself",
    'hide character finana',
    'show character finana neutral at left with fadeIn',
    `<p class = "italicText">Vitri explains how he likes to come here and feed the cat(s) but there's a festival coming and is afraid of what will happen to it(them).</p>`,
    `<p class = "italicText">Hearing him talk, I can tell he really cares about the animals. Even though I’m still malding about that joke I can tell he’s a sweet guy.</p>`,
    'finana have you name them yet?',
    'vitri Yeah, sussy looking one is Kaz and the one that likes to play is Vape',
    `<p class = "italicText">As Vitri said this, Kaz makes mean growl,leaps into the sky and goes straight for his face, claws out and ready for combat.</p>`,
    '*Kaz growling',
    'hide character vitri',
    'show character vitri surprised at center with exclaim',
    `vitri sorry! sorry!It's Kaz, Kaz!. ahhh! not the face`,
    'hide character vitri',
    'show character vitri surprised at center with bounce',
    `<p class = "italicText">After a short scuffle, Kaz lands on the floor and goes back to play with Vape. I could swear I saw a smug look on its face but maybe it was just my imagination.</p>`,
    'hide character finana',
    'show character finana hold_laugh at left with exclaim',
    'finana:hold_laugh Oh, those are some interesting names.',
    `<p class = "italicText">I said while holding back my laughter.</p>`,
    'show scene cringe with fadeIn 1.5s',
    `<p class = "italicText">I keep to myself the cringe thoughts that came from hearing those names. Come on me, let's be nice to this guy. I  just met him after all.</p>`,
    `<p class = "italicText">We keep making small talk  and eventually Vitri asks me for help with finding the cats a home.</p>`,
    'jump vitri_1_intro_choice'
  ],

  'vitri_1_intro_choice': [
    {
      'Choice': {
        'Dialog': 'What do I tell him:',
        'Yes': {
          'Text': 'Bring the cats to my place', //1A
          'Do': 'jump vitri_3_house_1A_start'
        },
        'No': {
          'Text': 'Look for a way to have the cats adopted',//1B
          'Do': 'jump vitri_2_vet_1B_start'
        }
      }
    }
  ],
};
