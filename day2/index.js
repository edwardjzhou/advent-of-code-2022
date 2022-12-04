const fs = require("fs");
const readline = require("readline");
const path = require("path");

//part1
// async function main(){
//     const readInterface = readline.createInterface({
//         input: fs.createReadStream(path.join(__dirname, "data")),
//     });

//     let score = 0;
//     for await (const line of readInterface) {
//         const [his, mine] = line.split(` `)
//         if (mine === `X`) {
//             score += 1
//         } else if (mine === `Y`) {
//             score += 2
//         } else if (mine === `Z`) {
//             score += 3
//         }

//         if (his === 'A' && mine === "X") {
//             score += 3
//         } else if (his === 'A' && mine === "Y") {
//             score += 6
//         } else if (his === 'A' && mine === "Z") {
//             score += 0
//         } else if (his === 'B' && mine === "X") {
//             score += 0
//         } else if (his === 'B' && mine === "Y") {
//             score += 3
//         } else if (his === 'B' && mine === "Z") {
//             score += 6
//         } else if (his === 'C' && mine === "X") {
//             score += 6
//         } else if (his === 'C' && mine === "Y") {
//             score += 0
//         } else if (his === 'C' && mine === "Z") {
//             score += 3
//         }
    
//     }
//     console.log(score) // 573
// }

async function main() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "data")),
  });

  let score = 0;
  for await (const line of readInterface) {
    const [his, mine] = line.split(` `);
    if (mine === `X`) {
      score += 0;
    } else if (mine === `Y`) {
      score += 3;
    } else if (mine === `Z`) {
      score += 6;
    }

    if (his === "A" && mine === "X") {
      score += 3;
    } else if (his === "A" && mine === "Y") {
      score += 1;
    } else if (his === "A" && mine === "Z") {
      score += 2;
    } else if (his === "B" && mine === "X") {
      score += 1;
    } else if (his === "B" && mine === "Y") {
      score += 2;
    } else if (his === "B" && mine === "Z") {
      score += 3;
    } else if (his === "C" && mine === "X") {
      score += 2;
    } else if (his === "C" && mine === "Y") {
      score += 3;
    } else if (his === "C" && mine === "Z") {
      score += 1;
    }
  }
  console.log(score); // 12881
}


main();
