// Youre given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses
// that can be created by inserting three .s in the string.

// An IP address is a sequence of four positive integers that are separated by .s, where each individual integer is within the range
// 0 - 255 inclusive.

// An IP address isnt valid if any of the indivual integers contains leading 0s. For example, "192.168.0.1" is a valid IP address, but 
// "192.168.00.1" and "192.168.0.01" arent, because they contain "00" and 01, respectively. Another example of a valid IP address is
// "99.1.1.10"; conversely, "991.1.1.0" isnt valid, because "991" is greater than 255.

// Your function should return the IP addresses in string format and in no particular order. If no valid IP addresses can be created
// from the string, your function should return an empty list.

function validIPAddresses(string) {
  const ipAddressesFound = [];
  for (let i = 1; i < Math.min(string.length, 4); i++) {
    let currentIPAddressParts = ['', '', '', ''];
    let currentFirstPart = string.slice(0, i);
    if (isValidPart(currentFirstPart)) {
      currentIPAddressParts[0] = currentFirstPart;
    } else {
      continue;
    }
    for (let j = i + 1; j < Math.min(string.length, i + 4); j++) {
      let currentSecondPart = string.slice(i, j);
      if (isValidPart(currentSecondPart)) {
        currentIPAddressParts[1] = currentSecondPart;
      } else {
        continue;
      }
      for (let k = j + 1; k < Math.min(string.length, j + 4); k++) {
        let currentThirdPart = string.slice(j, k);
        let currentFourthPart = string.slice(k);
        if (isValidPart(currentThirdPart) && isValidPart(currentFourthPart)) {
          currentIPAddressParts[2] = currentThirdPart;
          currentIPAddressParts[3] = currentFourthPart;
          ipAddressesFound.push(currentIPAddressParts.join('.'));
        }
      }
    }
  }
  return ipAddressesFound
}

function isValidPart(subStr) {
  // subStr = Number(subStr);
  if (subStr.length > 1 && subStr[0] === '0') {
    return false;
  }
  subStr = Number(subStr);
  if (subStr >= 0 && subStr <= 255) {
    return true;
  } 
  return false;
}

const str = '1921680';
console.log(validIPAddresses(str))
// console.log(isValidSubstr('01'))