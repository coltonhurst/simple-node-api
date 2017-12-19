# simple-node-api
A simple node.js api.

Followed the tutorial [here](https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2).

### To run...

Make a folder named ```config``` and then inside add a file named ```db.js```. It's contents should look like:

```javascript
module.exports = {
  url : YOUR URL HERE
};
```

Locally, I connected to a mongodb instance like it was described in the tutorial. Do the same, and put in your own URL.

Then, when you have these source files on your local machine, use ```npm install``` to install the packages and ```npm run dev``` to run the api locally. You can use something like postman to make requests against your api. See the [tutorial](https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2) for more details.

Have fun!
