import {swap} from './helpers'
const InsertionSort = (data,temp) => {
  
    const tempData = [...data]


    for(let i=0; i<temp.length; i++){
        for(let j=i;j>=1; j--){
            const newArray = temp.map(data => ({ ...data }))
            tempData.push(newArray);

            if(temp[j].number < temp[j-1].number){
                swap(temp[j], temp[j-1])  
            }else {
                break;
            }
            newArray[j].current = true;
            newArray[j-1].target = true;
        }
    }

    return tempData;
}

export default InsertionSort