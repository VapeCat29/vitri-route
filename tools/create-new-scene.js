const fs = require('fs');
const prompt = require('prompt');

prompt.start();
prompt.get(['filename'], function (err, result) {
  let name = result.filename;

  // convert - to _
  name = name.replace(/-/, '_');

  fs.writeFileSync(`${__dirname}/../js/scripts/scenes/${name}.js`, jsTemplate(name));

  const mainScriptDir = `${__dirname}/../js/script.js`;
  const mainScriptRaw = fs.readFileSync(mainScriptDir).toString();
  const mainScriptModified = mainScriptRaw.replace(/(\/\/ create-new-scene-helper)/, `...${name},\n  $1`);

  fs.writeFileSync(mainScriptDir, mainScriptModified);

  const indexHtmlDir = `${__dirname}/../index.html`;
  const indexHtmlRaw = fs.readFileSync(indexHtmlDir).toString();
  const indexHtmlModified = indexHtmlRaw.replace(/(<!-- create-new-scene-helper -->)/, `<script src="./js/scripts/scenes/${name}.js"></script>\n    $1`);

  fs.writeFileSync(indexHtmlDir, indexHtmlModified);

  console.log(`scene ${name} was created successfully`);
});


const jsTemplate = (name) => `const ${name} = {
  '${name}_start': [
    'jump ${name}_choice'
  ],
  '${name}_choice': [
    {
      'Choice': {
        'Dialog': '',
        'Yes': {
          'Text': '',
          'Do': ''
        },
        'No': {
          'Text': '',
          'Do': ''
        }
      }
    }
  ]
};
`;
