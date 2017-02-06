import { NgReduxSamplePage } from './app.po';

describe('ng-redux-sample App', function() {
  let page: NgReduxSamplePage;

  beforeEach(() => {
    page = new NgReduxSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
