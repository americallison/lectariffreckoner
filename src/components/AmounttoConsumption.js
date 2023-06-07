import React from 'react';


export default function AmounttoConsumption () {
    return (
        <div>
        <form>
        <p><label>Total Amount (USD): </label>
        <input className='w-30 border mb-2 bg-sky-100' 
        id='amount' name='totalamount' type="number"/></p>

        <p><label>Energy Charge (USD): </label>
        <input className='w-30 border mb-2 bg-yellow-100' 
        id='energy_charge' name='energycharge' type="text" value=""/></p>
        
        <p><label>GST (10% of Energy Charge): </label>
        <input className='w-30 border mb-2 bg-yellow-100' 
        id='gst_energy_charge' name='gstenergycharge' type="text" value="" /></p>

        <p><label>Fixed Charge ($/month): </label>
        <input className='w-30 border mb-2 bg-yellow-100' 
        id='fixed_charge' name='fixedcharge' type="text" value="" /></p>

        <p><label>GST (10% of Fixed Charge): </label>
        <input className='w-30 border mb-2 bg-yellow-100' 
        id='gst_fixed_charge' name='gst_fixed_charge' type="text" value="" /></p>

        <p><label>Fixed Charge ($/month): </label>
        <input className='w-30 border mb-2 bg-yellow-100' 
        id='fixed_charge' name='fixedcharge' type="text" value="" /></p>

        <p><label>Consumption (Kwh): </label>
        <input className='w-30 border mb-2 bg-yellow-100' 
        id='consumption_kwh' name='consumptionkwh' type="text" value="" /></p>


        </form>
        </div>
    )
}