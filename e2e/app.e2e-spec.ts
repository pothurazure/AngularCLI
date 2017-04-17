import { FirstACLIPage } from './app.po';

describe('first-acli App', () => {
  let page: FirstACLIPage;

  beforeEach(() => {
    page = new FirstACLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
