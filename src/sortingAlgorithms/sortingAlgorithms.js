export const mergeSort = array => {
    if (array.length === 1) return array;
    const animations = [];
    const auxiliaryArray = array.slice();
    doMergeSort(0, array.length-1, array, auxiliaryArray, animations);
    return animations;
};

function doMergeSort(startId, endId, mainArray, auxiliaryArray, animations){
  if(startId===endId)return;
  const midId=Math.floor((startId+endId)/2);
  doMergeSort(startId,midId,auxiliaryArray,mainArray,animations);
  doMergeSort(midId+1,endId,auxiliaryArray,mainArray,animations);
  merge(startId,midId,endId,mainArray,auxiliaryArray,animations);
}


function merge(startId, midId, endId, mainArray, auxiliaryArray, animations){
    let i=startId,j=midId+1,k=startId;
    while(i<=midId && j<=endId){
      animations.push([i,j]);
      animations.push([i,j]);
      if(auxiliaryArray[i]<=auxiliaryArray[j]){
        animations.push([k,auxiliaryArray[i]]);
        mainArray[k++]=auxiliaryArray[i++];
      }else{
        animations.push([k,auxiliaryArray[j]]);
        mainArray[k++]=auxiliaryArray[j++];
      }
    }
    while(i<=midId){
      animations.push([i,i]);
      animations.push([i,i]);
      animations.push([k,auxiliaryArray[i]]);
      mainArray[k++]=auxiliaryArray[i++];
    }
    while(j<=endId){
      animations.push([j,j]);
      animations.push([j,j]);
      animations.push([k,auxiliaryArray[j]]);
      mainArray[k++]=auxiliaryArray[j++];
    }
}
