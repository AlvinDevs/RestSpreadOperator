

 const filterOutOdds = (...num) => num.filter(n => n % 2 === 0);

 //findMin(1,4,12,-3) // -3
//findMin(1,-1) // -1
 //findMin(3,1) // 1

 let findMin = (...nums) => Math.min(...nums);



const mergeObjects = ({a:1, b:2}, {c:3, d:4});

//doubleAndReturnArgs = ([1,2,3],4,4);
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (...args) => [...args* 2 ];

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) 
{
    let removeItems = items => 
    {
        let item = Math.floor(Math.random() * item.length);
        return [...items.slice(0), item, ...items.slice(item + 1)];
        
    }
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) 
{
    let copyObj = {...obj};
    copyObj[key] = val;
    return copyObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) 
{
    let newObj = {...obj};
     newObj[key].splice(key);
     return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) 
{
    return {...obj1, obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) 
{
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
