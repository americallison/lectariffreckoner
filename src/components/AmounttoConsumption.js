import React, { useState, useEffect } from 'react';


export default function AmounttoConsumption({ vendingMonth, setVendingMonth, vendingYear, setVendingYear,
  totalAmount, setTotalAmount, EnergyChargeSocial, EnergyCharge, GSTEnergyCharge, GSTEnergyChargeSocial,
  FixedChargePerMonth, SocialFixedChargePerMonth, ConsumptionKwh, socialConsumptionKwh, consumerType,
  presentmonth, months, years, monthss, handleCloseAlert, presentDate, monthNumber, serviceChargeDebt
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
              className="w-full border-none bg-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            
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

        {
          (presentmonth - monthss.indexOf(vendingMonth) < 0) && (vendingYear == presentDate.getFullYear()) ? (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-80">
              <div className="p-4 bg-white rounded-lg border-l-4 border-red-300 shadow-lg">
                <p className="font-bold bg-white text-black text-center p-1 m-1 text-xl">FUTURE DATE IS NOT ALLOWED!!</p>
                <p className="text-base text-black p-1 mt-3">Please select a month before {monthss[presentmonth + 1]}</p>
                <button className="mt-4 px-4 py-2 bg-black justify-center items-center text-white rounded" onClick={handleCloseAlert}>
                  Close
                </button>
              </div>
            </div>
          ) : null}

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
          </div></div><hr className='mt-2' />

        {
          (consumerType === "Residential" && ConsumptionKwh >= 0) && <>
            <div className="flex justify-between">
              <div className="w-4/12"></div>
              <div className="w-4/12">
                <p className='font-medium m-2 text-center'>Social</p>
              </div>
              <div className="w-4/12">
                <p className='font-medium m-2 text-center'>Residential</p>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="w-4/12">
                <label className='p-2'>Energy Charge (USD):</label>
              </div>
              <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="energyCharge"
                  value={EnergyChargeSocial}
                />
              </div>
              <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="energyCharge"
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
        focus:outline-none mb-2 text-black-700 font-light opacity-100 w-full" type="number" disabled id="fixedchargesocial"
                  value={SocialFixedChargePerMonth}
                />
              </div>
              <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="GSTenergyCharge"
                  value={FixedChargePerMonth}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-4/12">
                <label className='p-2 mt-4'>10% GST:</label>
              </div>
              <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="GSTenergyChargeSocial"
                  value={GSTEnergyChargeSocial}
                />
              </div>
              <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="GSTenergyCharge"
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
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="GSTenergyChargeSocial"
                  value={socialConsumptionKwh}
                />
              </div>
              <div className="w-4/12 p-2">
                <input className="bg-[#96E899] p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="consumptionkwh"
                  value={ConsumptionKwh}
                />
              </div>
            </div>
          </>}


        {
          (consumerType === "Residential" && ConsumptionKwh < 0) && <>
            <div className="flex justify-between">
              <div className="w-4/12"></div>
              <div className="w-4/12">
                <p className='font-medium m-2 text-center'>Social</p>
              </div>
              <div className="w-4/12">
                <p className='font-medium m-2 text-center'>Residential</p>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="w-4/12">
                <label className='p-2'>Energy Charge (USD):</label>
              </div>
              <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="energyCharge"
                  value={EnergyChargeSocial}
                />
              </div>
              <div className="w-4/12 p-2">
                <input className="bg-white p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light opacity-100 w-full" type="number" disabled id="energyCharge"
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
                <input className="bg-red-100 p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="consumptionkwh"
                  value={ConsumptionKwh}
                />
              </div>
            </div>
            <div className='flex'>
              <div className='w-4/12'></div>
              <div className='w-4/12'></div>
              <div className='w-4/12'>
                <div className="bg-white p-2 shadow m-1">
                  <p className='text-red-500'>
                    You owe <span className="font-bold text-red-700 rounded p-1">${serviceChargeDebt}</span> in service charge for
                    <span className="font-bold text-red-700 rounded p-1">{monthNumber} month (s)</span>. Therefore
                    you must purchase an amount in excess of<span className="font-bold text-red-700 rounded p-1">${serviceChargeDebt}</span>.
                  </p>
                </div>
              </div>
            </div>
          </>}



        {
          ConsumptionKwh >= 0 && (consumerType === "Non-Residential" || consumerType === "Medium Voltage") &&
          <div>
            <div className='flex mt-3 justify-between'>
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

            <div className='flex justify-between'>
              <div className='w-4/12'>
                <label className='p-2'>Consumption (KWh):</label>
              </div>
              <div className="w-8/12">
                <input className="bg-[#96E899] p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
                  value={ConsumptionKwh}
                />
              </div></div>
          </div>

        }


        {
          ConsumptionKwh < 0 && (consumerType === "Non-Residential" || consumerType === "Medium Voltage") &&
          <div>
            <div className='flex justify-between mt-3'>
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

            <div className='flex justify-between'>
              <div className='w-4/12'>
                <label className='p-2'>Consumption (KWh):</label>
              </div>
              <div className="w-8/12">
                <input className="bg-red-100 p-2 border border-slate-200 rounded-md shadow-sm leading-tight 
        focus:outline-none mb-2 text-gray-700 font-light w-full" type="number" disabled id="energyCharge"
                  value={ConsumptionKwh}
                />
              </div></div>
            <div className='flex'>
              <div className='w-4/12'></div>

              <div className='w-8/12'>
                <div className="bg-white p-2 shadow m-1">
                  <p className='text-red-500'>
                    You owe <span className="font-bold text-red-700 rounded p-1">${serviceChargeDebt}</span> in service charge for
                    <span className="font-bold text-red-700 rounded p-1">{monthNumber} month (s)</span>. Therefore
                    you must purchase an amount in excess of<span className="font-bold text-red-700 rounded p-1">${serviceChargeDebt}</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }



      </form>
    </>
  )
}