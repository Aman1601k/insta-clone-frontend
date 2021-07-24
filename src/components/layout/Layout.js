import React from 'react'
import Navbar from '../navbar/Navbar'
import {Wrapper , Container} from './style'

const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
            <Container>
                <Wrapper>
                    {children}
                </Wrapper>
            </Container>
        </>
    )
}

export default Layout
