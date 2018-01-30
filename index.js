// Code your solution in this file
function findMatching(drivers, string) {
  let matches = []
  for (const d of drivers) {
    const l = d.toLowerCase()
    const s = string.toLowerCase()
    if ( l === s) {
      matches.push(d);
    }
  }
  return matches;
}

function fuzzyMatch(drivers, string) {
  let matches = []
  for (const d of drivers) {
    const l = d.toLowerCase()
    const s = string.toLowerCase()
    if ((s[0] === l[0]) && (s[1] === l[1])) {
      matches.push(d)
    }
  }
  return matches;
}

function matchName(drivers, string) {
  let matches = []
  for (const d of drivers) {
    if (d['name'] === string ) {
      matches.push(d)
    }
  }
  return matches;
}