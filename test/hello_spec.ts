import {Hello} from '../src/hello';

describe('Hello', () => {

  describe('say()', () => {

    it('should say hello', () => {
      let hello = new Hello();
      hello.say('foo').should.equal('hello foo');
    });

  });

  // describe('sayHelloWorld()', () => {
  //
  //   it('should say hello world', () => {
  //     let hello = new Hello();
  //     hello.sayHelloWorld().should.equal('hello world');
  //   });
  //
  // });

});
