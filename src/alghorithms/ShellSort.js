import { swap } from './helpers'
const ShellSort = (data, temps) => {


  
    const tempData = [...data]
    let arr_len = parseInt(temps.length);

    for (let gap = arr_len / 2; gap > 0; gap /= 2) {
       for (let i = parseInt(gap); i < arr_len; i += 1) {
        const newArray = temps.map(data => ({ ...data }))
        tempData.push(newArray);
        let temp = newArray[i].number;
        let j;
        for (j = i; j >= gap && newArray[j - gap].number > temp; j -= gap)

        console.log(newArray[j - gap]);
        newArray[j].number = newArray[j - gap].number;
        newArray[j].number = temp;

      
        }
    }

    return tempData;
}

export default ShellSort;