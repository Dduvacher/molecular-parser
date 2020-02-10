# molecular-parser
Parsed a molecule (string) and give details elements count as an object.

## Usage

```javascript
import molecularParser from 'molecular-parser';

console.log(molecularParser.parse('H2O'));
// Expected output: {'H': 2, 'O': 1}
console.log(molecularParser.parse('Mg(OH)2'));
// Expected output: {'Mg': 1, 'O': 2, 'H': 2}
console.log(molecularParser.parse('K4[ON(SO3)2]2'));
// Expected output: {'K': 4, 'O': 14, 'N': 2, 'S': 4}
```