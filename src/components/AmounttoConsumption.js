import React, { useState, useEffect } from 'react';


export default function AmounttoConsumption({ vendingMonth, setVendingMonth, vendingYear, setVendingYear,
  totalAmount, setTotalAmount, EnergyChargeSocial, EnergyCharge, GSTEnergyCharge, GSTEnergyChargeSocial,
  FixedChargePerMonth, SocialFixedChargePerMonth, ConsumptionKwh, socialConsumptionKwh, consumerType, negtotal,
  negconsumption, handleSubmitAmount, months, years
}) {
  return (
    <>
      <form>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="lastVendingMonth" className="block mb-1">
              Last Vending Month
            </label>
            <select
              id="vendingMonth"
              value={vendingMonth}
              onChange={(e) => setVendingMonth(e.target.value)}
              className="w-full border-none bg-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >

              {months.map((month) => (
                <option key={month.id} value={month.label}>{month.label}</option>
              ))}

            </select>
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="lastVendingYear" className="block mb-1">
              Last Vending Year
            </label>
            <select
              type="number"
              id="vendingYear"
              value={vendingYear}
              onChange={(e) => setVendingYear(e.target.value)}
              className="w-full border-none bg-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-black-500"
            >
              {years.map((year) => (
                <option key={year.id} value={year.label}>{year.label}</option>
              ))}

            </select>
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='w-4/12'>
            <label className='p-2'>Total Amount:</label>
          </div>
          <div className="w-8/12">
            <input className="bg-slate-200 p-2 border-none rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" 
        placeholder='Enter total amount (USD)' autoFocus min="1" id={totalAmount}
              value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)}

            />
          </div></div><hr className='mt-2'/>

        {
          consumerType === "Residential" ?
            (<>
              <div className="flex justify-between">
                <div className="w-4/12"></div>
                <div className="w-4/12">
                  <p className='font-medium m-2 text-center'>Social</p>
                </div>
                <div className="w-4/12">
                  <p className='font-medium m-2 text-center'>Residential</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-4/12">
                  <label className='p-2'>Energy Charge (USD):</label>
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
              value={EnergyChargeSocial}
            />
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
              value={EnergyCharge} 
            />
                </div>
              </div>


              <div className="flex justify-between">
                <div className="w-4/12">
                  <label className='p-2'>Fixed Charge (USD):</label>
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-black-700 font-light w-full" type="number" disabled id="fixedchargesocial"
              value={SocialFixedChargePerMonth} 
            />
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="GSTenergyCharge"
              value={FixedChargePerMonth} 
            />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-4/12">
                  <label className='p-2'>10% GST:</label>
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="GSTenergyChargeSocial"
              value={GSTEnergyChargeSocial}
            />
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="GSTenergyCharge"
              value={GSTEnergyCharge} 
            />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-4/12">
                  <label className='p-2'>Consumption (KWh):</label>
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-[#96E899] p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="GSTenergyChargeSocial"
              value={socialConsumptionKwh}
            />
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-[#96E899] p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="consumptionkwh"
              value={ConsumptionKwh} 
            />
                </div>
              </div>
            </>) : (<div>
              <div className='flex justify-between'>
          <div className='w-4/12'>
            <label className='p-2'>Energy Charge:</label>
          </div>
          <div className="w-8/12">
            <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
              value={EnergyCharge} 

            />
          </div></div>

          <div className='flex justify-between'>
          <div className='w-4/12'>
            <label className='p-2'>Fixed Charge (USD):</label>
          </div>
          <div className="w-8/12">
            <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
              value={FixedChargePerMonth} 
            />
          </div></div>

          <div className='flex justify-between'>
          <div className='w-4/12'>
            <label className='p-2'>10% GST:</label>
          </div>
          <div className="w-8/12">
            <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="gstenergyCharge"
              value={GSTEnergyCharge} 

            />
          </div></div>
</div>)}

{
  ConsumptionKwh < 0  && (consumerType === "Non-Residential" || consumerType === "Medium Voltage") ?
          <div className='flex justify-between'>
          <div className='w-4/12'>
            <label className='p-2'>Consumption (KwH):</label>
          </div>
          <div className="w-8/12">
            <input className="bg-red-100 p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
              value={ConsumptionKwh} 
            />
          </div></div> : <div className='flex justify-between'>
          <div className='w-4/12'>
            <label className='p-2'>Consumption (KwH):</label>
          </div>
          <div className="w-8/12">
            <input className="bg-[#96E899] p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
              value={ConsumptionKwh} 
            />
          </div></div>
             
}  



      </form>
    </>
  )
}