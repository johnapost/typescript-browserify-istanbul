import {shoutHello, shoutHelloWorld} from '../src/shout';

describe('shoutHello', () => {

  it('should say hello in uppercase', () => {
    shoutHello('foo').should.equal('HELLO FOO');
  });

});

// describe('shoutWorld', () => {
//
//   it('should say hello world in uppercase', () => {
//     shoutHelloWorld().should.equal('HELLO WORLD');
//   });
//
// });
