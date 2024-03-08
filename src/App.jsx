import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import AddItem from './components/AddItem'

import axios from 'axios';

const apiKey = 'qsxyMKAuP8b3C1YP!dTbV2V9imA3%P#lCYXwVTn9%rYb1r5mbN@Xr@L#42aRNKMC';
const headers = {
  'X-Api-Key': apiKey,
};

const sheetUrl = 'https://sheet.best/api/sheets/c4c0ab58-6c27-4e4b-9427-46779e14c984';

function App() {

  const [csvData, setCsvData] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [indexItem, setIndexItem] = useState(null);

  const fetchCSVData = async () => {
    try {
      const response = await axios.get(`${sheetUrl}?_format=index`, { headers });
      const data = response.data;
      setCsvData(Object.keys(data).map((key) => data[key]));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (rowIndex) => {
    try {
      await axios.delete(
        `${sheetUrl}/${rowIndex}`,
        {
          headers
        }
      );
      const updatedData = csvData.filter((_, i) => i !== rowIndex);
      setCsvData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e, item) => {
    e.preventDefault();
    try {
      await axios.post(
        sheetUrl,
        item,
        {
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
        }
      );

      setCsvData(crrState => [...crrState, item])
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (e, item) => {
    e.preventDefault();
    try {
      await axios.put(
        `${sheetUrl}/${indexItem}`,
        item,
        {
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
        }
      );

      await fetchCSVData()
    } catch (error) {
      console.error(error);
    }
  };

  const setIndexItemHandler = (index) => {
    setIndexItem(index)
    setOpen(true)
  }

  const HandleOpenCreate = () => {
    setIndexItem(null)
    setOpen(true)
  }

  useEffect(() => {
    if (loading) {
      fetchCSVData();
    }
  }, [loading]);

  return (
    <div className='AppContainer'>
      <Header />
      {open && <div onClick={() => setOpen(!open)} className='CoverDark'/>}
      <div className='Buttons'>
        <button onClick={HandleOpenCreate}>Create</button>
      </div>
      <div className='AppContainerList'>
        {
          Boolean(csvData.length) && csvData.map((row, index) => {
            return (
              <div key={index}>
                <Card item={row} handleDelete={handleDelete} index={index} setIndexItemHandler={setIndexItemHandler}/>
              </div>
            )
          })
        }
      </div>
      {open && <AddItem handleEdit={handleEdit} handleSubmit={handleSubmit} open={open} indexItem={indexItem ? csvData[indexItem] : null} setOpen={() => setOpen(!open)}/>}
    </div>
  );
}

export default App;
