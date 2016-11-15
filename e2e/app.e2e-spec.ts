import { HelioJsonProjectPage } from './app.po';

describe('helio-json-project App', function() {
  let page: HelioJsonProjectPage;

  beforeEach(() => {
    page = new HelioJsonProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
