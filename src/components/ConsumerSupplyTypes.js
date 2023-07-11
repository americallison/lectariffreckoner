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

       {
        consumerType === "Medium Voltage" ?
            (<form className='mb-2'>
                <div className="flex justify-between">
                <div className="md:w-4/12 w-6/12">
                  <label className="p-2">Consumer Type:</label>
                  </div>
                  <div className="md:w-8/12 w-6/12">
                        <select className="mb-2 bg-slate-200 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none text-gray-700 font-light w-full"
                            id={consumer_type.name}
                            value={consumerType}
                            onChange={(e) => setConsumerType(e.target.value)} >
                            {consumer_type.map((consumer) => (
                                <option key={consumer.id} value={consumer.label}>{consumer.label}</option>
                            ))}
                        </select>
                        </div>
                        </div>
</form>) : (<form className='mb-2'>
                <div className="flex justify-between">
                <div className="md:w-4/12 w-6/12">
                  <label className="p-2">Consumer Type:</label>
                  </div>
                  <div className="md:w-8/12 w-6/12">
                        <select className="mb-2 bg-slate-200 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none text-gray-700 font-light w-full"
                            id={consumer_type.name}
                            value={consumerType}
                            onChange={(e) => setConsumerType(e.target.value)} >
                            {consumer_type.map((consumer) => (
                                <option key={consumer.id} value={consumer.label}>{consumer.label}</option>
                            ))}
                        </select>
                        </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-6/12 md:w-4/12'>
                    <label className='p-2'>Supply Type:</label>
                    </div>
                    <div className="w-6/12 md:w-8/12">
                        <select className="bg-slate-200 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" id={supply_type.name}
                            value={supplyType} onChange={(e) => setSupplyType(e.target.value)}>
                            {supply_type.map((supply) => (
                                <option key={supply.id} value={supply.label}>{supply.label}</option>
                            ))}
                        </select>
                        </div></div>
                
            </form>)}
        </div>
    )
}