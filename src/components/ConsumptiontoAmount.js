import React from 'react';


export default function ConsumptiontoAmount({ vendingDate, setVendingDate,
    EnergyCharge, GSTEnergyCharge, FixedChargePerMonth, todaysDate, consumerType,
    ConsumptionKwhFirst, setConsumptionKwhFirst, totalAmountLast, SocialtotalAmount }) {

    return (
        <div>
            <form>

                <p className='p-2'><label>Last Month Vended: </label>
                    <input className="w-50 font-medium p-2 border" value={vendingDate} 
                    max={todaysDate} name="vendingdate" type='date' required
                        onChange={(e) => setVendingDate(e.target.value)} />
                </p>


                <hr />

                <p className='p-2'><label>Consumption (Kwh): </label>
                    <input className="p-1 bg-stone-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                        id='consumption_kwh' name='consumptionkwh' type="number" value={ConsumptionKwhFirst}
                        placeholder='Enter consumption (Kwh)' onChange={(e) => setConsumptionKwhFirst(e.target.value)} /></p>


                <p className="p-2"><label>Energy Charge (USD): </label>
                    <input className="p-1 bg-stone-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                        id='energy_charge' value={EnergyCharge} name='energycharge' type="number"
                    /></p>

                <p className='p-2'><label>Fixed Charge (USD/month): </label>
                    <input className="p-1 bg-stone-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                        id='fixed_charge' name='fixedcharge' type="text" value={FixedChargePerMonth} /></p>

                <p className='p-2'><label>GST (10% of Energy Charge): </label>
                    <input className="p-1 bg-stone-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                        id='gst_energy_charge' name='gstenergycharge' type="text" value={GSTEnergyCharge} /></p>


                {
        ConsumptionKwhFirst <= 25 ?
         
        <div>
           <div className="flex justify-between">
          <p className='p-1'><label>Total Amount (USD): </label>
            <input className="p-1 bg-stone-200 border-b-8 font-bold border-black shadow-sm leading-tight 
        focus:outline-none mb-2 w-full md:w-12/12 text-xl"
              id='total_amount' name='totalamount' type="number" value={totalAmountLast} /></p>
                <p className='p-1'><label>Total Amount as Social </label>
            <input className="p-1 bg-stone-200 border-b-8 font-bold border-black shadow-sm leading-tight 
        focus:outline-none mb-2 w-full md:w-12/12 text-xl"
              id='total_amount' name='totalamount' type="number" value={SocialtotalAmount} /></p>
        </div>
          <p className="m-1 p-2 text-xl font-light bg-yellow-50">If you need&nbsp;
          <strong><em>{ConsumptionKwhFirst}Kwh</em></strong>,
          you must recharge <strong><em>{totalAmountLast}USD as {consumerType}</em></strong></p>
          <p className="m-1 p-2 text-xl font-light bg-yellow-50">If you need&nbsp;
          <strong><em>{ConsumptionKwhFirst}Kwh</em></strong>,
          you must recharge <strong><em>{SocialtotalAmount}USD as Social.</em></strong> </p>
          </div> : 
          <div>
           <p className='p-1'><label>Total Amount (USD): </label>
           <input className="p-1 bg-stone-200 border-b-8 font-bold border-black shadow-sm leading-tight 
       focus:outline-none mb-2 w-full md:w-12/12 text-xl"
             id='consumption_kwh' name='consumptionkwh' type="number" value={totalAmountLast} /></p> 
         <p className="m-1 p-2 text-xl font-light bg-yellow-50">If you need&nbsp;
         <strong><em>{ConsumptionKwhFirst}Kwh</em></strong>,
         you must recharge <strong><em>{totalAmountLast}USD as {consumerType}</em></strong> </p>
        </div>
      }
            </form>
        </div>
    )
}