import BubbleSort from "./BubbleSort";
import SelectionSort from "./SelectionSort";
import ShellSort from "./ShellSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
export const 

swap = (a,b) => {
    const n = a.number;
    a.number = b.number;
    b.number = n;
},

initData = (size) => {
    const temp = [];
    for (let i = 0; i <= size; i++) {
        const number = Math.floor((Math.random() * 1000) + 1);
        const data = { number, current: false, target: false, ordinary: true };
  
        temp.push(data);
    }

    return temp;
},

getSort = (sort,size,data) => {
    let newData;
    switch (sort) {
        case 'Bubble Sort':
          newData = BubbleSort(data,initData(size));
          break;
        case 'Selection Sort':
          newData = SelectionSort(data, initData(size));
          break;
        case 'Shell Sort':
          newData = ShellSort(data,initData(size)); 
          break;
        case 'Insertion Sort':
          newData = InsertionSort(data,initData(size));
          break;
        case 'Quick Sort':
            newData = QuickSort(data,initData(size));
            break;
        default:
          alert('No Sort Found')
          break;
      }

    return newData;
}

