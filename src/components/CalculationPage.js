import React, { useState, useEffect } from "react";
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


export default function CalculationPage() {
    /*declare variables to be used in calculation */
    const [consumerType, setConsumerType] = useState("Social");
    const [supplyType, setSupplyType] = useState("Prepaid");
    const [vendingDate, setVendingDate] = useState("");
    const [vendingtime, setVendingTime] = useState("Yes");
    const [totalAmount, setTotalAmount] = useState(0);
    const [EnergyCharge, setEnergyCharge] = useState(0);
    const [FixedChargePerMonth, setFixedChargePerMonth] = useState(0);
    const [GSTEnergyCharge, setGSTEnergyCharge] = useState(0);
    const [ConsumptionKwh, setConsumptionKwh] = useState(0);


    let currentDate = new Date();
    let newVendingDate = new Date(vendingDate)
    console.log(vendingtime)



    /* change preference type */
    const [preference, setPreference] = useState("Total Amount ($US) - Consumption (Kwh)")
    const [preferenceIsActive, setPreferenceIsActive] = useState({
        isActive: true,
        name: 'amount_preference'
    })

    /* Function to change calculation preference */
    function handleActivePreference(event) {
        event.preventDefault();
        setPreferenceIsActive({
            isActive: true,
            name: event.target.value,
        })

        setPreference(event.target.value)
    }

    /* Logic for Energy Charge start */
    useEffect(() => {

        let newEnergyCharge = 0;

        if (consumerType === "Social") {
            newEnergyCharge = 0.15;
        }
        else if (consumerType === "Residential" && (supplyType === "Prepaid" || supplyType === "Postpaid")) {
            newEnergyCharge = 0.24;
        }
        else if (consumerType === "Non-Residential" && (supplyType === "Prepaid" || supplyType === "Postpaid")) {
            newEnergyCharge = 0.22;
        }
        else if (consumerType === "Medium Voltage" && (supplyType === "Prepaid" || supplyType === "Postpaid")) {
            newEnergyCharge = 0.19;
        }

        setEnergyCharge(newEnergyCharge);
    }, [consumerType, supplyType]);

    /* Logic for Energy Charge end */

    let yeardifference = currentDate.getFullYear() - newVendingDate.getFullYear();
    let monthdifference = currentDate.getMonth() - newVendingDate.getMonth();
    let daydifference = currentDate.getDate() - newVendingDate.getDate();
    /* Logic for fixed charge per month start */
    useEffect(() => {

        let newFixedChargePerMonth = 0;
       

        console.log("Date:", daydifference)
        console.log("Month:", monthdifference)
        console.log("Year:", yeardifference)
        console.log(totalAmount /(EnergyCharge + GSTEnergyCharge))

        if (yeardifference === 0 && monthdifference < 1) {
            setVendingTime("No");
            newFixedChargePerMonth = 0;
        }
        else if (consumerType === "Residential" && supplyType === "Prepaid" && yeardifference === 0 &&
            monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 2.48;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Residential" && supplyType === "Postpaid" && yeardifference === 0 &&
            monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 4.47;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Non-Residential" && supplyType === "Prepaid" && yeardifference === 0 &&
            monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 10;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Non-Residential" && supplyType === "Postpaid" && yeardifference === 0 &&
            monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 12;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Medium Voltage" && yeardifference === 0 &&
            monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 50;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }

        setFixedChargePerMonth(newFixedChargePerMonth);
    }, [currentDate, newVendingDate, consumerType, supplyType]);
    /* Logic for fixed charge per month start */


    /* Logic for 10% GST start */
    useEffect(() => {

        let newGSTEnergyCharge = 0;

        if (FixedChargePerMonth === 0) {
            newGSTEnergyCharge = EnergyCharge / 10;
        }
        else if (FixedChargePerMonth > 0) {
            newGSTEnergyCharge = (FixedChargePerMonth + EnergyCharge) / 10;
            newGSTEnergyCharge = parseFloat(newGSTEnergyCharge.toFixed(3))
        }

        setGSTEnergyCharge(newGSTEnergyCharge);
    }, [EnergyCharge, consumerType, supplyType, FixedChargePerMonth]);
    /* Logic for 10% GST end */

    /* Logic for calculating consumption(kwh) start*/
    useEffect(() => {

        let newConsumptionKwh = 0;

        if (consumerType === "Social" && totalAmount <= 4.13) {
            newConsumptionKwh = totalAmount / (EnergyCharge + GSTEnergyCharge);
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Social" && totalAmount > 4.13) {
            newConsumptionKwh = 0;
            alert("A social customer cannot spend more than $4.13. Please choose another customer type (e. g. Residential)")
        }
        else if (consumerType === "Residential" && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && vendingtime === "Yes" && totalAmount >= 1) {
            newConsumptionKwh = (totalAmount - (GSTEnergyCharge + FixedChargePerMonth)) / EnergyCharge;
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Non-Residential" && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && vendingtime === "Yes" && totalAmount >= 1) {
            newConsumptionKwh = (totalAmount - (GSTEnergyCharge + FixedChargePerMonth)) / EnergyCharge;
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Medium Voltage" && vendingtime === "Yes" && totalAmount >= 1) {
            newConsumptionKwh = (totalAmount - (GSTEnergyCharge + FixedChargePerMonth)) / EnergyCharge;
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Residential" &&  supplyType === "Prepaid" ||
        supplyType === "Postpaid" && monthdifference === 0 && vendingtime === "No") {
            newConsumptionKwh = (totalAmount / (EnergyCharge + GSTEnergyCharge));
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        
        else if (consumerType === "Non-Residential" && supplyType === "Prepaid" || 
        supplyType === "Postpaid" && vendingtime === "No") {
            newConsumptionKwh = (totalAmount / (EnergyCharge + GSTEnergyCharge));
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        setConsumptionKwh(newConsumptionKwh);

    }, [totalAmount, supplyType, consumerType, EnergyCharge, GSTEnergyCharge, vendingtime])

    /* function CalculateAmount (e) {
         e.preventDefault();
 
         let newConsumptionKwh = 0;
 
         if (consumerType === "Social") {
             newConsumptionKwh = totalAmount/(EnergyCharge + GSTEnergyCharge);
             newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
         }
 
         setConsumptionKwh(newConsumptionKwh);
     }
 */
    return (
        <div className="flex container p-4">
            <div className="md:w-3/12"></div>
            <div className="md:w-6/12 w-full">
                <h3 className="text-2xl mb-2 text-center container p-2">LEC Tariff Reckoner</h3>

                {
                    preferenceIsActive.isActive && preferenceIsActive.name === 'amount_preference' ?
                        (<AmounttoConsumptionTitle />) : (<ConsumptiontoAmountTitle />)
                }
                <br />

                <p className="p-2">
                    <label>Calculation Preference:&nbsp;
                        <select className="mb-2 bg-sky-100 border-b-4 border-yellow-300 shadow-sm leading-tight 
        focus:outline-none text-gray-700 font-light w-full md:w-12/12 bg-white" id={preference.name} value={preference} onChange={handleActivePreference}>
                            {calculation_preference.map((preference) => (
                                <option key={preference.id} value={preference.name}>{preference.label}</option>
                            ))}
                        </select>
                    </label>
                </p>

                <ConsumerSupplyType consumerType={consumerType} setConsumerType={setConsumerType}
                    supplyType={supplyType} setSupplyType={setSupplyType} />
                {
                    preferenceIsActive.isActive && preferenceIsActive.name === 'amount_preference' ?
                        (<AmounttoConsumption totalAmount={totalAmount} setTotalAmount={setTotalAmount}
                            EnergyCharge={EnergyCharge} GSTEnergyCharge={GSTEnergyCharge}
                            vendingDate={vendingDate} setVendingDate={setVendingDate}
                            FixedChargePerMonth={FixedChargePerMonth} vendingtime={vendingtime}
                            setVendingTime={setVendingTime} ConsumptionKwh={ConsumptionKwh}
                            setConsumptionKwh={setConsumptionKwh} />) :
                        (<ConsumptiontoAmount ConsumptionKwh={ConsumptionKwh} setConsumptionKwh={setConsumptionKwh}
                            EnergyCharge={EnergyCharge} GSTEnergyCharge={GSTEnergyCharge} />)
                }
            </div>
            <div className="md:w-3/12">

            </div>
        </div>
    )
}