import { back_basket } from "../../assets/images"
import Score from "../score/score"
import styles from "./live_score.module.css"

function LiveScore() {
    return (
        <div className={styles.container}>
            <div className={styles.score_bar_container}>
                <div className={styles.home_team}></div>
                <div className={styles.home_score}>
                    <Score value={89} padding={10} />
                </div>
                <div className={styles.period_time}>
                    <div className={styles.running_time}>09:10</div>
                    <div className={styles.period}>0 0 0 0</div>
                </div>
                <div className={styles.away_score}></div>
                <div className={styles.away_team}></div>
            </div>
            <div className={styles.basket_image}>
                <img alt="basketball" src={back_basket} />
            </div>
        </div>
    )
}

export default LiveScore