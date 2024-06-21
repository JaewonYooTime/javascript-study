// // Method => Object 
// const audio = {
//   title: 'a', 
//   play() {
//     console.log('play this', this);
//   }
// }

// audio.play();

// audio.stop = function() {
//   console.log('stop this', this);
// }

// audio.stop();

// // function => Window Object
// function playAudio() {
//   console.log(this);
// }
// playAudio();

// Constructor Function => {}
// function Audio (title) {
//   this.title = title;
//   console.log(this);
// }
// const audio = new Audio('a');


const audio = {
  title: 'audio',
  categories: ['rock', 'pop', 'hippop'],
  displayCategories() {
    this.categories.forEach(function(category) {
      console.log(`title: ${this.title}, category: ${category}`);
    }, {title: 'audio'});
  }  
}
audio.displayCategories();

