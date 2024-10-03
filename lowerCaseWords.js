function  lowerCaseWords(mixedArray) {
    return new  Promise((resolve, reject) => {
          try {
            const filteredArray = mixedArray
                .filter(item => typeof item === 'string')
                .map(str =>  str.toLowerCase());
            resolve(filteredArray);
        } catch (error) {
            reject(error);}
    });
}
// Example
const inputArray = ['HELLO', 'WORLD', 1, true, 10, 'thisisnotcapital','THISISCAPITAL','JAVASCRIPT'];
lowerCaseWords(inputArray)
    .then(result => console.log("LowerCase Words: ", result))
    .catch(error => console.log(error));
