import { User, useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const ProfilePage = () => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();
    
    return(
        <p>pog</p>
    )
};

export default ProfilePage;