export const getLengthByMaxValueWidth = (listInterface: ReadonlyArray<any>): string[] => {

   const maxValueWidthObjectByAtributte = listInterface.reduce((prev, current) => 
         
      `${current}`.split('').length > `${prev}`.split('').length 
         ? current
         : prev
   
   );
   return `${maxValueWidthObjectByAtributte}`.split('');
}


export const getMaxValueByListModel = (attribute: string, listInterface: ReadonlyArray<any>): number => {

   const maxObjectByAtributte = listInterface.reduce((prev, current) => 
      current[attribute] > prev[attribute] ? current : prev
   );

   return maxObjectByAtributte[attribute];

}

export const generateScaleByMaxValue = (maxValue: number, countScales: number): number[] => {

   const scales: number[] = [];

   const scaleByCount = (maxValue / countScales);

   for(let i = 0; i <= countScales; i++) {
      scales.push(Number((i * scaleByCount).toFixed(2)))
   }

   return scales;

}

export const getSumAcumList = (list:ReadonlyArray<number>): number => {

   return list.reduce((acum, currentValue) => acum + currentValue, 0);
}