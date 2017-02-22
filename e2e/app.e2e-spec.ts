import { Storenew.FrontPage } from './app.po';

describe('storenew.front App', () => {
  let page: Storenew.FrontPage;

  beforeEach(() => {
    page = new Storenew.FrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
