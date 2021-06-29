# this are tips

### how to Capitalize the first letter of a string

```js
const str = "flexiple";
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);
//Output: Flexiple

const str = "abc efg";
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);
//Output: Abc efg
```

### Capitalize the first letter of each word in a string

```js
const str = 'i have learned something new today’;

//split the above string into an array of strings whenever a blank space is encountered
const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.
for(var i=0; i<arr.length; i++)
  {
    arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

//Join all the elements of the array back into a string using a blankspace as a separator
const str2 = arr.join(" ");
console.log(str2);
//Outptut: I Have Learned Something New Today
```

tip if you want to add z-index to two differnt element make sure that they both have position property other than the position 'static by default'

- in search another implentation is that i can change both the object return value and the search value to lower case or to upper case
