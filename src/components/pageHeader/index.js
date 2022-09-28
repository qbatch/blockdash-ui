import React, { Children } from 'react';
import { PageHeaderWrapper } from './style'
const Index = (props) => {
    const { Children } = props
    return (
        <PageHeaderWrapper>
            {Children}
        </PageHeaderWrapper>
    )
}

export default Index
