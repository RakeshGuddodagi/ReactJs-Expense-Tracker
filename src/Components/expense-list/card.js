import moment from 'moment'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './card.css'
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/action';

const Card= ({item,notifySuccess}) => {
  const time=moment(item.ctreatedAt).fromNow();
  const dispatch=useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  }
  return (
    <div className='card' style={{borderRight:`6px solid ${item.category.color}`}}>
      <div className='card-img'>
        {/* <img src={item.category.icon} alt={item.category.title} className="card-image"/> */}
        {item.category.icon ? item.category.icon : item.category.title }
        
      </div>
      <div className='card-info'>
      <label className='card-title'>{item.title}</label>
        <label className='card-time'>{time}</label>
      </div>
      <div className='card-right'>
        <div className='delete-icon' onClick={handleDelete}>
      <DeleteOutlineIcon/>
      </div>
        <div className='card-amount'>₹{item.amount}</div>
      </div>

    </div>
  )
}

export default Card