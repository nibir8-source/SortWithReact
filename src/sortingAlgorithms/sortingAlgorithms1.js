export const bubbleSort = array => {
  if(array.length === 1) return array;
  const animations = [];
  for(let i=array.length-1; i>=0; i--){
    for(let j=0; j<i; j++){
      if(array[j]>array[j+1]){
        const h1=array[j];
        const h2=array[j+1];
        animations.push([j,h2]);
        animations.push([j+1,h1]);
        array[j]=array[j]+array[j+1];
        array[j+1]=array[j]-array[j+1];
        array[j]=array[j]-array[j+1];
      }
    }
  }
  return animations;
};
