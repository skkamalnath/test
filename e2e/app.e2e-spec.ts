import { App2017Page } from './app.po';

describe('app2017 App', () => {
  let page: App2017Page;

  beforeEach(() => {
    page = new App2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
