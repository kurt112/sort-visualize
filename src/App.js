import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useCallback, useEffect, useState, useRef } from "react";
import Output from './Output';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BubbleSort from './alghorithms/BubbleSort';
const App = () => {

  const [data, setData] = useState([]);
  const increment = useRef(null);
  const [time, setTime] = useState(0);
  const [current, setCurrent] = useState(0)
  const [size, setSize] = useState(10);
  const [sortOptions] = useState(['Bubble Sort', 'Shell Sort'])
  const [sort, setSort] = useState('');
  const [speed, setSpeed] = useState(1000);
  const [isPause, setIsPause] = useState(false);

  const [timer, setTimer] = useState(0)

  const handleStart = () => {

    if(isPause) return;

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

    setIsPause(true);
    const move = setInterval(() => {
      setTimer((timer) => timer + 1);
      setCurrent((current) => data.length - 1 === current ? current : current + 1);
    }, speed)

    increment.current = move;
  }

  const handleReset = () => {
    clearInterval(increment.current);
  }

  useEffect(() => {
    if (data.length - 1 <= current) {
      handleReset()
    }
  }, [current, timer])


  const handleSizeChange = (size) => {
    setSize(size);

    setData([]);
    setTime([]);
  }

  const handlerSortChange = (sort) => {
    setSort(sort);
  }

  const handleSpeed = (speed) => {
    setSpeed(speed);
  }

  const handleInnit = () => {

    const tempData = JSON.parse(JSON.stringify(data));

    for (let i = tempData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempData[i], tempData[j]] = [tempData[j], tempData[i]];
    }
    setData(tempData);
  }

  useEffect(() => {

    const newData = BubbleSort(size,data);

    
    setData(newData);
  }, [size])


  return (
    <div className="App" style={{ backgroundColor: '#E8ECED', paddingTop: '10px' }}>

      <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div className="components" style={{ alignItems: 'center', marginLeft: 10 }}>
          <TextField size="small" style={{ marginRight: 10 }} onChange={(e) => handleSizeChange(e.target.value)} type='number' id="outlined-basic" label="Size" value={size} variant="outlined" />

          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sort Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={sort}
              label="Sort"
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
          <Button variant="outlined" onClick={handleStart} style={{ marginRight: 10 }}>SORT</Button>
          {
            isPause ? <Button variant="outlined" onClick={handleReset}>
              Pause
            </Button> : <Button variant="outlined" onClick={handleInnit}>
              Shuffle
            </Button>
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
