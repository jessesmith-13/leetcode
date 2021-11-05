// You're given a non-empty array of arrays where each subarray holds three integers and represents a disk. These integers denote each disk's width, 
// depth, and innerHeight, respectively. Your goal is to stack up the disks and to maximize the total height of the stack. 
// A disk must have a strictly smaller width, depth, and height than any other disk below it.

// Write a function that returns an array of the disks in the final stack, starting with the top disk and ending with the bottom disk. Note that
// you can't rotate disks; in other words, the integers in each subarray must represent [width, depth, height] at all times.

// You can assume that there will only be one stack with the greatest total height.

function diskStacking(disks) {
  disks.sort((a, b) => a[2] - b[2]);
  let heights = disks.map(disk => disk[2]);
  let diskGroups = [[disks[0]]]
  diskGroups[0].push(0);
  console.log(diskGroups);
  // diskGroups[0].push(disks[0]);
  for (let i = 1; i < disks.length; i++) {
    let curDisk = disks[i];
    let curDiskWidth = curDisk[0];
    let curDiskDepth = curDisk[1];
    let curDiskHeight = curDisk[2];
    let j = 0;
    diskGroups[i] = [disks[i]];
    while (j < i) {
      let prevDisk = disks[j];
      let prevDiskWidth = prevDisk[0];
      let prevDiskDepth = prevDisk[1];
      let prevDiskHeight = prevDisk[2];
      if (prevDiskWidth < curDiskWidth && prevDiskDepth < curDiskDepth && prevDiskHeight < curDiskHeight) {
        if (heights[i] < curDiskHeight + heights[j]) {
          heights[i] = Math.max(heights[i], curDiskHeight + heights[j]);
          disks[i].push(disks[j]);
        }
      }
      j++;
    }
  }
}

const disks = [
    [2, 1, 2],
    [3, 2, 3],
    [2, 2, 8],
    [2, 3, 4],
    [1, 2, 1],
    [4, 4, 5],
    [1, 1, 4]
  ]
console.log(diskStacking(disks));

// [[2, 1, 2], [3, 2, 3], [4, 4, 5]]
// stacking disks following the rules laid out arriba