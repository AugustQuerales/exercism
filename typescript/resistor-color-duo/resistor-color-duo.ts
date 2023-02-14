export enum ValorResistor {
      black,
      brown,
      red,
      orange,
      yellow,
      green,
      blue,
      violet,
      grey,
      white,
      }
    type Color = keyof typeof ValorResistor;
    export function decodedValue([first, second]: Color[]): number {
      return Number(`${ValorResistor[first]}${ValorResistor[second]}`)
    }