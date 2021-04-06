import { useState, useEffect } from 'react'
import './index.css'

const Receipt = () => {

    const [state, setState] = useState('')

    const fetchReceipts = async () => {
        //due to time constraints I choose not to resolve the cors issue this block of code produces on localhost. 
        //Cors issues typically need to be solved server side and the task description said the server would be the topic in the next interview.
        // const fetchProps = {
        //     method: 'get',
        //     mode: 'cors',
        //     headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     },
        // }
        // return await fetch('https://doc.strider.tech/content/receipts.json', fetchProps)
        //     .then(res => res.json())
        //     .then(res => { console.log(res); return res })
        return [{
            "OrderId": 1,
            "CustomerId": 1,
            "CustomerName": "Elizabeth",
            "Date": "2021-02-01 08:30:00.000",
            "Total": "$30.00",
            "Items": [
                {
                    "Item": "Candle",
                    "ItemPrice": "3.00",
                    "Quantity": "3"
                },
                {
                    "Item": "Book",
                    "ItemPrice": "15.00",
                    "Quantity": "1"
                },
                {
                    "Item": "Pen",
                    "ItemPrice": "0.75",
                    "Quantity": "1"
                },
                {
                    "Item": "Paper",
                    "ItemPrice": "5.25",
                    "Quantity": "1"
                }
            ]
        }]
    }

    useEffect(() => {
        fetchReceipts().then(receipts => {
            setState(receipts[0])
        })
    }, [])

    return (
        <div >
            <div className='receipt'>
                {state ? <div>{Object.keys(state).map(key => typeof state[key] === typeof [] ?
                    <div key={key} className='itemList'>
                        <div>Items:</div>
                        {state[key].map(item => {
                            return <div key={item.Item} className='item'>
                                <div>{item.Item}</div>
                                <div className='itemPrice'><span>{item.Quantity} x ${item.ItemPrice}</span><span>${item.Quantity * parseFloat(item.ItemPrice)}</span></div>
                            </div>
                        })}
                        <div className='total'><span>Total:</span><span>{state.Total}</span></div>
                    </div> : <div key={key} className='receiptLine'><span>{key}:</span><span>{`${state[key]}`}</span></div>
                )}</div> : 'loading...'}
            </div>
        </div>
    )
}

export default Receipt