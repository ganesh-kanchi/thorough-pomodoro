import { Navbar } from "../../components/Navbar/Navbar";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Pomodoro.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Pomodoro = () => {
    const locate = useLocation()
    const navigation = useNavigate()
    const { taskTitle, taskDescription, focusDuration, breakDuration } = locate.state.taskDetails;

    const [pomodoroStage, setPomodoroStage] = useState("focus");
    const pomodoroStageRef = useRef(pomodoroStage);
    const [seconds, setSeconds] = useState(0);
    const secondsRef = useRef(seconds);
    const percentRef = useRef(100);
    const intervelRef = useRef(null);

    const focusMinutes = Number(focusDuration);
    const breakMinutes = Number(breakDuration);
    const overallSeconds = (pomodoroStage === "focus" ? focusMinutes : breakMinutes ) * 60;
    percentRef.current = ( seconds / overallSeconds ) *100;
    let minutesRemaining = Math.floor(seconds / 60);
    let secondsRemaining = seconds % 60;
    if (minutesRemaining < 10) minutesRemaining = `0${minutesRemaining}`;
    if (secondsRemaining < 10) secondsRemaining = `0${secondsRemaining}`;

    const secondsUpdateHandler = () => {
        secondsRef.current--;
        setSeconds(secondsRef.current);
    };

    const pomodoroStageToggle = () => {
        const updatedStage = pomodoroStageRef.current === "focus" ? "break" : "focus";
        setPomodoroStage(updatedStage);
        pomodoroStageRef.current = updatedStage;

        const updatedSeconds = (updatedStage === "focus" ? focusMinutes : breakMinutes) * 60;
        setSeconds(updatedSeconds);
        secondsRef.current = updatedSeconds;
    };

    const timerStopHandler = () => {
        clearInterval(intervelRef.current);
    }

    const timerStartHandler = () => {
        clearInterval(intervelRef.current);

        intervelRef.current= setInterval(()=>{
            secondsRef.current===0 && pomodoroStageToggle();
            secondsUpdateHandler();
        }, 1000)
    }

    const timerResetHandler = () => {
        timerStopHandler();
        secondsRef.current = focusMinutes * 60;
        setSeconds(focusMinutes * 60);
        pomodoroStageRef.current = "focus";
      }

    useEffect(() => {
        setSeconds(focusMinutes * 60);
        secondsRef.current = focusMinutes * 60;// eslint-disable-next-line
      },[]);

    return (
        <div className="page-container">
            <Navbar />
            <main className="page-content pomodoro-page">
                <section className="pomodoro-section">
                    <button className="button primary-button" onClick={()=>navigation("/tasks")}>Back to tasks</button>
                    <div className="pomodoro-container">
                        <CircularProgressbar 
                        styles={buildStyles({
                            textSize: "20px",
                            trailColor: "#fff",
                            pathColor:
                              pomodoroStageRef.current === "focus"
                                ? `#4290F5`
                                : `rgb(255, 93, 93)`,
                            textColor:
                              pomodoroStageRef.current === "focus"
                                ? `#4290F5`
                                : `rgb(255, 93, 93)`,
                          })}
                        value={percentRef.current} text={`${minutesRemaining} : ${secondsRemaining}`} />
                    </div>
                    <div className="pomodoro-actions">
                        <button className="pomodoro-actions-btn button" onClick={timerStartHandler}>START</button>
                        <button className="pomodoro-actions-btn button" onClick={timerStopHandler}>PAUSE</button>
                        <button className="pomodoro-actions-btn button" onClick={timerResetHandler}>RESET</button>

                    </div>
                </section>
                <section className="task-section">
                    <div className="heading-1 task-title">{taskTitle.toUpperCase()}</div>
                    <p className="task-description">{taskDescription}</p>
                </section>
            </main>
        </div>
    )
}
