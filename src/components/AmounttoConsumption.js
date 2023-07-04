import React, { useState, useEffect } from 'react';


export default function AmounttoConsumption({ vendingMonth, setVendingMonth, totalAmount, setTotalAmount, EnergyCharge, GSTEnergyCharge, FixedChargePerMonth,
  ConsumptionKwh, socialConsumptionKwh, consumerType, negtotal, negconsumption }) {


    const months = [
  

      {
          id: 1,
          label: "January",
          name: "JanuaryMonth",
      },
  
      {
          id: 2,
          label: "February",
          name: "FebruaryMonth",
      },
  
      {
          id: 3,
          label: "March",
          name: "MarchMonth",
      },

      {
        id: 4,
        label: "April",
        name: "AprilMonth",
    },

    {
      id: 5,
      label: "May",
      name: "MayMonth",
  },
  
  {
    id: 6,
    label: "June",
    name: "JuneMonth",
},

{
  id: 7,
  label: "July",
  name: "JulyMonth",
},

{
  id: 8,
  label: "August",
  name: "AugustMonth",
},


{
  id: 9,
  label: "September",
  name: "SeptemberMonth",
},

{
  id: 10,
  label: "October",
  name: "OctoberMonth",
},

{
  id: 11,
  label: "November",
  name: "NovemberMonth",
},

{
  id: 12,
  label: "December",
  name: "DecemberMonth",
},
  ]

  return (
    <div>
      <form>

        <p className='p-1'><label>Last Month Vended: 
        <select className="mb-1 bg-sky-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none text-gray-700 font-light w-full md:w-12/12 bg-white"
                            id={months.name}
                            value={vendingMonth}
                            onChange={(e) => setVendingMonth(e.target.value)} required>

                            {months.map((month) => (
                                <option key={month.id} value={month.label}>{month.Label}</option>
                            ))}
                        </select></label>
        </p>

        <hr />


        <p className='p-1'><label>Total Amount (USD): </label>
          <input className="p-1 bg-sky-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-1 text-gray-700 font-light w-full md:w-12/12 bg-white"
            id='amount' name='totalamount' value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            min="0" placeholder='Enter amount' type="number" required /></p>

        {
          ConsumptionKwh < 0 ?
            (
              <p className='p-1'><label>Required Rechargable Amount (USD): </label>
                <input className="p-1 bg-sky-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-1 text-gray-700 font-light w-full md:w-12/12 bg-white"
                  id='negamount' name='negtotalamount' value={negtotal}
                  min="0" placeholder='Enter amount' type="number" required /></p>) : ""
        }

        <p className="p-1"><label>Energy Charge (USD): </label>
          <input className="p-1 bg-stone-200 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-1 text-gray-700 font-light w-full md:w-12/12 bg-white"
            id='energy_charge' value={EnergyCharge} name='energycharge' type="number"
          /></p>

        <p className='p-2'><label>Fixed Charge (USD/month): </label>
          <input className="p-2 bg-stone-200 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-1 text-gray-700 font-light w-full md:w-12/12 bg-white"
            id='fixed_charge' name='fixedcharge' type="text" value={FixedChargePerMonth} /></p>

        <p className='p-2'><label>GST (10% of Energy Charge): </label>
          <input className="p-2 bg-stone-200 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-1 text-gray-700 font-light w-full md:w-12/12 bg-white"
            id='gst_energy_charge' name='gstenergycharge' type="text" value={GSTEnergyCharge} /></p>


        {
          totalAmount <= 4.13 ?
            (<div>
              <div className="flex justify-between">
                <p className='p-2'><label>Consumption (Kwh): </label>
                  <input className="p-1 bg-stone-200 border-b-8 font-bold border-black shadow-sm leading-tight 
        focus:outline-none mb-2 w-full md:w-12/12 text-xl"
                    id='consumption_kwh' name='consumptionkwh' type="number" value={ConsumptionKwh} /></p>
                <p className='p-2'><label>Consumption (Kwh) as Social </label>
                  <input className="p-1 bg-stone-200 border-b-8 font-bold border-black shadow-sm leading-tight 
        focus:outline-none mb-2 w-full md:w-12/12 text-xl"
                    id='consumption_kwh' name='consumptionkwh' type="number" value={socialConsumptionKwh} /></p>
              </div>
              <p className="m-1 p-2 text-xl font-light bg-yellow-50">If you recharge&nbsp;
                <strong><em>{totalAmount}USD</em></strong>,
                you will get <strong><em>{ConsumptionKwh}Kwh as {consumerType}</em></strong></p>
              <p className="m-1 p-2 text-xl font-light bg-yellow-50">If you recharge&nbsp;
                <strong><em>{totalAmount}USD</em></strong>,
                you will get <strong><em>{socialConsumptionKwh}Kwh as Social.</em></strong> </p>
            </div>) :
            (<div>
              <p className='p-2'><label>Consumption (Kwh): </label>
                <input className="p-1 bg-stone-200 border-b-8 font-bold border-black shadow-sm leading-tight 
       focus:outline-none mb-2 w-full md:w-12/12 text-xl"
                  id='consumption_kwh' name='consumptionkwh' type="number" value={ConsumptionKwh} /></p>
              <p className="m-1 p-2 text-xl font-light bg-yellow-50">If you recharge&nbsp;
                <strong><em>{totalAmount}USD</em></strong>,
                you will get <strong><em>{ConsumptionKwh}Kwh as {consumerType}</em></strong></p>
            </div>) }
            {ConsumptionKwh < 0 && <div className="flex justify-between">
                <p className='p-2'><label>Consumption (Kwh): </label>
                  <input className="p-1 bg-stone-200 border-b-8 font-bold border-black shadow-sm leading-tight 
        focus:outline-none mb-2 w-full md:w-12/12 text-xl"
                    id='negconsumption_kwh' name='negconsumptionkwh' type="number" value={negconsumption} /></p>
                <p className='p-2'><label>Consumption (Kwh) as Social </label>
                  <input className="p-1 bg-stone-200 border-b-8 font-bold border-black shadow-sm leading-tight 
        focus:outline-none mb-2 w-full md:w-12/12 text-xl"
                    id='consumption_kwh' name='consumptionkwh' type="number" value={socialConsumptionKwh} /></p>
              </div>
      }
      </form>
    </div>

  )
}