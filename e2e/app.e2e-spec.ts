import { TodoNg2Page } from './app.po';

describe('todo-ng2 App', () => {
  let page: TodoNg2Page;

  beforeEach(() => {
    page = new TodoNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
