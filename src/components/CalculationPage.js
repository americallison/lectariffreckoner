import React, { useState, useEffect } from "react";
import ConsumerSupplyType from "./ConsumerSupplyTypes";
import ConsumptiontoAmount from "./ConsumptiontoAmount";
import AmounttoConsumption from "./AmounttoConsumption";
import AmounttoConsumptionTitle from './AmounttoConsumptionTitle';
import ConsumptiontoAmountTitle from './ConsumptiontoAmountTitle';
import LEC_LOGO from '../images/lec_logo.jpg';




export default function CalculationPage() {
    /*declare variables to be used in calculation */
    const [consumerType, setConsumerType] = useState("Residential");
    const [supplyType, setSupplyType] = useState("Prepaid");
    const [vendingMonth, setVendingMonth] = useState("June");
    const [vendingYear, setVendingYear] = useState("2023");
    const [vendingtime, setVendingTime] = useState("Yes");
    const [totalAmount, setTotalAmount] = useState('');
    const [EnergyCharge, setEnergyCharge] = useState('');
    const [monthNumber, setMonthNumber] = useState(0);
    const [FixedChargePerMonth, setFixedChargePerMonth] = useState('');
    const [GSTEnergyCharge, setGSTEnergyCharge] = useState('');
    const [GSTEnergyChargeSocial, setGSTEnergyChargeSocial] = useState('');
    const [EnergyChargeSocial, setEnergyChargeSocial] = useState('');
    const [ConsumptionKwh, setConsumptionKwh] = useState('');
    const [ConsumptionKwhFirst, setConsumptionKwhFirst] = useState('');
    const [totalAmountLast, setTotalAmountLast] = useState(0);
    const [socialConsumptionKwh, setSocialConsumptionKwh] = useState('');
    const [SocialtotalAmount, setSocialtotalAmount] = useState('');
    

    /* change preference type */
    const [preference, setPreference] = useState("Total Amount ($US) - Consumption (Kwh)");
    const [preferenceIsActive, setPreferenceIsActive] = useState({
        isActive: true,
        name: 'amount_preference'
    })

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
  
    const years = [
  
      {
          id: 1,
          label: "2023",
          name: "2023",
      },
  
      {
          id: 2,
          label: "2022",
          name: "2022",
      },
  
   
  
  ]

    /* Function to change calculation preference */
    function handleActivePreference(event) {
        event.preventDefault();
        setPreferenceIsActive({
            isActive: true,
            name: event.target.value,
        })

        setPreference(event.target.value)
    }


    function handleSubmitAmount(event) {
        event.preventDefault();
        
        let newSocialConsumptionKwh = 0;
        let newConsumptionKwh = 0;

        if (totalAmount  <= 4.125) {
            newSocialConsumptionKwh = totalAmount / (0.15 * 1.1);
            newSocialConsumptionKwh = Number(newSocialConsumptionKwh).toFixed(1)
        }

        else if (totalAmount > 4.125) {
            newSocialConsumptionKwh = (4.125 / (0.15 * 1.1)) + (totalAmount - 4.125) / (0.24 * 1.1)
            newSocialConsumptionKwh = Number(newSocialConsumptionKwh).toFixed(1)
        }

        else if (preferenceIsActive.name === "amount_preference" && consumerType === "Residential" && totalAmount >= 1) {
            newConsumptionKwh = totalAmount - (FixedChargePerMonth * 1.1)
        }

      
        setConsumptionKwh(newConsumptionKwh);
        setSocialConsumptionKwh(newSocialConsumptionKwh);
 
        handleChange();
        
        console.log(socialConsumptionKwh)
    }

    let SocialFixedChargePerMonth = "";
   let presentDate = new Date();

   console.log(calculation_preference.label)
   
    /* Logic for Energy Charge start */
   

      function handleChange() {

        let newEnergyCharge;
        let newEnergyChargeSocial;

        if (consumerType === "Residential" && totalAmount <= 4.125 && preferenceIsActive.name === "amount_preference") {
            newEnergyChargeSocial = (totalAmount / (0.150 * 1.1)) * 0.15 * 1.1;
            newEnergyChargeSocial = Number(newEnergyChargeSocial.toFixed(3))
        }
        else if (consumerType === "Residential" && totalAmount > 4.125 && preferenceIsActive.name === "amount_preference") {
            newEnergyChargeSocial = (0.15 + (0.15/10) * 25) + ((4.125 / (0.15*1.1)) + ((totalAmount -4.125)/(0.24*1.1))-25) * (0.24 + (0.24/10))
            newEnergyChargeSocial = Number(newEnergyChargeSocial.toFixed(3))
        }
        else if (consumerType === "Residential" && preferenceIsActive.name === "amount_preference" && ConsumptionKwh > 0) {
           newEnergyCharge = 0.24 * ConsumptionKwh
        }
        
        setEnergyCharge(newEnergyCharge);
        
        setEnergyChargeSocial(newEnergyChargeSocial);


    }

    

  
useEffect(() => {
    let newmonthNumber = 0;

    if (vendingMonth === "January") {
        newmonthNumber = 1;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (newmonthNumber > presentDate.getMonth() && vendingYear >= presentDate.getFullYear()) {
        console.log("FUTURE DATE IS NOT ALLOWED")
    }
    else if (vendingMonth === "February") {
        newmonthNumber = 2;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "March") {
        newmonthNumber = 3;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "April") {
        newmonthNumber = 4;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "May") {
        newmonthNumber = 5;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "June") {
        newmonthNumber = 6;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "July") {
        newmonthNumber = 7;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "August") {
        newmonthNumber = 8;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "September") {
        newmonthNumber = 9;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "October") {
        newmonthNumber = 10;
        newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
        Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "November") {
        newmonthNumber = 11;
            newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
            Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
    else if (vendingMonth === "December") {
        newmonthNumber = 12;
            newmonthNumber = (presentDate.getFullYear() - Number(vendingYear)) * 12 + 
            Math.abs((presentDate.getMonth() + 1) - newmonthNumber);
    }
   

    setMonthNumber(newmonthNumber)
}, [vendingMonth, vendingYear])

console.log(monthNumber)




 /*Logic for fixed charge start */
       useEffect(() => {
let newFixedChargePerMonth = 0;

if (consumerType === "Residential" && totalAmount < 4.125 ) {
    newFixedChargePerMonth = 0;
} 
else if (consumerType === "Residential" && supplyType === "Prepaid" && monthNumber) {
    newFixedChargePerMonth = 2.48 * monthNumber;
 }
 else if (consumerType === "Residential" && supplyType === "Postpaid" && monthNumber) {
    newFixedChargePerMonth = 4.47 * monthNumber;
 }
 else if (consumerType === "Non-Residential" && supplyType === "Prepaid" && monthNumber) {
    newFixedChargePerMonth = 10 * monthNumber;
 }
 else if (consumerType === "Non-Residential" && supplyType === "Postpaid" && monthNumber) {
    newFixedChargePerMonth = 12 * monthNumber;
 }
 else if (consumerType === "Medium Voltage" && monthNumber) {
    newFixedChargePerMonth = 50 * monthNumber;
 }
 setFixedChargePerMonth(newFixedChargePerMonth);
}, [totalAmount, consumerType, vendingMonth, monthNumber, supplyType])


/*Logic for 10% GST start */
useEffect(() => {
    let newGSTEnergyCharge = 0;
    let newSocialGSTCharge = 0;
    
    if (!SocialFixedChargePerMonth && !EnergyChargeSocial) {
        newSocialGSTCharge = '-';
    }
    else {
        newSocialGSTCharge = (EnergyChargeSocial + SocialFixedChargePerMonth) / 10;
        newSocialGSTCharge = Number(newSocialGSTCharge).toFixed(3)
    }
     setGSTEnergyCharge(newGSTEnergyCharge);
     setGSTEnergyChargeSocial(newSocialGSTCharge);

    }, [totalAmount, consumerType, EnergyChargeSocial, FixedChargePerMonth])



    return (
        <div className="flex p-2">
            <div className="md:w-3/12"></div>
            <div className="md:w-6/12 w-full shadow rounded p-3">
                <div className="flex items-center p-2 justify-center">
                <img src={LEC_LOGO} className="w-auto h-20" alt="LEC Logo" />
                </div>
                <h3 className="text-2xl mb-1 text-center container p-1">LEC Tariff Reckoner</h3>
                {
                    preferenceIsActive.isActive && preferenceIsActive.name === 'amount_preference' ?
                        (<AmounttoConsumptionTitle />) : (<ConsumptiontoAmountTitle />)
                }
                
<div className="flex justify-between mt-2">
            <div className="md:w-4/12 w-6/12">
                    <label className="p-2 text-sm md:text-base">Calculation Preference:</label>
                    </div>
                    <div className="md:w-8/12 w-6/12">
                        <select className="mb-2 bg-slate-200 rounded border-none shadow-sm leading-tight focus:outline-none 
                        text-gray-700 font-light p-2 w-full" id={preference.name} value={preference} 
                        onChange={handleActivePreference}>

                            {calculation_preference.map((preference) => (
                                <option key={preference.id} value={preference.name}>{preference.label}</option>
                            ))}

                        </select>
                    </div>
                
                </div>

                <ConsumerSupplyType consumerType={consumerType} setConsumerType={setConsumerType}
                    supplyType={supplyType} setSupplyType={setSupplyType} />
                {
                    preferenceIsActive.isActive && preferenceIsActive.name === 'amount_preference' ?
                        (<AmounttoConsumption totalAmount={totalAmount} setTotalAmount={setTotalAmount}
                            EnergyCharge={EnergyCharge} GSTEnergyCharge={GSTEnergyCharge} GSTEnergyChargeSocial={GSTEnergyChargeSocial}
                            vendingMonth={vendingMonth} setVendingMonth={setVendingMonth}
                            vendingYear={vendingYear} setVendingYear={setVendingYear}
                            FixedChargePerMonth={FixedChargePerMonth} vendingtime={vendingtime}
                            setVendingTime={setVendingTime} ConsumptionKwh={ConsumptionKwh}
                            setConsumptionKwh={setConsumptionKwh} socialConsumptionKwh={socialConsumptionKwh}
                             consumerType={consumerType} EnergyChargeSocial={EnergyChargeSocial} 
                             SocialFixedChargePerMonth={SocialFixedChargePerMonth} 
                             handleSubmitAmount={handleSubmitAmount}
                             months={months} years={years} />) :
                        (<ConsumptiontoAmount ConsumptionKwhFirst={ConsumptionKwhFirst}
                            setConsumptionKwhFirst={setConsumptionKwhFirst} EnergyChargeSocial={EnergyChargeSocial}
                            EnergyCharge={EnergyCharge} vendingDate={vendingMonth}
                            setVendingMonth={setVendingMonth} months={months} years={years}
                            vendingYear={vendingYear} setVendingYear={setVendingYear}
                            setVendingTime={setVendingTime} GSTEnergyCharge={GSTEnergyCharge}
                            totalAmountLast={totalAmountLast} setTotalAmountLast={setTotalAmountLast}
                            FixedChargePerMonth={FixedChargePerMonth} SocialtotalAmount={SocialtotalAmount}
                            consumerType={consumerType}  / >)
                }
            </div>
            <div className="md:w-3/12">

            </div>
        </div>
    )
}
