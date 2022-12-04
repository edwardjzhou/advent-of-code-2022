const fs = require("fs");
const readline = require("readline");
const path = require("path");
const { callbackify } = require("util");

// A = 65 => 27
// a = 97 => 1
// function calc(char){
//     const current = char.charCodeAt(0);
//     if (current >= 97) {
//         return current - 96
//     } else {
//         return current - 38
//     }
// }

// async function main() {
//   const readInterface = readline.createInterface({
//     input: fs.createReadStream(path.join(__dirname, "data")),
//   });

//   let score = 0;
//   for await (const line of readInterface) {
//     const [his, mine] = [line.slice(0, line.length/2), line.slice(line.length/2)];
//     const set = new Set()
//     for (const char of his) {
//         set.add(char)
//     }
//     for (const char of mine){
//         if (set.has(char)) {
//             score += calc(char)
//             break
//         }
//     }
//   }
//   console.log(score); // 8493
// }

async function main() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "data")),
  });

  let score = 0;
  for await (const line of readInterface) {
    const [his, mine] = [
      line.slice(0, line.length / 2),
      line.slice(line.length / 2),
    ];
    const set = new Set();
    for (const char of his) {
      set.add(char);
    }
    for (const char of mine) {
      if (set.has(char)) {
        score += calc(char);
        break;
      }
    }
  }
  console.log(score); // 8493
}
main();
