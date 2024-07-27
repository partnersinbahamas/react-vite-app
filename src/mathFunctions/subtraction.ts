console.log('subtraction');

export const funcDescription = 'returns numbers subtraction';

function subtraction(a: number, b: number) {
 console.log(`${a} - ${b} = ${a - b}`);
  return `subtraction: ${a} - ${b} = ${a - b}`;
}

export default subtraction;