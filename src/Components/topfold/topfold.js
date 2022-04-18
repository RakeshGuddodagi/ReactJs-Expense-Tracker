import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './topfold.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/action';
function TopFold() {
    const [query, setQuery] = useState("");
    const dispatch=useDispatch()
    const handleQuery = (e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }

    return (
        <div className='topfold'>
            {window.location.pathname === '/' ? (<div className='first-topfold'>
                <div className='search-bar'>
                    <SearchIcon className='search-icon' />
                    <input placeholder='Search For Expenses'
                        value={query}
                        onChange={(e) => handleQuery(e)} />
                </div>
                <Link to='/AddExpense' style={{ textDecoration: 'none', color: "black" }}>
                    <div className='add-btn'>
                        <AddCircleOutlineIcon className="Add-icn" />
                        <label>Add</label>
                    </div>
                </Link>
            </div>) : (

                <div className='add-topfold'>
                    <Link to='/' style={{ textDecoration: 'none', color: "black" }}>
                        <div className='add-topfold-btn'>
                            <ArrowBackIosIcon className="back-icn" />
                            Back
                        </div>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none', color: "black" }}>
                        <div className='cancel-btn'>
                            < HighlightOffIcon className='cncl-icn' />Cancel
                        </div>
                    </Link>
                </div>

            )
            }

        </div>
    )
}

export default TopFold;