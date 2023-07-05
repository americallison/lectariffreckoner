import React, { useState, useEffect } from 'react';


export default function AmounttoConsumption({ vendingMonth, setVendingMonth, vendingYear, setVendingYear,
  totalAmount, setTotalAmount, EnergyChargeSocial, EnergyCharge, GSTEnergyCharge, GSTEnergyChargeSocial,
  FixedChargePerMonth, ConsumptionKwh, socialConsumptionKwh, consumerType, negtotal,
  negconsumption, months, years
}) {
  return (
    <>
      <form>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="lastVendingMonth" className="block font-medium mb-1">
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
            <label htmlFor="lastVendingYear" className="block font-medium mb-1">
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
            <input className="bg-slate-200 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" id={totalAmount}
              value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)}

            />
          </div></div>

        {
          consumerType === "Residential" ?
            (<>
              <div className="flex justify-between">
                <div className="w-4/12"></div>
                <div className="w-4/12">
                  <p className='font-medium m-2'>Social</p>
                </div>
                <div className="w-4/12">
                  <p className='font-medium m-2'>Residential</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-4/12">
                  <label className='p-2'>Energy Charge</label>
                </div>
                <div className="w-4/12">
                <input className="bg-red-100 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none m-2 text-gray-700 font-light w-full" type="number" id="energyCharge"
              value={EnergyChargeSocial}
            />
                </div>
                <div className="w-4/12">
                <input className="bg-red-100 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none m-2 text-gray-700 font-light w-full" type="number" id="energyCharge"
              value={EnergyCharge} 
            />
                </div>
              </div>

/* GST */
              <div className="flex justify-between">
                <div className="w-4/12">
                  <label className='p-2'>10% GST</label>
                </div>
                <div className="w-4/12">
                <input className="bg-red-100 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" id="GSTenergyChargeSocial"
              value={GSTEnergyChargeSocial}
            />
                </div>
                <div className="w-4/12">
                <input className="bg-red-100 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" id="GSTenergyCharge"
              value={GSTEnergyCharge} 
            />
                </div>
              </div>
            </>) : (<div>
              <div className='flex justify-between'>
          <div className='w-4/12'>
            <label className='p-2'>Energy Charge:</label>
          </div>
          <div className="w-8/12">
            <input className="bg-red-200 p-2 border-none rounded shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" id="energyCharge"
              value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)}

            />
          </div></div>
            </div>)
        }

      



        <div className="mb-4">
          <label htmlFor="gstEnergyCharge" className="block font-medium mb-1">
            GST Energy Charge
          </label>
          <input
            type="number"
            id="gstEnergyCharge"
            value={GSTEnergyCharge}
            className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

      </form>
    </>
  )
}