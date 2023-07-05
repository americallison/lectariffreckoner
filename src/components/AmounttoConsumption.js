import React, { useState, useEffect } from 'react';


export default function AmounttoConsumption({ vendingMonth, setVendingMonth, vendingYear, setVendingYear,
   totalAmount, setTotalAmount, EnergyChargeSocial, EnergyCharge, GSTEnergyCharge, GSTEnergyChargeSocial,
    FixedChargePerMonth,ConsumptionKwh, socialConsumptionKwh, consumerType, negtotal, 
    negconsumption, months, years, 
}) 
  
  {
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
          <input
            type="number"
            id="vendingYear"
            value={vendingYear}
            onChange={(e) => setVendingYear(e.target.value)}
            className="w-full border-none bg-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-black-500"
          />
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="amount" className="block font-medium mb-1">
          Total Amount
        </label>
        <input
          type="number"
          id="amount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="energyCharge" className="block font-medium mb-1">
          Energy Charge
        </label>
        <input
          type="number"
          id="energyCharge"
          value={EnergyCharge}
          className="w-full border-gray-300 border rounded-md px-3 py-2 
          focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

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