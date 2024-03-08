import React, { useEffect, useState } from 'react';
import './AddItem.css'

const initItem = {
    location: 'Đéo đi đâu',
    man1: '0',
    man2: '0',
    man3: '0',
    man4: '0',
    man5: '0',
    man6: '0',
    man7: '0',
    man8: '0',
    total: '0',
    status: 'In Progress',
    createdAt: '01/01/2024'
  }

const AddItem = ({ handleSubmit, open, setOpen, indexItem, handleEdit }) => {
    const [item, setItem] = useState(indexItem || initItem);

    const addItemHandler = async (e) => {
        Boolean(indexItem) ? await handleEdit(e, item) : await handleSubmit(e, item)
        setOpen()
    }

    useEffect(() => {
        if (open) {
            setItem(indexItem || initItem)
        }
      }, [open]);

    return (
        <div className="AddItem">
            <div className='AddItemField'>
                <div className='Title'>Location:</div>
                <div>
                    <input type="text" value={item.location || ''} onChange={(e) => setItem(crrState => ({...crrState, location: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Thuận:</div>
                <div>
                    <input type="text" value={item.man1 || ''} onChange={(e) => setItem(crrState => ({...crrState, man1: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Nhơn:</div>
                <div>
                    <input type="text" value={item.man2 || ''} onChange={(e) => setItem(crrState => ({...crrState, man2: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Phong:</div>
                <div>
                    <input type="text" value={item.man3 || ''} onChange={(e) => setItem(crrState => ({...crrState, man3: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Bình:</div>
                <div>
                    <input type="text" value={item.man4 || ''} onChange={(e) => setItem(crrState => ({...crrState, man4: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Hào:</div>
                <div>
                    <input type="text" value={item.man5 || ''} onChange={(e) => setItem(crrState => ({...crrState, man5: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Đức:</div>
                <div>
                    <input type="text" value={item.man6 || ''} onChange={(e) => setItem(crrState => ({...crrState, man6: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Minh:</div>
                <div>
                    <input type="text" value={item.man7 || ''} onChange={(e) => setItem(crrState => ({...crrState, man7: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Nguyên:</div>
                <div>
                    <input type="text" value={item.man8 || ''} onChange={(e) => setItem(crrState => ({...crrState, man8: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Total:</div>
                <div>
                    <input type="text" value={item.total || ''} onChange={(e) => setItem(crrState => ({...crrState, total: e.target.value}))}/>
                </div>
            </div>
            <div className='AddItemField'>
                <div className='Title'>Date:</div>
                <div>
                    <input type="text" value={item.createdAt || ''} onChange={(e) => setItem(crrState => ({...crrState, createdAt: e.target.value}))}/>
                </div>
            </div>
            <div className='AddButtons'>
                <button className='Cancel' onClick={setOpen}>Cancel</button>
                <button onClick={addItemHandler}>Save</button>
            </div>
        </div>
    )
}

export default AddItem;