import {swap} from './helpers'
const QuickSort = (data,temp) => {
  
    const tempData = [...data]
    let n = temp.length;

    console.log('before temp');
    console.log(temp);
    quickSort(temp, 0, n - 1,  tempData);

    console.log('after temp');
    console.log(temp);
    return tempData;
}



const partition = (arr,low,high,tempData) => {
     // pivot
     let pivot = arr[high].number;

     let i = (low - 1);
  
     for(let j = low; j <= high - 1; j++)
     {
        const newArray = arr.map(data => ({ ...data }))
        tempData.push(newArray);
         if (arr[j].number < pivot)
         {
             i++;
             newArray[i].current = true;
             newArray[j].target = true;
             swap(arr[i], arr[j]);
         }
     }
     swap(arr[ i + 1], arr[high]);
     return (i + 1);
}

const quickSort = (arr,low,high,tempData) => {
    // console.log("im runiong");
    if (low < high)
    {
        let pi = partition(arr, low, high,tempData);
 
        quickSort(arr, low, pi - 1,tempData);
        quickSort(arr, pi + 1, high,tempData);
    }
}

export default QuickSort;