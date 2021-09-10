import styled from 'styled-components'
import colors from '../../styles/colors'

export const StatsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    font-size: 1.5rem;
    font-weight: 500;
`

export const Text = styled.span<{ fontType: 'bold' | 'regular' }>`
    font-family: ${(p) =>
        p.fontType === 'bold'
            ? 'GlacialIndifferenceBold'
            : 'GlacialIndifferenceRegular'};
`

export const StatsArticle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const PlayerPercentage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: GlacialIndifferenceBold;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;

    > span {
        font-size: 2rem;
    }
`

export const Circle = styled.span<{ color: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;

    border-radius: 100rem;

    background-color: ${(p) => p.color};
    color: ${colors.white};

    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    opacity: 1;
    margin: 0.5rem 1rem;
`

export const CircleContainer = styled(StatsArticle)``

export const CircleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: GlacialIndifferenceRegular;
`
export const HistoryCircle = styled.div<{ color: string }>`
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 100rem;
    background-color: ${(p) => p.color};
    border: 0.1rem solid ${colors.grey};

    margin-right: 0.5rem;
`

export const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
`

export const HistorySquare = styled.div`
    width: 1.5rem;
    height: 1.5rem;

    background-color: white;
    border: 0.1rem solid ${colors.black};
    color: ${colors.black};

    margin-right: 0.5rem;
    font-size: 1.4rem;
    line-height: 1.5rem;
    text-align: center;
`
