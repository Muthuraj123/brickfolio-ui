import React from 'react';
import './section2.css';

function Section2({ setBHKType, setPrice }) {

    function propertyTypeChange(type, e) {
        if (type === 'bhk') {
            setBHKType(e.target.value)
        } else {
            setPrice(e.target.value)
        }
    }

    return (
        <div className="section__2">
            <select>
                <option value="sort" disabled selected>Sort</option>
                <option value="pricing">Pricing</option>
                <option value="rating">Rating</option>
            </select>
            <select>
                <option value="property_type" disabled selected>Property Type</option>
                <option value="residential_property">Residential Property</option>
                <option value="commercial_property">Commercial Property</option>
                <option value="industrial_property">Industrial Property</option>
                <option value="agricultural_property">Agricultural Property</option>
                <option value="mixed-Use_property">Mixed-Use Property</option>
            </select>
            <select onChange={(e) => propertyTypeChange('bhk', e)}>
                <option value="bhk_type" disabled selected>BHK Type</option>
                <option value="">None</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4 BHK</option>
                <option value="5bhk">5 BHK</option>
            </select>
            <select onChange={(e) => propertyTypeChange('price', e)}>
                <option value="0-5" disabled selected>₹0 - ₹5.00Cr</option>
                <option value="">None</option>
                <option value="1-2cr">1-2 Cr</option>
                <option value="2-3cr">2-3 Cr</option>
                <option value="3-4cr">3-4 Cr</option>
                <option value="5cr">5 Cr</option>
            </select>
            <select>
                <option value="sale_type" disabled selected>Sale Type</option>
                <option value="direct_sale">Direct Sale</option>
                <option value="agent_sale">Brokerage/Agent Sale</option>
                <option value="cash_sale">Cash Sale</option>
            </select>
            <select>
                <option value="possession_status" disabled selected>Possession Status</option>
                <option value="ready_to_move">Ready to Move</option>
                <option value="under_construction">Under Construction</option>
                <option value="new_launch">New Launch</option>
                <option value="immediate_possession">Immediate Possession</option>
                <option value="part_possession">Part Possession</option>
            </select>
            <select>
                <option value="amenities" disabled selected>Amenities</option>
                <option value="basic_amenities">Basic Amenities</option>
                <option value="recreational_amenities">Recreational Amenities</option>
                <option value="green_spaces_and_landscaping">Green Spaces and Landscaping</option>
                <option value="children_amenities">Children's Amenities</option>
            </select>
        </div>
    )
}

export default Section2