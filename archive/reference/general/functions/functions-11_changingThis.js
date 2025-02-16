// keywords: this self bind apply function window object

// CHANGE the value of this:
// // First approach (NOT RECOMMENDED)
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         // create constant referring to this.
//         const self = this; // referring to object
//         this.tags.forEach(function (tag) {
//             // console.log(this.title, tag); // value of this references GLOBAL object
//             console.log(self.title, tag); // value of this(self) changes to reference FUNCTION call
//         }); // 'this' arg removed
//     },
// };

// // video.showTags();

// // Second approach
// // recall functions are OBJECTS
// function playVideo(a, b) {
//     // a, b are additional args to show diff between .call and .apply
//     console.log(this);
// }

// // using . notation we can use apply, bind, or call
// // what is passed as FIRST ARG will be applied to value of THIS
// // Diff between .call and .apply has to do with HOW YOU PASS ADDITIONAL ARGUMENTS
// // with .call you have to pass in additional args regularly
// // with .apply you have to pass in additional arguments as ARRAYS
// playVideo.call({ name: 'Brandt' }, 1, 2); // returns object IN ARGUMENT
// playVideo.apply({ name: 'Brandt' }, [1, 2]); // returns object IN ARGUMENT
// // .bind does NOT call playVideo function!
// // it creates a new function and sets 'this' to point to new object in argument
// // NO MATTER HOW WE CALL FUNCTION, 'THIS' WILL ALWAYS POINT TO NEW OBJECT IN ARGJJ
// const fn = playVideo.bind({ name: 'Brandt' });
// fn();
// // OR can remove const and directly call bind method using ()
// playVideo.bind({ name: 'Brandt' })();

// playVideo(); // returns GLOBAL window object

// // First approach REVISITED
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         // const self = this;
//         // we can call bind with argument that will be referent of 'this'
//         this.tags.forEach(
//             function (tag) {
//                 console.log(this.title, tag); // still referencing GLOBAL object
//             }.bind(this)
//         ); // now 'this' referencing FUNCTION
//     },
// };

// video.showTags(); // returns a a, a b, a c

// Since ES6 we have ARROW FUNCTIONS WHICH INHERIT 'THIS'

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag); // NOW referencing FUNCTION object because arrow function inherits the 'this' from the function
        });
    },
};

video.showTags(); // returns a a, a b, a c
