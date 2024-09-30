let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let longestName = friends[0];

for (let i = 1; i < friends.length; i++) {
  if (friends[i].length > longestName.length) {
    longestName = friends[i];
  }
}

console.log(`The biggest name is: ${longestName}`);
