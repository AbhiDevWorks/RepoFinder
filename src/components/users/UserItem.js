import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    //With fn cmps, this is not used. Instead props are passed in the parameter of the fn cmp
    //const { login, avatar_url, html_url } = props.user;

    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt=""
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <div>
                <Link
                    to={`/user/${login}`}
                    className="btn btn-dark btn-sm my-1"
                >
                    More
                </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
