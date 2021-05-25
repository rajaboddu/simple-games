export const flamesResult = ({ name, firstname, secondname }) => {
  const name1 = firstname.toLocaleLowerCase();
  const name2 = secondname.toLocaleLowerCase();

  const name1SpaceIndex = name1.search(" ");
  const name2SpaceIndex = name2.search(" ");
  const updatedName1 =
    name1SpaceIndex >= 0
      ? `${name1.slice(0, name1SpaceIndex)}${name1.slice(name1SpaceIndex + 1)}`
      : name1;
  const updatedName2 =
    name2SpaceIndex >= 0
      ? `${name2.slice(0, name2SpaceIndex)}${name2.slice(name2SpaceIndex + 1)}`
      : name2;
  const arr1 = updatedName1.split("");
  const arr2 = updatedName2.split("");
  let common = "";
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if ((arr1[i] === arr2[j]) === " ") {
          continue;
        } else {
          common = common + arr1[i] + arr2[j];
          delete arr1[i];
          delete arr2[j];
          break;
        }
      }
    }
  }
  const count = arr1.length + arr2.length - common.length;
  let flames = "FLAMES";
  while (flames.length !== 1) {
    let c = count % flames.length;
    if (c === 0) {
      flames = flames.slice(0, flames.length - 1);
    } else if (c > 0) {
      let x = flames.slice(0, c - 1);
      let y = flames.slice(c, flames.length);
      flames = y + x;
    }
  }
  return finalResult(flames, firstname, secondname);
};

const finalResult = (character, firstname, secondname) => {
    switch (character) {
        case 'F':
            return `You both are Friends.`
        case 'L':
            return `${firstname} loves ${secondname}.`
        case 'A':
            return `Arrange Marriage.`
        case 'M':
            return `${firstname} marries ${secondname}.`
        case 'E':
            return `${firstname} is enemy to ${secondname}.`
        case 'S':
            return `${firstname} and ${secondname} are Sisters.`
        default:
            break;
    }
}
