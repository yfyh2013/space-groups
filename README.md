# @crystallography/space-groups
[![Build Status](https://travis-ci.com/vreshch/space-groups.svg?token=KeX5irpaztoiyZmMEffK&branch=master)](https://travis-ci.com/vreshch/space-groups)

Crystallography: Space Groups list;

## Technical description:
  * Typescript 2.1 (export typings)
  * Isomorphic (can be used with node & with browsers )
  * Compiled to UMD (can be used as CommonJS, AMD & direct module include syntax)

## Include following clases:
  * SpaceGroup
  * SpaceGroupData (json with information)

## How to use:
```javascript
import { SpaceGroup }  from 'space-groups';

const sg = SpaceGroup.getByHMName('P -1');

console.log(sg.id); // 2
console.log(sg.hermannMauguin); // P -1
console.log(sg.hallSymbol); // -P 1
console.log(sg.symetryList); // [ 'x,y,z', '-x,-y,-z' ]
console.log(sg.representativeOperations); // 1
console.log(sg.getCrystalSystem()); // Triclinic

```

## Commands:
  * Run unit tests: `npm run test`
  * Start TDD flow: `npm run tdd`
  * Run linter verification: `npm run lint`
  * Run linter verification & fix: `npm run lintfix`
  * Build project: `npm run build`
