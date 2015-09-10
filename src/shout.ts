import {Hello} from './hello';

const hello = new Hello();

export function shoutHello(text: string): string {
  return hello.say(text).toUpperCase();
}

export function shoutHelloWorld(): string {
  return hello.sayHelloWorld().toUpperCase();
}
