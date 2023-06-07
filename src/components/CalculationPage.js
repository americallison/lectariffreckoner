import React, {useState} from "react";
import ConsumerSupplyType from "./ConsumerSupplyTypes";
import ConsumptiontoAmount from "./ConsumptiontoAmount";
import AmounttoConsumption from "./AmounttoConsumption";
import AmounttoConsumptionTitle from './AmounttoConsumptionTitle';
import ConsumptiontoAmountTitle from './ConsumptiontoAmountTitle';


const calculation_preference = [
    {    
        id: 1,
        label: "Total Amount ($US)",
        value: "totalamountus",
        name: "amount_preference",
    },

    {
        id: 2,
        label: "Consumption (Kwh)",
        value: "consumption_kwh",
        name: "consumption_preference",
    },
]

export default function CalculationPage () {
    const [preference, setPreference] = useState("Total Amount ($US) - Consumption (Kwh)")
    const [preferenceIsActive, setPreferenceIsActive] = useState({
        isActive: true,
        name: 'amount_preference'
    })
     
    function handleActivePreference (event) {
        event.preventDefault();
        setPreferenceIsActive({
            isActive: true,
            name: event.target.value,
           })
   
           setPreference(event.target.value)
      } 

    return (
        <div>
        <h3 className="text-2xl mb-2">LEC Tariff Reckoner</h3>
       
        {
            preferenceIsActive.isActive && preferenceIsActive.name === 'amount_preference' ? 
            (<AmounttoConsumptionTitle />) : (<ConsumptiontoAmountTitle />) 
        }
        <ConsumerSupplyType />

        <p className="mb-2"><label>Calculation Preference:&nbsp;
        <select id={preference.name} value={preference} onChange={handleActivePreference}>
        {calculation_preference.map((preference) => (
            <option key={preference.id} value={preference.name}>{preference.label}</option>
        ))}
        </select></label></p>
{
    preferenceIsActive.isActive && preferenceIsActive.name === 'amount_preference' ? 
    (<AmounttoConsumption />) : (<ConsumptiontoAmount />) 
}
        </div>
    )
}