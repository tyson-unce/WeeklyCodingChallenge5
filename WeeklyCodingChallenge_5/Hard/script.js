// const stuff = () => {
//     let pii = {
//         name: "Tyson Unce",
//         ssn: "333-33-3333"
//     }

// }

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
      return name
    }
    return displayName;
  }

let newFunc = makeFunc()
console.log(newFunc())




