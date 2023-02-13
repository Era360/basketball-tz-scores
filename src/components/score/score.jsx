function Score({ value, padding = 10, backgroundColor, color = "#fff" }) {
    return (
        <div
            style={{
                // padding,
                width: 60,
                height: 60,
                backgroundColor,
                color,
                textAlign: "center",
                fontSize: 30
            }}>{value}</div>
    )
}

export default Score