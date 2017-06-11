import { MyPlacePage } from './app.po';

describe('my-place App', () => {
  let page: MyPlacePage;

  beforeEach(() => {
    page = new MyPlacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
