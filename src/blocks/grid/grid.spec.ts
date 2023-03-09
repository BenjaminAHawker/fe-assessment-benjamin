import * as fs from "fs";
import * as path from "path";
const html = fs.readFileSync(path.resolve(__dirname, './grid.html'));
import data from '../grid/grid.json';

jest.dontMock('fs');

describe('Grid Tests', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        require('./grid');
    });

    afterEach(() => {
        jest.resetModules();
    });

    it('Should Render The DOM', () => {
        expect(document.getElementById('app')).toBeTruthy();
    });

    it('Should Render The Correct Number Of Boxes Provided in JSON file', () => {
        const items = data.items;
        const boxes = document.getElementsByClassName('gridItem');

        expect(boxes.length).toEqual(items.length);
    })
});
