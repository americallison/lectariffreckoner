import React from 'react';


export default function ConsumptiontoAmount({ vendingDate, setVendingDate,
     EnergyCharge, GSTEnergyCharge, FixedChargePerMonth,
    ConsumptionKwhFirst, setConsumptionKwhFirst, totalAmountLast }) {

    return (
        <div>
            <form>

                <p className='p-2'><label>Last Month Vended: </label>
                    <input className="w-50 font-medium p-2 border" value={vendingDate} name="vendingdate" type='date' required
                        onChange={(e) => setVendingDate(e.target.value)} />
                </p>
                <p className='p-2'>Is this the first vending of the month?</p>

               <hr />
                <div className="flex justify-between">
                    <p className='p-2'><label>Consumption (Kwh): </label>
                        <input className="p-1 bg-stone-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                            id='consumption_kwh' name='consumptionkwh' type="text" value={ConsumptionKwhFirst}
                            placeholder='Enter consumption (Kwh)' onChange={(e) => setConsumptionKwhFirst(e.target.value)} /></p>


                    <p className="p-2"><label>Energy Charge (USD): </label>
                        <input className="p-1 bg-stone-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                            id='energy_charge' value={EnergyCharge} name='energycharge' type="number"
                        /></p>

                </div>
                <div className='flex justify-between'>
                    <p className='p-2'><label>GST (10% of Energy Charge): </label>
                        <input className="p-1 bg-stone-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                            id='gst_energy_charge' name='gstenergycharge' type="text" value={GSTEnergyCharge} /></p>

                    <p className='p-2'><label>Fixed Charge (USD/month): </label>
                        <input className="p-1 bg-stone-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                            id='fixed_charge' name='fixedcharge' type="text" value={FixedChargePerMonth} /></p>
                </div>
                <div>
                    <p className='p-2'><label>Total Amount (USD): </label>
                        <input className="p-1 bg-sky-100 border-b-4 border-black shadow-sm leading-tight 
focus:outline-none mb-3 text-gray-700 font-light w-full md:w-12/12 bg-white"
                            id='amount' name='totalamount' value={totalAmountLast}
                           type="number" required /></p>

                </div>
            </form>
        </div>
    )
}