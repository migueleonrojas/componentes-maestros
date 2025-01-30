export const getMaxValueByListModel = (attribute: string, listInterface: ReadonlyArray<any>): number => {

   const maxObjectByAtributte = listInterface.reduce((prev, current) => 
      current[attribute] > prev[attribute] ? current : prev
   );

   return maxObjectByAtributte[attribute];

}

export const generateScaleByMaxValue = (maxValue: number, countScales: number): number[] => {

   const scales: number[] = [];

   const scaleByCount = Number((maxValue / countScales).toFixed(2));

   for(let i = 0; i <= countScales; i++) {
      scales.push(maxValue)
      maxValue -= scaleByCount
   }

   return scales;

}