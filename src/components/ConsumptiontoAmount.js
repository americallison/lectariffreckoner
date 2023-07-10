import React from 'react';


export default function ConsumptiontoAmount({ 
    EnergyCharge, EnergyChargeSocial, GSTEnergyCharge, GSTEnergyChargeSocial, FixedChargePerMonth, 
    SocialFixedChargePerMonth, consumerType,
    ConsumptionKwhFirst, setConsumptionKwhFirst, totalAmountLast, SocialtotalAmount,
vendingMonth, setVendingMonth, vendingYear, setVendingYear, months, years }) {

    return (
        <div>
            <form>

            <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="lastVendingMonth" className="block font-medium mb-1">
              Last Vending Month
            </label>
            <select
              id="vendingMonth1"
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
            <label className='p-2'>Consumption (KWh):</label>
          </div>
          <div className="w-8/12">
            <input className="bg-slate-200 p-2 border-none rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" 
        placeholder="Enter total consumption (KWh)" type="number" min="1" id="ConsumptionKwhFirst"
              value={ConsumptionKwhFirst} onChange={(e) => setConsumptionKwhFirst(e.target.value)}

            />
          </div></div> 



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
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="GSTenergyChargeSocial"
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
                <input className="bg-stone-300 p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="GSTenergyCharge"
              value={GSTEnergyCharge} 
            />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-4/12">
                  <label className='p-2'>Total Amount (USD):</label>
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-[#96E899] p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="SocialtotalAmount"
              value={SocialtotalAmount}
            />
                </div>
                <div className="w-4/12 p-2">
                <input className="bg-[#96E899] p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="totalAmount"
              value={totalAmountLast} 
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
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
              value={GSTEnergyCharge} 

            />
          </div></div>

          <div className='flex justify-between'>
          <div className='w-4/12'>
            <label className='p-2'>Total Amount (USD):</label>
          </div>
          <div className="w-8/12">
            <input className="bg-[#96E899] p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="totalAmount"
              value={totalAmountLast} 
            />
          </div></div>
            </div>)
        }

<hr />


            </form>
        </div>
    )
}