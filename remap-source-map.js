var remapIstanbul = require('remap-istanbul');
remapIstanbul('./generated/chrome/coverage-final.json', {
  'html': './coverage/chrome'
});
