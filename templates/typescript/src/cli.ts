#!/usr/bin/env node

import { create } from '@mcqj/create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
This is a caveat!
You can change this in \`src/cli.ts\`.
`;

// See https://github.com/mcqj/create-create-app/blob/master/README.md for other options.

create('{{kebab name}}', {
  templateRoot,
  extra: {
    architecture: {
      type: 'list',
      describe: 'choose your fave os',
      choices: ['macOS', 'Windows', 'Linux'],
      prompt: 'if-no-arg',
    },
  },
  after: ({ answers }) => console.log(`Ok you chose ${answers.architecture}.`),
  caveat,
});
