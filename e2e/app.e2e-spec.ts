import { MyBudgetV2Page } from './app.po';

describe('my-budget-v2 App', () => {
  let page: MyBudgetV2Page;

  beforeEach(() => {
    page = new MyBudgetV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
