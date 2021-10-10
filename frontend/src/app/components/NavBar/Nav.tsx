import * as React from 'react'
import styled from 'styled-components/macro'
import NavItem from './NavItem/NavItem'

export function Nav() {
    return (
        <Wrapper>
            <NavItem title="Сервисы" />
            <NavItem title="Решения" />
            <NavItem title="Сообщество" />
            <NavItem title="Тарифы" />
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    margin-right: -1rem;
`
