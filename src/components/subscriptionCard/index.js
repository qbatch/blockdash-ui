import React, { Children } from 'react';
import { SubscriptionCardWrapper } from './style'
const Index = (props) => {
    const { children, className } = props;
    return (
        <SubscriptionCardWrapper className={className}>
            {children}
        </SubscriptionCardWrapper>
    )
}

export default Index;
