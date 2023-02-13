function TeamLogo({ source, left }) {
    const styles = {
        border: "1px solid #fff",
        backgroundColor: "#fff",
        width: 200,
        height: 180,
        textAlign: "center",
        // left? borderBottomLeftRadius: 10 : borderBottomRightRadius: 10
    }
    return (<div style={styles}>
        <img alt='team_logo' src={source} width="150" />
    </div>
    )
}

export default TeamLogo