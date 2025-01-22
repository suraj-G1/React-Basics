import React from 'react'

const InputBox = ({
    label,
    amount,
    onCurrencyChange,
    onAmountChange,
    selectCurrency = "usd",
    currencyOptions = [],
    amountDisable = false,
    currencyDisable = false,

}) => {
  return (
    <div className='bg-white p-3 rounded-lg flex'>
        <div className='w-1/2 flex flex-col mx-auto gap-2 text-center'>
            <label className='text-black/40 inline-block text-2xl font-bold'>{label}</label>
            <input
            type='number'
            placeholder='Amount'
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            className='outline-none bg-transparent'
            />

        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>   
            <select
            value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                    {
                        currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                    
            </select>
        </div>
    </div>
  )
}

export default InputBox