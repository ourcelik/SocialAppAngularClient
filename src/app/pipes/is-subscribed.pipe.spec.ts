import { IsSubscribedPipe } from './is-subscribed.pipe';

describe('IsSubscribedPipe', () => {
  it('create an instance', () => {
    const pipe = new IsSubscribedPipe();
    expect(pipe).toBeTruthy();
  });
});
