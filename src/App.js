import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useCallback, useEffect, useState, useRef } from "react";
import Output from './Output';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { initData, getSort } from './alghorithms/helpers';
const App = () => {

  // 0 - when app is in init
  // 1 - when app is running
  // 2 - when app is pause but running
  // 3 - when app is restarting

  const [data, setData] = useState([]);
  const increment = useRef(null);
  const [current, setCurrent] = useState(0)
  const [size, setSize] = useState(9);
  // to be add 
  // 1.  'Shell Sort',  radix sort, merge sort
  const [sortOptions] = useState(['Bubble Sort', 'Selection Sort','Insertion Sort', 'Quick Sort'])
  const [sort, setSort] = useState('Bubble Sort');
  const [speed, setSpeed] = useState(1000);
  const [state, setState] = useState(0);
  const [restart, setRestart] = useState(false);


  const [timer, setTimer] = useState(0)

  const handleStart = () => {


    if (sort === '') {
      alert("Please Select Sort");
      return;
    }

    if (data.length <= 3) {
      alert('The Data Size Should Be Greater Than 3')
      return;
    }

    if (data.length - 1 <= current) {
      alert('already sorted');
      return;
    }

    setState(1);

    const move = setInterval(() => {
      setTimer((timer) => timer + 1);
      setCurrent((current) => data.length - 1 === current ? current : current + 1);
    }, speed)

    increment.current = move;
  }

  const handleReset = () => {
    clearInterval(increment.current);
    setState(2);
  }

  const handleSizeChange = (size) => {
    setCurrent(0);
    setSize(size);
    setData([]);
    setTimer(0);
  } 

  const handlerSortChange = (sort) => {
    setData([]);
    setSort(sort);
    setCurrent(0);
  }

  const handleSpeed = (speed) => {
    setSpeed(speed);
  }

  useEffect(() => {
    if (sort === '') return;
    setTimer(0);

    const newData = getSort(sort, size, data);

    setData(newData);
  }, [size, sort])

  useEffect(() => {
    if (state === 3) {
      clearInterval(increment.current);
      setRestart(true);
      setState(0);
      setTimer(0);
    }
  }, [state])


  const handleRestart = () => {
    setCurrent(0);
    setData([]);
    setState(3)
    setRestart(true);
  }

  useEffect(() => {
    if(restart === true){
      setTimer(0);
      const newData = getSort(sort, size, data);
      setData(newData);
    }

  }, [restart])

  useEffect(() => {
    if (data.length - 1 <= current && state ===1) {
      alert('already sorted');
      clearInterval(increment.current);
      setState(0);
    }
    
  }, [current])





  return (
    <div className="App" style={{ backgroundColor: '#E8ECED', paddingTop: '10px' }}>

      <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div className="components" style={{ alignItems: 'center', marginLeft: 10 }}>
          <TextField size="small" style={{ marginRight: 10 }} onChange={(e) => handleSizeChange(e.target.value)} type='number' id="outlined-basic" label="Size" value={size} variant="outlined" />

          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small" >Sort Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={sort}
              label="Sort Type"
              onChange={(e) => handlerSortChange(e.target.value)}
            >

              {
                sortOptions.map((sort) => {
                  return <MenuItem key={sort} value={sort}>{sort}</MenuItem>
                })
              }

            </Select>
          </FormControl>
        </div>

        <div className="buttons" >

          {
            state === 0 ? <Button variant="outlined" onClick={handleStart} style={{ marginRight: 10 }}>SORT</Button> : null
          }

          {
            state === 2 ? <Button variant="outlined" onClick={handleStart} style={{ marginRight: 10 }}>Continue</Button> : null
          }
          {
            state === 1 ?
              <Button variant="outlined" onClick={handleReset}>
                Pause
              </Button> : null
          }

          {
            state === 2 || state === 1 ?
              <Button variant="outlined" onClick={handleRestart} style={{ marginRight: 10 }}>
                Restart
              </Button> :
              null
          }
        </div>

        <div className="timer" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginRight: 10 }}>
          <div style={{ marginRight: 10 }}>
            <p> The time {timer}</p>
          </div>
          <div>
            <TextField size="small" style={{ marginRight: 10 }} onChange={(e) => handleSpeed(e.target.value)} type='number' id="outlined-basic" label="Speed(Ms)" value={speed} variant="outlined" />
          </div>
        </div>


      </div>
      <hr />
      <Output data={data} current={current} />

    </div>
  );
}

export default App;
