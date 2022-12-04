async function main() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "data")),
  });

  let score = 0;
  for await (const line of readInterface) {
    const [his, mine] = line.split(` `);

  }
  console.log(score); // 573
}
