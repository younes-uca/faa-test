import {RomaPage} from './app.po';

describe('Rome App', () => {
    let page: RomaPage;

    beforeEach(() => {
        page = new RomaPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to Roma!');
    });
});
