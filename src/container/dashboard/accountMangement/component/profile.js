import React, { useState } from "react"
import { AccountMangementWrapper } from "../style"
import { Box, Stack, Divider, Grid } from "@mui/material"
import Button from "../../../../components/button/button"
import TextField from "../../../../components/inputs/input/index"
const Profile = () => {
    const [profileEdit, setProfileEdit] = useState(false)
    return (
        <AccountMangementWrapper>
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <h1 className="heading">Profile</h1>
                <Button variant="outlined" onClick={() => setProfileEdit(!profileEdit)}>{!profileEdit ? "Edit Profile" : "Save"}</Button>
            </Box>
            <Grid container className="user-info" spacing={2}>
                <Grid item md={4}>
                    <Box display="flex" flexDirection="column">
                        <span>Full Name</span>
                        {!profileEdit && <span>Alec Thompson</span>}
                        {profileEdit && <TextField
                            fullWidth
                            value={"Alec Thompson"}

                        />}
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box display="flex" flexDirection="column">
                        <span>Email</span>
                        {!profileEdit && <span>alecthompson@gmail.com</span>}
                        {profileEdit && <TextField
                            fullWidth
                            value={"alecthompson@gmail.com"}

                        />}
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box display="flex" flexDirection="column">
                        <span>Password</span>
                        {!profileEdit && <span>*******</span>}
                        {profileEdit && <TextField
                            ripple
                            fullWidth
                            value={"*******"}

                        />}
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box className="add-bio">
                        <p>
                            Bio
                        </p>
                        {!profileEdit && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing ”</p>}
                        {profileEdit && <TextField
                            fullWidth
                            value={"Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing"}

                        />}
                    </Box>
                </Grid>
            </Grid>
            <Divider className="profile-divder" />
            <Box sx={{ marginTop: "34px" }} display="flex" justifyContent="space-between" alignItems="start">
                <Box display="flex" flexDirection="column">
                    <h3>Delete your Account</h3>
                    <p>Cancel account will lose access to data</p>
                </Box>
                <Button variant="outlined">Delete Account</Button>
            </Box>
        </AccountMangementWrapper>
    )
}
export default Profile;