import { SrpPage } from './app.po';

describe('srp App', () => {
  let page: SrpPage;

  beforeEach(() => {
    page = new SrpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
