import PropTypes from 'prop-types'

export default function Page({ children, cool }) {
    return (
        <div>
            <p>I am the page component</p>
            <h3>{cool}</h3>
            <p>{children}</p>
        </div>
    )
}

Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.any,
}
