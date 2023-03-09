import * as fs from "fs";
import * as path from "path";
import data from './card.json';
const html = fs.readFileSync(path.resolve(__dirname, './card.html'));

jest.dontMock('fs');

describe('Card ->', function () {
    beforeEach(function() {
        document.documentElement.innerHTML = html.toString();
        require('./card');
    });

    afterEach(function() {
        jest.resetModules();
    });

    it('should have access to DOM', () => {
        expect(document.getElementById('app')).toBeTruthy();
    });

    describe('Element Render Checks', () => {

        it('should render image',() => {
            expect(document.getElementsByClassName('imageFull')).toBeTruthy();
        });

        it('should render correct text',() => {
            const header = document.getElementsByClassName('header');
            expect(header).toMatchSnapshot();
        });

        it('should render button' ,() => {
            expect(document.getElementsByClassName('cta')).toBeTruthy();
        })

    })
});