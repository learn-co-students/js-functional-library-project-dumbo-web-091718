fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection)
      }} else {
        for (let element in collection){
          callback(collection[element], element, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newData = []
      if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
        newData.push(callback(collection[i], i, collection))
      }} else {
        for (let element in collection){
        newData.push(callback(collection[element], element, collection))
        }
      }
      return newData

    },

    reduce: function(collection, callback, acc = 0) {
      for(let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }

      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate){
      let newData = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newData.push(collection[i])
        }
      }
      return newData
    },

    size: function(collection){
      if(Array.isArray(collection)){
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(collection, n){
      let newArr = [];
      if (n === undefined) {
        return collection[0]
      } else {
        for (let i = 0; i < n; i++){
        newArr.push(collection[i])
      }
      return newArr
      }

    },

    last: function(collection, n){
      let newArr = [];
      if (n === undefined) {
        return collection[collection.length - 1]
      } else {
        for (let i = (collection.length - n); i < collection.length; i++){
        newArr.push(collection[i])
      }
      return newArr
      }
    },

    compact: function(array){
      let newArr = []
      for (let i = 0; i < array.length; i++){
        if(array[i]){
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(array, callback){
      let newArr = array.slice(0)
      return newArr.sort(function(a, b){return callback(a) - callback(b)});
    },

    flatten: function(array, shallow){

    },

    uniq: function(array, isSorted, iteratee){
      let uniqArray = []
      let newArr = []

      if (isSorted){
        newArr = array.slice()
    } else {
        newArr = array.slice().sort()
    }


      for (let i = 0; i < newArr.length; i++) {
        if (iteratee){
          // Over my unique array, does it include the thing I'm looking at (computed)
          let computedUniq = uniqArray.map(iteratee)
          if (computedUniq.includes(iteratee(newArr[i]))===false)
            uniqArray.push(newArr[i])
          
        } else {
        if (uniqArray.includes(newArr[i])===false)
          uniqArray.push(newArr[i])
        }
      }
      return uniqArray
    },

    keys: function(object) {
      let keysArr = []
      for (let element in object){
        keysArr.push(element)
      }
      return keysArr
    },

    values: function(object) {
      let valuesArr = []
      for (let element in object){
        valuesArr.push(object[element])
      }
      return valuesArr
    },

    functions: function(object) {
      let functionArr = []
      for (let element in object){
        if(typeof object[element] === "function")
          functionArr.push(element)
      }
      return functionArr.sort()
    }


  }
})()

fi.libraryMethod()
