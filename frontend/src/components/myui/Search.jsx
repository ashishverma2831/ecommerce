import React, { useState } from 'react'
import { Input } from '../ui/input';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const searchForm = useFormik({
        initialValues: {
            keyword: ''
        },
        onSubmit: (values) => {
            setKeyword(values.keyword);
            console.log(values);
            if(keyword.trim()){
                navigate(`/shop/?keyword=${keyword}`);
            }else{
                navigate('/');
            }
        }
    })

    return (
        <>
            <form onSubmit={searchForm.handleSubmit}>
                <span className='flex relative items-center'>
                    <Input
                        type='text'
                        name='keyword'
                        id='keyword'
                        onChange={(e)=>{setKeyword(e.target.value),searchForm.handleChange(e)}}
                        value={searchForm.values.keyword}
                        placeholder='Search'
                        className='bg-background_1 border-b-2 border-color_2 text-color_2'
                    />
                    <button
                        type='submit'
                        className='absolute right-2'
                    ><i className="fa-solid fa-magnifying-glass"></i> </button>
                </span>
            </form>
        </>
    )
}

export default Search