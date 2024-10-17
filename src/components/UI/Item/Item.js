import React, { useRef, useState } from 'react'
import './item.css'
import { FaAngleRight, FaCompressArrowsAlt, FaMapMarkerAlt, FaRegClock, FaTags } from 'react-icons/fa';
import { formatNumber } from '../../utils';
import { timeAgo } from '../../utils';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

function Item({ data, type }) {
    const divRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    const scrollToDiv = () => {
        divRef.current.scrollTo({
            left: divRef.current.scrollLeft + 100,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {(type !== 'grey') ? <div className='item'>
                <div className="section1">
                    <img className='image_show_mobile' src={data?.thumbnail} alt="img" />
                    <div className='image_show_desktop' style={{ position: 'relative', width: '100%', height: '100%', }}>
                        <div style={{ position: 'relative', width: '100%', height: '100%', }}>
                            {isLoading && <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 5, top: 0, left: 0, right: 0, bottom: 0 }}>
                                <Skeleton height={'100%'} width={'100%'} />
                            </div>}
                            <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, top: 0, left: 0, right: 0, bottom: 0 }}>
                                <img
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: isLoading ? "none" : "block" }}
                                    src={data?.thumbnail}
                                    alt="First slide"
                                    onLoad={() => setIsLoading(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="grid-container">
                        <div class="item1" style={{ backgroundImage: `url(${data?.thumbnail})` }}></div>
                        <div class="item2"></div>
                        <div class="item3"></div>
                    </div>
                </div>
                <div className="section2">
                    <div>
                        <div className="section2__item1">
                            <h1>{data?.propertyName}</h1>
                            <span>RERA</span>
                        </div>
                        <span>Ready To Move</span>
                    </div>
                    <div className="section2">
                        <span><FaMapMarkerAlt className="icon" />{data?.location}</span>
                    </div>
                    <div className="section3">
                        Configuration
                    </div>
                    <div className="section4" >
                        <div className="section4__sub1" ref={divRef}>
                            {
                                data?.configuration?.map((item, i) => <div key={i} className={`section4__sub${i + 1}--${i + 1}`}>
                                    <span className='bhk'>{item.bhk}</span>
                                    <span><FaCompressArrowsAlt className='icon' /> {item.sqr_ft} Sq. Ft.</span>
                                    <span><FaTags className='icon' />₹ {formatNumber(item.price)}</span>
                                </div>)
                            }
                        </div>
                        <div className="section4__sub2" onClick={scrollToDiv}><FaAngleRight /></div>
                    </div>
                    <div className="section5">
                        <span>EMI starts at ₹52.13 K</span>
                        <span>zero Brokerage</span>
                    </div>
                    <div className="section6">
                        <div className="sub1">
                            <div className="sub--1">
                                <div>
                                    <img src={data?.builder_logo} alt="developer logo" />
                                    <div className="sub--1__info">
                                        <span>{data?.builder}</span>
                                        <span>Developer</span>
                                    </div>
                                </div>
                                <div className="sub--1__info--2">
                                    <span><FaRegClock className="icon" />{timeAgo(data.createdAt)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="sub2">
                            <div className="buttons">
                                <button>View More</button>
                                <button>Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
                <div className='item'>
                    <div className="section1">
                        <img src="/assets/images/grey1.png" alt="img" className='main_img' />
                    </div>
                    <div className="section2 grey_c">
                        <div>
                            <div className="section2__item1">
                                <img src="/assets/images/grey2.png" alt="img" />
                            </div>
                            <img src="/assets/images/grey3.png" alt="img" />
                        </div>
                        <img src="/assets/images/grey4.png" alt="img" />
                        <img src="/assets/images/grey5.png" alt="img" />
                        <div className="bottom">
                            <img src="/assets/images/grey6.png" alt="img" />
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Item