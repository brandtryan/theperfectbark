// keywords: this keyword

// The keyword 'this' represents THE OBJECT THAT IS EXECUTING THE CURRENT FUNCTION
// When we are using a METHOD (obj) 'this' represents the object
// When we are using a FUNCTION, 'this' represents GLOBAL (window, or in Node => global)

// // Object Example
// const video = {
//     title: 'a',
//     play() {
//         // METHOD!
//         console.log(this);
//     },
// };
// // we can even ADD a new method later and 'this' will still return object
// video.stop = function () {
//     // keyword function, but assigned to object, so it is a METHOD
//     console.log(this); // returns object {title: 'a', play: f, stop: f}
// };

// video.play(); // returns entire object {title: 'a', play: f, stop: f}
// video.stop(); // returns entire object {title: 'a', play: f, stop: f}
// // Object Example END

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     },
// };

// function playVideo() {
//     console.log(this);
// }

// playVideo(); // Returns WINDOW OBJECT

// // What is playVideo() is a CONSTRUCTOR FUNCTION?
// function Video(title) {
//     this.title = title; // title property added to Object (since 'this' refers to object)
//     console.log(this);
// }

// // Using 'new' operator to use constructor function
// const v = new Video('b'); // returns Video object: Video {title: 'b'}
// // as noted earlier in course, the new keyword creates an empty object {} and assigns 'this' to it

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         // ˅˅˅ this refers to array property of object
//         this.tags.forEach(function (tag) {
//             // ˅˅˅ this is within a FUNCTION show refers to global and returns THREE WINDOW OBJECTS
//             // ^^^ this callback function is NOT a METHOD
//             console.log(this);
//             // ˅˅˅ this refers to title property of object
//             console.log(this.title, tag); // returns UNDEFINED BECAUSE IT'S REFERENCING WINDOW OBJECT
//         });
//     },
// };

// video.showTags(); // returns a b c

// How do we call to return title and tag to console?
// Solution 1
// The showTags METHOD can take a second arg, "this" after function so that "this" within function
// is referencing OBJECT

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // ˅˅˅ this refers to array property of object
        this.tags.forEach(function (tag) {
            // ^^^ this callback function is NOT a METHOD
            // ˅˅˅ this is within a FUNCTION show refers to global and returns THREE WINDOW OBJECTS
            console.log(this);
            // ˅˅˅ this refers to title property of (window) object
            console.log(this.title, tag);
        }, this); // NOW, 'this' ^^^ refers to object and title will be no longer undefined
    },
};

video.showTags();
// ^^^ returns object properties => a a\n a b\n a c (title = 'a' for each, then iterates over tags)
