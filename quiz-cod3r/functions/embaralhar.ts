export default function Embaralhar(list: any[]): any[] {
  return list
    .map((value) => {
      return { value, randomic: Math.random() };
    })
    .sort((obj1, obj2) => {
      return obj1.randomic - obj2.randomic;
    })
    .map((obj) => obj.value);
}
