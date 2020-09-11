import React, {useContext} from 'react';
import { UserContext } from '../views/context/Users';

function AuthenticatedUser(props) {
    const {user, loading} = useContext(UserContext)
    return (
        <div>
            {
                loading ? <div>Loading...</div>
                :
                <div>
                    {user.name}
                </div>
            }
        </div>
    );
}

export default AuthenticatedUser;