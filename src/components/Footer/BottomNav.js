import React, { useState } from 'react'
import './footer.css'
import { FaFire, FaHome, FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa'

function BottomNav() {
    const [selected, setSelected] = useState(1);

    return (
        <div className="footer">
            <div style={{ color: selected === 1 ? '#FF7A00' : '#808080', borderTop: selected === 1 ? '2px solid #FF7A00' : '2px solid #fff' }} onClick={() => setSelected(1)}>
                <FaHome className="icon" />
                <span>Home</span>
            </div>
            <div style={{ color: selected === 2 ? '#FF7A00' : '#808080', borderTop: selected === 2 ? '2px solid #FF7A00' : '2px solid #fff' }} onClick={() => setSelected(2)}>
                <FaSearch className="icon" />
                <span>Search</span>
            </div>
            <div style={{ color: selected === 3 ? '#FF7A00' : '#808080', borderTop: selected === 3 ? '2px solid #FF7A00' : '2px solid #fff' }} onClick={() => setSelected(3)}>
                <FaFire className="icon" />
                <span>Tranding</span>
            </div>
            <div style={{ color: selected === 4 ? '#FF7A00' : '#808080', borderTop: selected === 4 ? '2px solid #FF7A00' : '2px solid #fff' }} onClick={() => setSelected(4)}>
                <FaRegHeart className="icon" />
                <span>Liked</span>
            </div>
            <div style={{ color: selected === 5 ? '#FF7A00' : '#808080', borderTop: selected === 5 ? '2px solid #FF7A00' : '2px solid #fff' }} onClick={() => setSelected(5)}>
                <FaRegUser className="icon" />
                <span>User</span>
            </div>
        </div>
    )
}

export default BottomNav