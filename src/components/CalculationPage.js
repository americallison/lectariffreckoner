import React, { useState, useEffect } from "react";
import ConsumerSupplyType from "./ConsumerSupplyTypes";
import ConsumptiontoAmount from "./ConsumptiontoAmount";
import AmounttoConsumption from "./AmounttoConsumption";
import AmounttoConsumptionTitle from './AmounttoConsumptionTitle';
import ConsumptiontoAmountTitle from './ConsumptiontoAmountTitle';
import LEC_LOGO from '../images/lec_logo.jpg';


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
    const [consumerType, setConsumerType] = useState("Residential");
    const [supplyType, setSupplyType] = useState("Prepaid");
    const [vendingDate, setVendingDate] = useState(new Date("2023-06-12"));
    const [vendingtime, setVendingTime] = useState("Yes");
    const [totalAmount, setTotalAmount] = useState(0);
    const [EnergyCharge, setEnergyCharge] = useState(0);
    const [FixedChargePerMonth, setFixedChargePerMonth] = useState(0);
    const [GSTEnergyCharge, setGSTEnergyCharge] = useState(0);
    const [ConsumptionKwh, setConsumptionKwh] = useState(0);
    const [ConsumptionKwhFirst, setConsumptionKwhFirst] = useState(0);
    const [totalAmountLast, setTotalAmountLast] = useState(0);
    const [socialConsumptionKwh, setSocialConsumptionKwh] = useState(0);
    const [SocialtotalAmount, setSocialtotalAmount] = useState(0);

    const todaysDate = new Date().toISOString().split('T')[0];

    const SocialEnergyCharge = 0.15;
    const SocialGSTEnergyCharge = SocialEnergyCharge / 10;
    let currentDate = new Date();
    let newVendingDate = new Date(vendingDate);
    let charge = Number(totalAmount) + Number(FixedChargePerMonth) + Number(GSTEnergyCharge);
    console.log(charge)

    /* change preference type */
    const [preference, setPreference] = useState("Total Amount ($US) - Consumption (Kwh)");
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

        if (consumerType === "Residential" && (supplyType === "Prepaid" || supplyType === "Postpaid")) {
            newEnergyCharge = 0.24;
        }
        else if (consumerType === "Non-Residential" && (supplyType === "Prepaid" || supplyType === "Postpaid")) {
            newEnergyCharge = 0.22;
        }
        else if (consumerType === "Medium Voltage" && (supplyType === "Prepaid" || supplyType === "Postpaid")) {
            newEnergyCharge = 0.19;
        }

        setEnergyCharge(newEnergyCharge);
    }, [consumerType, supplyType, totalAmount]);

    /* Logic for Energy Charge end */

    let yeardifference = (currentDate.getFullYear() - newVendingDate.getFullYear()) * 12;
    let monthdifference = currentDate.getMonth() - newVendingDate.getMonth();
    let daydifference = currentDate.getDate() - newVendingDate.getDate();

    /* Logic for fixed charge per month start */
    useEffect(() => {

        let newFixedChargePerMonth = 0;


        console.log("Date:", daydifference)
        console.log("Month:", monthdifference)
        console.log("Year:", yeardifference)
        console.log(vendingtime)
        console.log(vendingDate)
        console.log(totalAmount / (EnergyCharge + GSTEnergyCharge))
        console.log("Social:", ConsumptionKwhFirst * (SocialEnergyCharge + SocialGSTEnergyCharge))

        if (yeardifference === 0 && monthdifference < 1) {
            setVendingTime("No");
            newFixedChargePerMonth = 0;
        }
        else if (consumerType === "Residential" && ConsumptionKwhFirst >= 1 && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && yeardifference === 0 && monthdifference >= 1 && vendingDate) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 2.48;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Residential" && totalAmount <= 4.13 && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && yeardifference === 0 && monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 2.48;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Residential" && totalAmount > 4.13 && supplyType === "Prepaid"
            && yeardifference === 0 && monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 2.48;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }

        else if (consumerType === "Residential" && totalAmount > 4.13 && supplyType === "Postpaid"
            && yeardifference === 0 &&
            monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 4.47;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Residential" && supplyType === "Prepaid" && yeardifference === 0 &&
            monthdifference > 0) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 2.48;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Non-Residential" && supplyType === "Prepaid" &&
            yeardifference === 0 &&
            monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 10;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Non-Residential" && supplyType === "Postpaid" &&
            yeardifference === 0 &&
            monthdifference >= 1) {
            setVendingTime("Yes");
            newFixedChargePerMonth = monthdifference * 12;
            newFixedChargePerMonth = parseFloat(newFixedChargePerMonth.toFixed(3));
        }
        else if (consumerType === "Medium Voltage" && yeardifference === 0 &&
            monthdifference >= 0) {
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

    /* Logic for calculating consumption(kwh) from total amount start*/
    useEffect(() => {

        let newConsumptionKwh = 0;
        let newSocialConsumptionKwh = 0;

        if (consumerType === "Residential" && totalAmount <= 4.13 && vendingDate && vendingtime === "Yes") {
            newSocialConsumptionKwh = totalAmount / (SocialEnergyCharge + SocialGSTEnergyCharge);
            newConsumptionKwh = (totalAmount - (FixedChargePerMonth + FixedChargePerMonth/10)) / (EnergyCharge + EnergyCharge/10);
            newSocialConsumptionKwh = parseFloat(newSocialConsumptionKwh.toFixed(2));
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
            setSocialConsumptionKwh(newSocialConsumptionKwh);
        }
        else if (consumerType === "Residential" && totalAmount <= 4.13 && vendingDate && vendingtime === "No") {
            newSocialConsumptionKwh = totalAmount / (SocialEnergyCharge + SocialGSTEnergyCharge);
            newConsumptionKwh = totalAmount / (EnergyCharge + GSTEnergyCharge);
            newSocialConsumptionKwh = parseFloat(newSocialConsumptionKwh.toFixed(2));
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
            setSocialConsumptionKwh(newSocialConsumptionKwh);
        }
        else if (consumerType === "Residential" && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && vendingtime === "Yes" && totalAmount >= 1) {
            newConsumptionKwh = (totalAmount - (FixedChargePerMonth + FixedChargePerMonth/10)) / (EnergyCharge + EnergyCharge/10);
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Non-Residential" && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && vendingtime === "Yes" && totalAmount >= 1) {
            newConsumptionKwh = (totalAmount - (FixedChargePerMonth + FixedChargePerMonth/10)) / (EnergyCharge + EnergyCharge/10);
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Medium Voltage" && vendingtime === "Yes" && totalAmount >= 1) {
            newConsumptionKwh = (totalAmount - (FixedChargePerMonth + FixedChargePerMonth/10)) / (EnergyCharge + EnergyCharge/10);
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Residential" && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && monthdifference === 0 && vendingtime === "No") {
            newConsumptionKwh = (totalAmount / (EnergyCharge + GSTEnergyCharge));
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Non-Residential" && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && vendingtime === "No") {
            newConsumptionKwh = (totalAmount / (EnergyCharge + GSTEnergyCharge));
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }
        else if (consumerType === "Medium Voltage" && vendingtime === "No" &&
            totalAmount >= 1) {
            newConsumptionKwh = (totalAmount / (EnergyCharge + GSTEnergyCharge));
            newConsumptionKwh = parseFloat(newConsumptionKwh.toFixed(2));
        }

        setConsumptionKwh(newConsumptionKwh);

        /* If any of these below dependencies change, consumptionKwh will be recalculated */
    }, [totalAmount, supplyType, consumerType, EnergyCharge, GSTEnergyCharge, preference,
        vendingtime, FixedChargePerMonth, SocialGSTEnergyCharge, vendingDate, monthdifference])

    /* Logic for calculating consumption Kwh from total amount ends */
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

    /* Logic for calculating total amount from consumption Kwh start*/
    useEffect(() => {

        let newtotalAmountLast = 0;
        let newSocialtotalAmount = 0;
        let totalAmountConsumpNeg = 0;

        if (consumerType === "Residential" && (supplyType === "Prepaid" || supplyType === "Postpaid")
            && vendingDate && vendingtime === "No" && ConsumptionKwhFirst <= 25) {
            newtotalAmountLast = (ConsumptionKwhFirst * (EnergyCharge + (EnergyCharge/10)) + 
            (FixedChargePerMonth + (FixedChargePerMonth/10)));
            newSocialtotalAmount = ConsumptionKwhFirst * (SocialEnergyCharge + SocialGSTEnergyCharge);
            newtotalAmountLast = parseFloat(newtotalAmountLast.toFixed(2));
            newSocialtotalAmount = parseFloat(newSocialtotalAmount.toFixed(2));
            setSocialtotalAmount(newSocialtotalAmount);
        }
        else if (consumerType === "Residential" && (supplyType === "Prepaid" || supplyType === "Postpaid")
            && vendingDate && vendingtime === "Yes" && ConsumptionKwhFirst <= 25) {
            newtotalAmountLast = (ConsumptionKwhFirst * (EnergyCharge + (EnergyCharge/10)) + 
            (FixedChargePerMonth + (FixedChargePerMonth/10)));
            newSocialtotalAmount = ConsumptionKwhFirst * (SocialEnergyCharge + SocialGSTEnergyCharge);
            newtotalAmountLast = parseFloat(newtotalAmountLast.toFixed(2));
            newSocialtotalAmount = parseFloat(newSocialtotalAmount.toFixed(2));
            setSocialtotalAmount(newSocialtotalAmount);
        }
        else if (consumerType === "Residential" && (supplyType === "Prepaid" || supplyType === "Postpaid")
            && vendingDate && vendingtime === "No" && ConsumptionKwhFirst > 25) {
            newtotalAmountLast = ConsumptionKwhFirst * (EnergyCharge + GSTEnergyCharge);
            newtotalAmountLast = parseFloat(newtotalAmountLast.toFixed(2));

        }
        else if (consumerType === "Residential" && supplyType === "Prepaid" &&
            vendingtime === "Yes" && ConsumptionKwhFirst >= 1) {
            newtotalAmountLast = (ConsumptionKwhFirst * (EnergyCharge + (EnergyCharge/10)) + 
            (FixedChargePerMonth + (FixedChargePerMonth/10)));
            newtotalAmountLast = parseFloat(newtotalAmountLast.toFixed(2));
        }

        else if (consumerType === "Non-Residential" && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && vendingtime === "Yes" && ConsumptionKwhFirst >= 1) {
            newtotalAmountLast = (ConsumptionKwhFirst * (EnergyCharge + (EnergyCharge/10)) + 
            (FixedChargePerMonth + (FixedChargePerMonth/10)));
            newtotalAmountLast = parseFloat(newtotalAmountLast.toFixed(2));
        }
        else if (consumerType === "Medium Voltage" && vendingtime === "Yes" && ConsumptionKwhFirst >= 1) {
            newtotalAmountLast = (ConsumptionKwhFirst * (EnergyCharge + (EnergyCharge/10)) + 
            (FixedChargePerMonth + (FixedChargePerMonth/10)));
            newtotalAmountLast = parseFloat(newtotalAmountLast.toFixed(2));
        }

        else if (consumerType === "Non-Residential" && (supplyType === "Prepaid" ||
            supplyType === "Postpaid") && vendingtime === "No") {
            newtotalAmountLast = (ConsumptionKwhFirst * (EnergyCharge + GSTEnergyCharge));
            newtotalAmountLast = parseFloat(newtotalAmountLast.toFixed(2));
        }
        else if (consumerType === "Medium Voltage" && vendingtime === "No" &&
            ConsumptionKwhFirst >= 1) {
            newtotalAmountLast = (ConsumptionKwhFirst - (FixedChargePerMonth + GSTEnergyCharge)) *
                (EnergyCharge + GSTEnergyCharge);
            newtotalAmountLast = parseFloat(newtotalAmountLast.toFixed(2));
        }
        else if (ConsumptionKwhFirst < 0) {
            totalAmountConsumpNeg = Math.abs(ConsumptionKwhFirst) * (EnergyCharge + (EnergyCharge/10)) + (newtotalAmountLast * 2);
        }
        setTotalAmountLast(newtotalAmountLast);

        /* If any of these below dependencies change, consumptionKwh will be recalculated */
    }, [ConsumptionKwhFirst, supplyType, consumerType, EnergyCharge, GSTEnergyCharge, preference,
        vendingtime, vendingDate, FixedChargePerMonth, totalAmount])
    /* Logic for calculating total amount from consumption kwh ends */

    return (
        <div className="flex p-2">
            <div className="md:w-3/12"></div>
            <div className="md:w-6/12 w-full shadow rounded p-3">
                <div className="flex items-center p-3 justify-center">
                <img src={LEC_LOGO} className="w-auto h-20" alt="LEC Logo" />
                </div>
                <h3 className="text-2xl mb-1 text-center container p-1">LEC Tariff Reckoner</h3>
                {
                    preferenceIsActive.isActive && preferenceIsActive.name === 'amount_preference' ?
                        (<AmounttoConsumptionTitle />) : (<ConsumptiontoAmountTitle />)
                }
                

                <p className="p-1">
                    <label>Calculation Preference:&nbsp;
                        <select className="mb-1 bg-sky-100 border-b-4 border-yellow-300 shadow-sm leading-tight focus:outline-none 
                        text-gray-700 font-light w-full md:w-12/12 bg-white" id={preference.name} value={preference} 
                        onChange={handleActivePreference}>

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
                            setConsumptionKwh={setConsumptionKwh} socialConsumptionKwh={socialConsumptionKwh}
                            todaysDate={todaysDate} consumerType={consumerType} />) :
                        (<ConsumptiontoAmount ConsumptionKwhFirst={ConsumptionKwhFirst}
                            setConsumptionKwhFirst={setConsumptionKwhFirst}
                            EnergyCharge={EnergyCharge} vendingtime={vendingtime}
                            setVendingTime={setVendingTime} GSTEnergyCharge={GSTEnergyCharge}
                            vendingDate={vendingDate} setVendingDate={setVendingDate}
                            totalAmountLast={totalAmountLast} setTotalAmountLast={setTotalAmountLast}
                            FixedChargePerMonth={FixedChargePerMonth} SocialtotalAmount={SocialtotalAmount}
                            todaysDate={todaysDate} consumerType={consumerType} />)
                }
            </div>
            <div className="md:w-3/12">

            </div>
        </div>
    )
}
