import { back_basket, jkt_logo, pazi_logo } from "../../assets/images"
import Score from "../score/score"
import TeamLogo from "../team_logo/team_logo"
import styles from "./live_score.module.css"

function LiveScore() {
    return (
        <div className={styles.container}>
            <div className={styles.score_bar_container}>
                <div className={styles.home_team}>
                    <TeamLogo source={jkt_logo} />
                </div>
                <div className={styles.home_score}>
                    {/* <h2>89</h2>
                    <h2>2</h2>
                    <h2>0</h2> */}
                    <Score value={89} backgroundColor="#B44534" color="#fff" />
                    <Score value={2} backgroundColor="#E06650" color="red" />
                    <Score value={0} backgroundColor="#B44534" color="#fff" />
                </div>
                <div className={styles.period_time}>
                    <div className={styles.timer}>09:10</div>
                    {/* <Score value={"09:10"} padding={30} backgroundColor="#6F1508" /> */}
                    <div className={styles.period}>0 0 0 0</div>
                </div>
                <div className={styles.away_score}>
                    <Score value={69} backgroundColor="#B44534" color="#fff" />
                    <Score value={4} backgroundColor="#E06650" color="red" />
                    <Score value={0} backgroundColor="#B44534" color="#fff" />
                </div>
                <div className={styles.away_team}>
                    <TeamLogo source={pazi_logo} />
                </div>
            </div>
            <div className={styles.basket_image}>
                <img alt="basketball" src={back_basket} />
            </div>
        </div>
    )
}
export default LiveScore