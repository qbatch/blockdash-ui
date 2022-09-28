import React, { Children } from 'react';
import { SubscriptionCard } from './style'
const SubsCard = (props) => {
    const { Children } = props;
    return (
        <SubscriptionCard>
            {Children}
        </SubscriptionCard>
    )
}

export default SubsCard;
