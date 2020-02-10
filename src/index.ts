import { DecomposedMolecule } from './types';
import {
  isNumeric,
  isLowerCaseChar,
  isUpperCaseChar,
  isOpeningBracket,
  isClosingBracket
} from './utils';

export function parse(molecule: string) {
    const result: DecomposedMolecule = {};
    // Transform molecule string into char array
    const splittedMolecule = molecule.split('');
    // When we encounter a closing bracket we will store a multiplicator in this array
    // and we remove it when the matching bracket is found
    const storedMultiplicator = [];
    // Variable used when a number is encounter
    let currentElementMultiplicator = 1;
    // Variable used for chemical element with lowerChar like Mg to store the good element
    let currentLowerCaseChar = '';

    while (splittedMolecule.length > 0) {
        // popedChar can't be undefined
        // we're not entering the loop when splittedMolecule is empty
        // @ts-ignore 
      const popedChar: string = splittedMolecule.pop();

      if (isNumeric(popedChar)) {
        currentElementMultiplicator = parseInt(popedChar, 10);
      } else if (isOpeningBracket(popedChar)) {
        storedMultiplicator.pop();
      } else if (isClosingBracket(popedChar)) {
        storedMultiplicator.push(currentElementMultiplicator);
        currentElementMultiplicator = 1;
      } else if (isLowerCaseChar(popedChar)) {
        currentLowerCaseChar = popedChar;
      } else if (isUpperCaseChar(popedChar)) {
        const storedMultiplicatorSum = storedMultiplicator.reduce((a, b) => a * b, 1);
        const currentMultiplicator = storedMultiplicatorSum * currentElementMultiplicator;
        const elemToAdd: string = `${popedChar}${currentLowerCaseChar}`;
        if (result[elemToAdd]) {
            result[elemToAdd] = result[elemToAdd] += currentMultiplicator;
        } else {
            result[elemToAdd] = currentMultiplicator;
        }
        currentLowerCaseChar = '';
        currentElementMultiplicator = 1;
      }
    }

    return result;
}
