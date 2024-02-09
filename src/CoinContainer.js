import React, { useState } from "react";
import Coin from './Coin'

const CoinContainer = () => {
    const [heads, setHeads] = useState(0)
    const [tails, setTails] = useState(0)
    const [coin, setCoin] = useState("none")
    const [total, setTotal] = useState(0)

    const flip = () => {
        const randomVal = Math.random();
        const faceCoin = randomVal < 0.5 ? 'heads' : 'tails';
        setCoin(faceCoin)
        setTotal(total + 1)
        if (faceCoin === "heads") setHeads(heads + 1)
        else setTails(tails + 1)
    }
    return (
        <div>
            <h2>Let's flip a coin!</h2>
            <Coin value={coin} />
            <button onClick={flip}>Flip Meee</button>
            <p>Out of {total} flips, there have been {heads} heads and {tails} tails</p>
        </div>
    )
}

export default CoinContainer