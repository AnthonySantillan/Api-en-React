import { useState, useEffect } from "react";
import { utils } from "./Utils";

export const useGameState = estrella => {
    const [stars, setStars] = useState(utils.random(1, estrella));
    const [availableNums, setAvailableNums] = useState(utils.range(1, estrella));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
            return () => clearTimeout(timerId);
        }
    });

    const setGameState = (newCandidateNums) => {
        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, estrella));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    };

    return { stars, availableNums, candidateNums, secondsLeft, setGameState };
};