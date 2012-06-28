'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Things I Need', function() {

    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });

    it("should update the list when a new item is submitted", function(){
        input('itemText').enter('jacksparrow');
        element('button:first').click();
        expect(element('li').count()).toEqual(3);
    });

    it("should clear the input field when the user submits a new item", function(){
        input('itemText').enter('jacksparrow');
        element('button:first').click();
        expect(input('itemText').val()).toBe("");
    });

    it("should update the total items count when a new item is added", function() {
        console.log(element('h2'));
    });
//
//    it("should clear finished items", function(){
//        expect(1).toEqual(2);
//    });

});
