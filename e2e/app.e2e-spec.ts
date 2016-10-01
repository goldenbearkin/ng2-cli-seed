import { Ng2CliSeedPage } from './app.po';

describe('ng2-cli-seed App', function() {
  let page: Ng2CliSeedPage;

  beforeEach(() => {
    page = new Ng2CliSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
