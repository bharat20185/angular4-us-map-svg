import { UsMapPage } from './app.po';

describe('us-map App', () => {
  let page: UsMapPage;

  beforeEach(() => {
    page = new UsMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
