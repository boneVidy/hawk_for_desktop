import { HawkForDesktopPage } from './app.po';

describe('hawk-for-desktop App', () => {
  let page: HawkForDesktopPage;

  beforeEach(() => {
    page = new HawkForDesktopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
