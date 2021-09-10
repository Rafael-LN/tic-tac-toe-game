import { useEffect, useState } from 'react'

interface TimerProps {
    formattedTime: string
    stopTimer: () => void
    startTimer: () => void
    resetTimer: () => void
}

const useTimer = (start = true): TimerProps => {
    const [timer, setTimer] = useState<number>(0)
    const [formattedTime, setFormattedTime] = useState<string>('00:00:00')
    const [intervalID, setIntervalID] = useState<NodeJS.Timeout | number>()

    const startTimer = (): void => {
        setIntervalID(
            setInterval(() => {
                setTimer((time) => time + 1)
            }, 1000),
        )
    }

    const formatTimeHHMMSS = (): void => {
        const date = new Date(timer * 1000)
        const timeArr = date.toUTCString().split(' ')
        const timeStr = timeArr[timeArr.length - 2]

        setFormattedTime(timeStr)
    }

    useEffect(() => {
        if (start) {
            startTimer()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        formatTimeHHMMSS()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer])

    const stopTimer = (): void => {
        const currentTime = intervalID as number
        clearInterval(currentTime)
    }

    const resetTimer = (): void => {
        setTimer(0)
    }

    return {
        stopTimer,
        startTimer,
        resetTimer,
        formattedTime,
    }
}

export default useTimer
