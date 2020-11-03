# first in .babelrc file add these lines
# {
#   'presets': ['latest', 'react', 'stage-0']
# }
# and then run in top directory
npm install --save-dev babel-preset-latest babel-preset-react babel-preset-stage-0

# change the package.json scirpt key to
# "scripts": {
#   "start": "httpster -d ./dist -p 3001"
# },

# now traspile the index.js in CLI
babel ./src/index.js --out-file ./dist/bundle.js

# then start server
npm start
