export default function Embaralhar(list: any[]): any[] {
  return list
    .map((value) => {
      return { value, random: Math.random() };
    })
    .filter((a, b) => {
      a.random - b.random;
    });
}
