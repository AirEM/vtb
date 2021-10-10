import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as LogoIcon } from '../../../assets/vtb-logo.svg'

interface Props {
    onClick: () => void
}

const Logo: React.FC<Props> = ({ onClick }) => {
    return (
        <Wrapper onClick={onClick}>
            <LogoIcon />
        </Wrapper>
    )
}

export default Logo

//
// export function Logo() {
//     return (
//         <Wrapper>
//             <Title>React Boilerplate</Title>
//             <Description>Create React App Template</Description>
//         </Wrapper>
//     )
// }

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const Title = styled.div`
    font-size: 1.25rem;
    color: ${p => p.theme.text};
    font-weight: bold;
    margin-right: 1rem;
`

const Description = styled.div`
    font-size: 0.875rem;
    color: ${p => p.theme.textSecondary};
    font-weight: normal;
`
