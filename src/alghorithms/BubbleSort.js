import {swap, newTrace, addToTrace, lastSorted, createKey} from './helpers'

const BubbleSort = (size,data) => {
    const temp = [];

    for (let i = 0; i < size; i++) {
      const number = Math.floor((Math.random() * 1000) + 1);
      const data = { number, current: false, target: false, ordinary: true };

      temp.push(data);
    }

    const tempData = [...data]
    let flag = true;

    while (flag) {
      flag = false;
      for (let i = 0; i < temp.length - 1; i++) {
        const newArray = temp.map(data => ({ ...data }))
        tempData.push(newArray);
        if (temp[i].number > temp[i + 1].number) {
          const n = temp[i].number;
          temp[i].number = temp[i + 1].number;
          temp[i + 1].number = n;
          flag = true;
          newArray[i].current = true;
          newArray[i + 1].target = true;
        }
      }
    }


    return tempData;
}

export default BubbleSort