function smartGarbage(trash, bins) {
  let binNames = Object.keys(bins);
  for (let x of binNames) {
    if (x === trash) {
      bins[x]++;
    }
  } return bins;

 /* if (trash === "recycling") {
    recycling++;
    return bins;
  } else if (trash === "waste") {
    waste++;
    return bins;
  } else {
    compost++;
  } */
}

console.log(smartGarbage('recycling', {waste: 4, recycling: 2, compost: 5}));