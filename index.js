"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeToast(callback) {
    console.log("making toast....");
    setTimeout(() => {
        console.log('toast is ready');
        callback();
    }, 6000);
}
function boilEgg(callback) {
    console.log("boiling egg....");
    setTimeout(() => {
        console.log('egg is ready');
        callback();
    }, 2000);
}
function makeCoffee(callback) {
    console.log("making coffee....");
    setTimeout(() => {
        console.log('coffee is ready');
        callback();
    }, 4000);
}
function notify() {
    console.log("Your breakfast is ready");
}
makeToast(() => {
    boilEgg(() => {
        makeCoffee(() => {
            notify();
        });
    });
});
