import React, { useEffect, useRef, useState } from 'react';
import './section3.css';
import Item from '../UI/Item/Item';

function Section3({ searchItems, bhktype, price }) {
    const [newProperties, setNewProperties] = useState([]);
    const divRef = useRef(null);
    const [initialData, setInititalData] = useState([]);
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [reload, setReload] = useState(false);

    // const properties = [
    //     {
    //         propertyName: 'Kubera Colony',
    //         location: 'Kondhwa, Pune',
    //         bhkType: [1, 2, 3, 4],
    //         price: [1, 2, 3, 4]
    //     },
    //     {
    //         propertyName: 'Kumar Park Infinia',
    //         location: 'Fursungi, Pune',
    //         bhkType: [1, 2, 3, 4],
    //         price: [1, 2, 3, 4]
    //     },
    //     {
    //         propertyName: 'Kumar Pratham',
    //         location: 'Moshi, Pune',
    //         bhkType: [1, 2, 3, 4],
    //         price: [1, 2, 3, 4]
    //     },
    //     {
    //         propertyName: 'Kumar Prospera',
    //         location: 'Magarpatta, Hadapsar, Pune',
    //         bhkType: [1, 2, 3, 4],
    //         price: [1, 2, 3, 4]
    //     },
    //     {
    //         propertyName: 'Kumar Peninsula',
    //         location: 'Pashan, Pune',
    //         bhkType: [1, 2, 3, 4],
    //         price: [1, 2, 3, 4]
    //     },
    //     {
    //         propertyName: 'Kumar Prajwal',
    //         location: 'Wadgaon Sheri, Pune',
    //         bhkType: [1, 2, 3, 4],
    //         price: [1, 2, 3, 4]
    //     }
    // ];

    useEffect(() => {
        setLoading(true);
        fetch(
            // "https://real-properties-1.onrender.com/api/properties?sort=createdAt:desc",
            // "https://real-properties-1.onrender.com/api/properties?sort=createdAt:desc",
            // {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: `Bearer 223625222b951cf2739e34d7a6b0f7a7d6554df4608ce9c23efed72749d7c0958cc9cc6882a38ba0c4e78d8f2592561f5960439109724743f8792e593979fdc5f9449728e937bb888584368fc9200f8026b24a132086481102edb667790252a41bfc2dbab3fedff8b737fbf2da93e7308bbe1572a6fbe061c95f410faa072232`,
            //     }
            // }
            "https://real-properties-2.onrender.com/api/properties?sort=createdAt:desc",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "error") {
                    throw new Error(data.message);
                }
                setInititalData(data.data);
                let newData = data.data.map(data => {
                    return {
                        id: data.documentId,
                        propertyName: data?.name,
                        location: data?.location,
                        configuration: data?.configuration,
                        thumbnail: data?.thumbnail,
                        builder: data?.builder,
                        builder_logo: data?.builder_logo,
                        createdAt: data?.createdAt
                    }
                })
                setProperties(newData);
                setNewProperties(newData);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setNewProperties([]);
                setProperties([]);
                setNotFound(false)
                console.error("Error:", error);
            });
    }, [reload])

    useEffect(() => {
        setNewProperties([]);
        setNotFound(false);
        if ((searchItems.length > 0)) {
            let matchingProperties = [];
            if (bhktype.length > 0 || price.length > 0) {
                matchingProperties = properties.filter(property => {
                    let propertyMatch = searchItems.some(item => {
                        return property.propertyName.toLowerCase().includes(item.toLowerCase()) || property.location.toLowerCase().includes(item.toLowerCase())
                    })
                    if (propertyMatch) {
                        let findBHK = false;
                        let findPrice = false;
                        property.configuration.forEach(item => {
                            let bhkFound = item.bhk === bhktype;
                            let l = price.split('c')[0];
                            if (l === '1-2') {
                                if (+item.price >= 10000000 && +item.price <= 20000000) {
                                    findPrice = true;
                                }
                            } else if (l === '2-3') {
                                if (+item.price >= 20000000 && +item.price <= 30000000) {
                                    findPrice = true;
                                }
                            } else if (l === '3-4') {
                                if (+item.price >= 30000000 && +item.price <= 40000000) {
                                    findPrice = true;
                                }
                            } else if (l === '5') {
                                if (+item.price >= 50000000) {
                                    findPrice = true;
                                }
                            }
                            if (bhkFound) {
                                findBHK = true;
                            }
                        })
                        if (findBHK || findPrice) {
                            return true;
                        }
                    }
                    return false;
                });
            } else {
                matchingProperties = properties.filter(property => {
                    let propertyMatch = searchItems.some(item => {
                        return property.propertyName.toLowerCase().includes(item.toLowerCase()) || property.location.toLowerCase().includes(item.toLowerCase())
                    })
                    return propertyMatch;
                });
            }

            if (divRef.current) {
                divRef.current.focus();
                divRef.current.scrollIntoView({
                    behavior: 'smooth',
                });
            }
            if (matchingProperties.length === 0) {
                setNotFound(true);
            }
            setNewProperties(matchingProperties);
        } else {
            if (bhktype.length > 0 || price.length > 0) {
                const matchingProperties = properties.filter(property => {
                    let findBHK = false;
                    let findPrice = false;
                    property.configuration.forEach(item => {
                        let bhkFound = item.bhk === bhktype;
                        let l = price.split('c')[0];
                        if (l === '1-2') {
                            if (+item.price >= 10000000 && +item.price <= 20000000) {
                                findPrice = true;
                            }
                        } else if (l === '2-3') {
                            if (+item.price >= 20000000 && +item.price <= 30000000) {
                                findPrice = true;
                            }
                        } else if (l === '3-4') {
                            if (+item.price >= 30000000 && +item.price <= 40000000) {
                                findPrice = true;
                            }
                        } else if (l === '5') {
                            if (+item.price >= 50000000) {
                                findPrice = true;
                            }
                        }
                        if (bhkFound) {
                            findBHK = true;
                        }
                    })
                    return findBHK || findPrice;
                });
                if (matchingProperties.length === 0) {
                    setNotFound(true);
                }
                setNewProperties(matchingProperties);
            } else {
                setNewProperties([...properties]);
            }
        }
    }, [reload, properties, searchItems, bhktype, price])

    function handleReload() {
        setReload((prev => !prev));
        setProperties([]);
        setNewProperties([]);
        setNotFound(false)
    }

    return (
        <div className="section3">
            <h2>Home › Property in Pune › Flats in Pune</h2>
            <h1 ref={divRef} className="title-2">{`Flats For Sale In ${searchItems.length === 0 ? 'Pune' : ''}  ${searchItems.length > 0 ? searchItems.join(', ') : ''}`}</h1>
            {properties?.length === 0 && !loading && <h1 className="search_not_found" style={{ marginBottom: '2rem', zIndex: 10, marginTop: '2rem', textAlign: 'center' }}>No data found</h1>}
            {newProperties?.length === 0 && loading && <h1 className="search_not_found" style={{ marginBottom: '2rem', zIndex: 10, marginTop: '2rem', textAlign: 'center' }}>...Loading</h1>}
            {notFound && newProperties?.length === 0 && <h1 className="search_not_found" style={{ marginBottom: '2rem', zIndex: 10, marginTop: '2rem', textAlign: 'center' }}>Search not found.</h1>}
            <div className="section3 housing__main">
                <div className="section3 housing__main__sub1" draggable onDragStart={handleReload} style={{
                    cursor: 'grab',
                }}>
                    {
                        newProperties?.map((item, i) => <Item key={item.id} data={item} />)
                    }
                    {(loading) && <Item type='grey' propertyName='' location='' bhkType='' price='' />}
                </div>
                <div className="section3 housing__main__sub2">
                    <div className="section1">
                        <img src="/assets/images/sidebar_img.png" alt="image1" />
                        <img src="/assets/images/sidebar_img2.png" alt="image1" />
                        <p> We never charge on home purchases,
                            offering you expert guidance without
                            any hidden fees or extra costs.</p>
                    </div>
                    <div className="section2">
                        <h1>NEED HELP?</h1>
                        <p>Get in touch with Brickfolio Expert
                            for free consultation</p>
                        <form>
                            <input type="text" placeholder="Enter your name" />
                            <div class="phone_no">
                                <div>+91</div>
                                <input type="text" placeholder="Enter your phone number" />
                            </div>
                            <input type="email" placeholder="Enter your email" />
                            <button>ENQUIRE NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3