describe("Application Controllers", function() {

   describe("ListManagerCtrl", function(){
       var scope = {},
           ctrl = new GroceryListController(scope);

       beforeEach(function(){
           scope = {};
           ctrl = new GroceryListController(scope);
       });

       it("should have a list with 2 items in it at startup", function(){
           expect(scope.items.length).toBe(2);
       });

       it("should add items to the list", function(){
           scope.itemText = "New Item";
           scope.addItem();
           expect(scope.items[2].name).toBe("New Item");
       });

       it("should disregard items without a name", function() {
           scope.itemText = "";
           scope.addItem();
           expect(scope.items.length).toBe(2);
       });

   });

});