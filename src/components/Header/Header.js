import React, { useState } from 'react';
import './header.css';
import { FaBars, FaRegHeart, FaRegUser, FaSearch, FaTimes } from "react-icons/fa";
import Button from '../UI/Button/Button';
import Menu from '../UI/Menu/Menu';
import Section2 from '../Section2/Section2';

function Header({ searchItems, setSearchItems, setBHKType, setPrice }) {

    const [inputValue, setInputValue] = useState('');
    const [openMenu, setOpenMenu] = useState(false);

    function addSearch(e) {
        if (e.key === 'Enter') {
            if (inputValue.length > 0 && searchItems.length < 3) {
                setSearchItems([...searchItems, inputValue])
                setInputValue('');
            } else {
                setInputValue('');
            }
        }
    }

    function addSearchBtn() {
        if (inputValue.length > 0 && searchItems.length < 3) {
            setSearchItems([...searchItems, inputValue])
            setInputValue('');
        } else {
            setInputValue('');
        }
    }

    function deleteItem(id) {
        let newItem = searchItems.filter((item, i) => i !== id)
        setSearchItems([...newItem])
    }

    function openMenuFun() {
        setOpenMenu((prev => !prev));
    }

    return (
        <>
            <header className='header'>
                <img src="/assets/images/main_logo.png" alt="logo" />
                <img src="/assets/images/main_logo1.png" alt="logo" className="mobile-icon" />
                <div className="search">
                    <div className="search__sub1">
                        <select>
                            <option value="Buy in pune">Buy in Pune</option>
                        </select>
                    </div>
                    <div className="search__sub2">
                        {searchItems.length > 0 && <div className='search__items'>
                            {
                                searchItems.map((item, i) => <div key={i} className='search__item'><span className='search__item__text'>{item}</span> <FaTimes className='icon' onClick={() => deleteItem(i)} /></div>)
                            }
                        </div>}
                        <input type="search" value={inputValue} placeholder="Search" onChange={(e) => setInputValue(e.target.value)} style={{ flex: searchItems.length === 0 && 1 }}
                            onKeyDown={addSearch} />
                    </div>
                    <span className="search-desktop">
                        <Button type='main' text="Search" onClick={addSearchBtn} />
                    </span>
                    <span className="search-mobile">
                        <button className='button__main' onClick={addSearchBtn}>{<FaSearch />}</button>
                    </span>
                </div>
                <div className="buttons">
                    <Button type='sub' text="Login" icon={<FaRegUser />} />
                    <Button type='sub' text="Shortlist" icon={<FaRegHeart />} />
                </div>
                <span style={{ marginLeft: '.5rem' }}><Button type='sub' text="Shortlist" icon={<FaBars />} onClick={openMenuFun} /></span>
                <Menu openMenuFun={openMenuFun} openMenu={openMenu} />
            </header >
            <Section2 setBHKType={setBHKType} setPrice={setPrice} />
        </>
    )
}

export default Header;