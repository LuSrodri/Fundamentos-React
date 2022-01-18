

import React, { useState } from "react";

import './lottery.css'

export default props => {

    let [totalNumber, setTotalNumber] = useState(6 || props.totalNumber)
    let [minNumber, setMinNumber] = useState(1 || props.minNumber)
    let [maxNumber, setMaxNumber] = useState(60 || props.maxNumber)
    let [numbersLottery, setNumbersLottery] = useState([])


    function generateRandomNumberLottery() {
        if (minNumber <= maxNumber && maxNumber >= totalNumber) {
            let numbersLotteryAux = [];
            while (numbersLotteryAux.length < totalNumber) {
                let count = 0;
                let numberAux = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
                for (let j = 0; j < totalNumber; j++) {
                    if (numbersLotteryAux[j] === numberAux) {
                        count++;
                    }
                }

                if (count === 0) {
                    numbersLotteryAux.push(numberAux);
                }
            }
            numbersLotteryAux.sort((a, b) => {
                return a - b;
            })
            setNumbersLottery(numbersLotteryAux)
        }
    }


    return (
        <div className="lottery">
            <h2>Lottery</h2>
            <div style={{ margin: "1.5rem" }}>
                <label htmlFor="min">Min:  </label>
                <input type="number" value={minNumber} id="min" onChange={e => setMinNumber(+e.target.value)} />
            </div>
            <div style={{ margin: "1.5rem" }}>
                <label htmlFor="max">Max:  </label>
                <input type="number" value={maxNumber} id="max" onChange={e => setMaxNumber(+e.target.value)} />
            </div>
            <div style={{ margin: "1.5rem" }}>
                <label htmlFor="total">Total Number:  </label>
                <input type="number" value={totalNumber} id="total" onChange={e => setTotalNumber(+e.target.value)} />
            </div>
            <button onClick={generateRandomNumberLottery}>Generate Numbers</button>
            <h3 className="numbersLottery">{numbersLottery.toString().replaceAll(',', '-')}</h3>
        </div>
    )
}