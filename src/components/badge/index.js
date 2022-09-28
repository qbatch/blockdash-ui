import Badge from 'react-bootstrap/Badge';
import BadgeWrapper from './style';

const index = props => {
  const {className ,bg, children} = props;

  return(
  <>
  <BadgeWrapper>
    <Badge className={className} bg={bg}>{children}</Badge>
  </BadgeWrapper>
  </>
  )
};

export default index;