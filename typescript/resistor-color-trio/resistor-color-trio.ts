var valor:number;
const colorValor =
  [`black`,
    `brown`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `blue`,
    `violet`,
    `grey`,
    `white`,]
export type ColorResistor = typeof colorValor[number]
export function decodedResistorValue([band1, band2, band3]: ColorResistor[]) {
  valor=(((colorValor.indexOf(band1) * 10) + colorValor.indexOf(band2))*(10**colorValor.indexOf(band3))) 
  if (valor<1000) {return (valor+' ohms') 
   } 
     else  {return (valor/1000+' kiloohms')  
    }
}