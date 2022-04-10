import {swap} from './helpers'
const BubbleSort = (data,temp) => {
  
    const tempData = [...data]
    let flag = true;

    while (flag) {
      flag = false;
      for (let i = 0; i < temp.length - 1; i++) {
        const newArray = temp.map(data => ({ ...data }))
        tempData.push(newArray);
        if (temp[i].number > temp[i + 1].number) {
          swap(temp[i], temp[i+1])  
          flag = true;
        }


        newArray[i].current = true;
        newArray[i + 1].target = true;
      }
    }


    return tempData;
}

export default BubbleSort