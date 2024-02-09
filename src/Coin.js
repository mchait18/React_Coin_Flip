import './Coin.css'

const Coin = (props) => {
    const classes = `Coin Coin-${props.value}`
    return (
        <div className={classes}></div>
    )
}

export default Coin