
import { Backdrop, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types'

const propTypes = {
    fullscreen: PropTypes.bool,
    isLoading: PropTypes.bool
}

const defaultProps = {
    fullscreen: false,
    isLoading: false
}

const Index = (props) => {
    const { fullscreen, isLoading } = props;

    if (!isLoading) {
        return null
    }

    return (
        <Backdrop
            open={isLoading}
            sx={{ color: '#ffff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <CircularProgress color='inherit' size={50} />
        </Backdrop>
    )
}

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;