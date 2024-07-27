console.log('addition');

export const funcDescription = 'returns numbers funcDescription';

function addition(a: number, b: number) {
 console.log(`${a} + ${b} = ${a + b}`);
  return `addition: ${a} + ${b} = ${a + b}`;
}

export default addition;