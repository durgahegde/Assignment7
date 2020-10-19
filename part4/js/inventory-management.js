/*eslint-env browser*/

function displayMenu(){
    "use strict";
    window.console.log("welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - show all products");
    window.console.log("update - update an existing product’s inventory");
    window.console.log("exit - exit the system");
    window.console.log("");
}

function display(inventoryList){
    "use strict";
    var i;
    for (i = 0; i < inventoryList.length; i++) {
        window.console.log(inventoryList[i][0] + " " + inventoryList[i][1] + " (" + inventoryList[i][2] + ") $" + inventoryList[i][3] + "\n");
    }
    window.console.log("");
}

function update(inventoryList){
    "use strict";
    var sku, quantity, j;
    sku = parseInt(window.prompt("Please enter the sku number :"));
    quantity = parseInt(window.prompt("Please enter the quantity to be updated :"));
    
    for (j = 0; j < inventoryList.length; j++) {
        if (inventoryList[j][0] === sku) {
            inventoryList[j][2] += quantity;
        }
    }
    display(inventoryList);
}

function main(){
    "use strict";
    var inventory, command;

    displayMenu();

    inventory = [[4824,"Shirt", 10, 15.99], [6343,"Jeans", 22, 39.99], [3223, "Socks", 36, 9.99], [2233, "Hat", 12, 14.99], [9382, "Jacket", 5, 49.99]]
    
    while(true){
        command = window.prompt("Enter Command");
        if(command !== null){
            if (command === "show") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("Not a valid command");
            }
        } else{
            break;
        }
    }
    window.console.log("Program Terminated")

}

main();