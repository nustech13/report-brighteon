import React from 'react';
import './Card.css'

const Card = ({ item, handleDelete, index, setIndexItemHandler }) => {
    return (
        <div className="Card">
            {item.status.trim().toLowerCase() === 'done' && <div className='CardDone'></div>}
            <div className='CardHeader'>
                <div>Date: { item.createdAt }</div>
                <div>Status: { item.status }</div>
                <div className='CardButtons'>
                    <button className='Delete' onClick={() => handleDelete(index)}>Delete</button>
                    <button className='Edit' onClick={() => setIndexItemHandler(index)}>Edit</button>
                </div>
            </div>
            <div className='CardItem'>
                <div className='CardField'>
                    <div>Location: {item.location}</div>
                    <div>Thuận: {item.man1}</div>
                    <div>Nhơn: {item.man2}</div>
                    <div>Phong: {item.man3}</div>
                    <div>Bình: {item.man4}</div>
                    <div>Hào: {item.man5}</div>
                    <div>Đức: {item.man6}</div>
                    <div>Minh: {item.man7}</div>
                    <div>Nguyên: {item.man8}</div>
                    <div>Total: {item.total}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;