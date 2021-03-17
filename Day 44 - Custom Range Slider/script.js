const range = document.getElementById('range');

range.addEventListener('input', (e) => {
     const value = +e.target.value;
     const label = e.target.nextElementSibling;

     //getComputedStyle returns an object containing the values of all CSS properties of an element
     const range_width = getComputedStyle(e.target).getPropertyValue('width');
     const label_width = getComputedStyle(label).getPropertyValue('width');

     //The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
     const num_width = +range_width.substring(0, range_width.length - 2);
     const num_label_width = +label_width.substring(0, label_width.length - 2);

     const max = +e.target.max;
     const min = +e.target.min;

     const left =
          value * (num_width / max) - //   the left value will be min and max declared in the HTML
          num_label_width / 2 +
          scale(value, min, max, 10, -10);
     //this uses the below scale variable.

     label.style.left = `${left}px`;

     label.innerHTML = value;
});

//this will map one set of numbers to another from : https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
     return (
          ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
     );
};
