import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onChangeAmount,// Handler to update amount
    onChangeCurrency,// Handler to update currency
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) => {

    const id = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={id} className="text-black/40 mb-2 inline-block">
                {label}
            </label>
            <input id={id} type="number" className="outline-none w-full bg-transparent py-1.5 text-black/80"
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e)=> onChangeAmount && onChangeAmount(Number(e.target.value))}
            />
        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black/80"
                value={selectedCurrency}
                onChange={(e)=>{ onChangeCurrency && onChangeCurrency(Number(e.target.value))}}
                disabled={currencyDisabled}
            >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox