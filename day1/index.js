const fs = require("fs");
const readline = require("readline");
const path = require("path");

//part1
//top1
// async function main() {
//   const readInterface = readline.createInterface({
//     input: fs.createReadStream(path.join(__dirname, "data")),
//   });

//   let best = -Infinity;
//   let sum = 0
//   for await (const line of readInterface) {
//     if (line === '') {
//         best = Math.max(sum, best);
//         sum = 0
//     } else {
//         sum += parseInt(line)
//     }
    
//   }
//   console.log(best); //68787
// }

//part2
//top3
async function main() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "data")),
  });

  let best = [];
  let sum = 0;
  for await (const line of readInterface) {
    if (line === "") {
      if (sum > best[0] && best.length === 3) {
        best[0] = sum;
      } else if (best.length < 3) {
        best.push(sum);
      }
      best.sort();
      sum = 0;
    } else {
      sum += parseInt(line);
    }
  }

  console.log(best.reduce((acc, ele) => acc + ele)); //198041
}

main();


