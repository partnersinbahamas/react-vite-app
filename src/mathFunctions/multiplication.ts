console.log('multiplication');

export const funcDescription = 'returns numbers multiplication';

function multiplication(a: number, b: number) {
 console.log(`${a} * ${b} = ${a * b}`);
  return `multiplication: ${a} * ${b} = ${a * b}`;
}

export default multiplication;