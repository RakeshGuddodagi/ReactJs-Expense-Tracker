import React, { useState } from 'react';
import './add-form.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { categories } from '../../constants/add-cnstnt';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from './success-model';
const AddForm = () => {
    const cat = categories;
    const [categoryOpen, setcategoryOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState('')
    const [category, setcategory] = useState();
    const [ModalOpen, setModalOpen]=useState(false);
    const dispatch = useDispatch()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    };
    const handleAmount = (e) => {
        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setAmount('');
            return;
        }
        setAmount(val);
    };
    const handleCategory = (category) => {
        setcategory(category)
        setcategoryOpen(false)
    }
    const handleSubmit = () => {
        if (title === '' || amount === '' || !category) {
            const notify = () => toast("Please enter valid data !")
            notify();
            return;
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date()
        };
        console.log('hi dude')
        dispatch(addExpense(data));
        setModalOpen(true);
    };
    return (
        <div className='add-form'>
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <Success ModalOpen={ModalOpen} setModalOpen={setModalOpen}/>
            <div className='form-item'>
                <label>Title </label>
                <input
                    placeholder='Given name for your expenditure'
                    value={title} onChange={(e) => handleTitle(e)}></input>
            </div>
            <div className='form-item'>
                <label>Amount ₹</label>
                <input className='amount-item' value={amount}
                    placeholder="Enter Amount" onChange={(e) => handleAmount(e)} />
            </div>
            <div className='Category-parent'>
                <div className='category'>
                    <div className='category-dropdown' onClick={() => setcategoryOpen(!categoryOpen)}>
                        <label>{category ? category.title : 'Category'}</label>
                        <KeyboardArrowDownIcon className='cat-icon' />
                    </div>
                    {categoryOpen && <div className='category-container'>
                        {
                            cat.map(category => (
                                <div className='category-item' style={{
                                    borderRight: `5px solid ${category.color}`
                                }} key={category.id} onClick={() => handleCategory(category)}>
                                    <label>{category.title}</label>
                                    <label>{category.icon}</label>
                                </div>
                            ))
                        }
                    </div>
                    }
                </div>
                <div className='form-add-btn'>
                    <div onClick={handleSubmit}>
                        <label>Add</label>
                        < IoPaperPlaneOutline className='ad-icon'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddForm