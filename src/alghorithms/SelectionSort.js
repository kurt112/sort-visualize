import {swap} from './helpers'
const SelectionSort = (data,temp) => {
  
    const tempData = [...data]

    for(let i =0; i<temp.length; i++){
        for(let j=i+1; j<temp.length; j++){
            const newArray = temp.map(data => ({ ...data }))
            tempData.push(newArray);
            if(temp[i].number > temp[j].number){
                swap(temp[i], temp[j])  
            }
            newArray[i].current = true;
            newArray[j].target = true;
        }
    }


    return tempData;
}

export default SelectionSort