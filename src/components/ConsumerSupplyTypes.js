import React, { useState } from 'react';



const consumer_type = [
    {    
        id: 1,
        label: "Social",
        value: "social",
        name: "socialconsumer",
    },

    {
        id: 2,
        label: "Residential",
        value: "residential",
        name: "residentialconsumer",
    },

    {
        id: 3,
        label: "Non-Residential",
        value: "non-residential",
        name: "non-residentialconsumer",
    },

    {
        id: 4,
        label: "Medium Voltage",
        value: "medium-voltage",
        name: "medium-voltageconsumer",
    },

]

const supply_type = [
    {    
        id: 1,
        label: "Prepaid",
        value: "prepaid",
        name: "prepaid_supply",
    },

    {
        id: 2,
        label: "Postpaid",
        value: "postpaid",
        name: "postpaid_supply",
    },

    {
        id: 3,
        label: "None",
        value: "none",
        name: "none_supply",
    },

]



export default function ConsumerSupplyType () {
    
    
    return (
        <div>
        
        <form className='mt-2 mb-2'>
        <p><label>Consumer Type:&nbsp;
        <select className="mb-2" id={consumer_type.name} value={consumer_type.value} onChange="" >
        {consumer_type.map((consumer) => (
            <option key={consumer.id} value={consumer.name}>{consumer.label}</option>
        ))}
        </select></label></p>
       <p><label>Supply Type:&nbsp;
        <select className="" id={supply_type.name} value={supply_type.value} onChange="">
        {supply_type.map((supply) => (
            <option key={supply.id} value={supply.name}>{supply.label}</option>
        ))}
        </select></label></p>
       
        </form>
        </div>
    )
}