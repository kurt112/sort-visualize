import {swap} from './helpers'
const ShellSort = (data,temp) => {
  
    const tempData = [...data]
    let n = Math.round((temp.length / 2));
    alert(n)
    while(n >=1){
        console.log('the n ' + n);
        for(let i=0; i<n; i++){
            console.log('i = ' + i + ', n = ' + (i+n));
            const newArray = temp.map(data => ({ ...data }))
            tempData.push(newArray);

            if(temp[i].number > temp[i+n].number){
                swap(temp[i], temp[i+n]);
            }

            temp[i].current = true;
            temp[i+n].target = true;
        }
        
        n--;
    }

   
    return tempData;
}

export default ShellSort;