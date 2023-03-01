
document.addEventListener("DOMContentLoaded", function() {
const selector = document.querySelector(".choices")  

const choices = new Choices(selector, {
searchEnabled: false,
shouldSort: false,
itemSelectText: '',
classNames: {
  containerOuter: 'choices header_choices',
 },
});

});
