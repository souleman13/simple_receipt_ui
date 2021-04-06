import { useState, useEffect } from 'react'
import './index.css'

const Receipt = () => {

    const [state, setState] = useState('')

    const fetchReceipts = async () => {
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
            "Total": "$30.00",
            "Date": "2021-02-01 08:30:00.000",
            "Items": [
                {
                    "Item": "Candle",
                    "ItemPrice": "$3.00",
                    "Quantity": "3"
                },
                {
                    "Item": "Book",
                    "ItemPrice": "$15.00",
                    "Quantity": "1"
                },
                {
                    "Item": "Pen",
                    "ItemPrice": "$0.75",
                    "Quantity": "1"
                },
                {
                    "Item": "Paper",
                    "ItemPrice": "$5.25",
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
                {state ? Object.keys(state).map(key => typeof state[key] === typeof [] ?
                    <div key={key} className='itemList'>
                        <div>Items:</div>
                        {state[key].map(item => {
                            return <div key={item.Item} className='item'>
                                {Object.keys(item).map(key => { return (<div key={key} className='itemLine' >{key}: {item[key]}</div>) })}
                            </div>
                        })}</div> : <div key={key} className='receiptLine'><div>{key}:</div><div>{`${state[key]}`}</div></div>
                ) : 'loading...'}
            </div>
        </div>
    )
}

export default Receipt