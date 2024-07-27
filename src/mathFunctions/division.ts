console.log('division');

export const funcDescription = 'returns numbers division';

function division(a: number, b: number) {
  console.log(`${a} / ${b} = ${a / b}`);
  return `division: ${a} / ${b} = ${a / b}`;
}

export default division;