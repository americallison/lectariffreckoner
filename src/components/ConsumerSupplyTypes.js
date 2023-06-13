import React, { useState } from 'react';



const consumer_type = [
  

    {
        id: 1,
        label: "Residential",
        value: "residential",
        name: "residentialconsumer",
    },

    {
        id: 2,
        label: "Non-Residential",
        value: "non-residential",
        name: "non-residentialconsumer",
    },

    {
        id: 3,
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



]



export default function ConsumerSupplyType({ consumerType, setConsumerType, supplyType, setSupplyType }) {

    return (
        <div>

            <form className='mt-1 mb-1'>
                
                    <p className='p-1'><label>Consumer Type:&nbsp;
                        <select className="mb-1 bg-sky-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none text-gray-700 font-light w-full md:w-12/12 bg-white"
                            id={consumer_type.name}
                            value={consumerType}
                            onChange={(e) => setConsumerType(e.target.value)} >

                            {consumer_type.map((consumer) => (
                                <option key={consumer.id} value={consumer.label}>{consumer.label}</option>
                            ))}
                        </select></label></p>
                    <p className='p-1'><label>Supply Type:&nbsp;
                        <select className="bg-sky-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-1 text-gray-700 font-light w-full md:w-12/12 bg-white" id={supply_type.name}
                            value={supplyType} onChange={(e) => setSupplyType(e.target.value)}>
                            {supply_type.map((supply) => (
                                <option key={supply.id} value={supply.label}>{supply.label}</option>
                            ))}
                        </select></label></p>
                
            </form>
        </div>
    )
}