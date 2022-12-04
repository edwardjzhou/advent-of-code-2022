const fs = require('fs');
const readline = require("readline");
const path = require('path')

//part1
//fully overlapped
// async function main(){
//     const readInterface = readline.createInterface({
//         input: fs.createReadStream(path.join(__dirname, "data")),
//     });

//     let count = 0;
//     // 42 - 93, 93 - 94; edgecase
//     //  8 54 55 92 wasnt working it was parseint problem
//     for await (const line of readInterface) {
//         const [pair1, pair2] = line.split(`,`);
//         let [left1, right1] = pair1.split(`-`)
//         let [left2, right2] = pair2.split(`-`);
//         left1 = parseInt(left1)
//         left2 = parseInt(left2)
//         right1 = parseInt(right1)
//         right2 = parseInt(right2)
//         if ((left1 <= left2 && right1 >= right2) || (left2 <= left1 && right2 >= right1)) {
//             count++
//         }
//     }
//     console.log(count) // 573
// }

//part2
//any overlap
async function main() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "data")),
  });

  let count = 0;
  for await (const line of readInterface) {
    const [pair1, pair2] = line.split(`,`);
    let [left1, right1] = pair1.split(`-`);
    let [left2, right2] = pair2.split(`-`);
    left1 = parseInt(left1);
    left2 = parseInt(left2);
    right1 = parseInt(right1);
    right2 = parseInt(right2);
    if (
      (left1 <= left2 && right1 >= left2) ||
      (left2 <= left1 && right2 >= left1)
    ) {
      count++;
    }
  }
  console.log(count); //867
}


main()