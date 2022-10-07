import React, { useState } from "react"
import { AccountMangementWrapper } from "../style"
import { Box, Stack, Divider, Grid } from "@mui/material"
import Button from "../../../../components/button/button"
import TextField from "../../../../components/inputs/input/index"
import Modal from '../../../../components/modal/index';
import { BsExclamationTriangle } from 'react-icons/bs';
const Profile = () => {
    const [profileEdit, setProfileEdit] = useState(false)
    const [deleteAccount,setDeleteAccount]=useState(false)
    return (
        <AccountMangementWrapper>
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <h1 className="heading">Profile</h1>
                <Button variant="outlined" onClick={() => setProfileEdit(!profileEdit)}>{!profileEdit ? "Edit Profile" : "Save"}</Button>
            </Box>
            <Grid container className="user-info" columnSpacing={2}>
                <Grid item md={4}>
                    <Box display="flex" flexDirection="column">
                        <span>Full Name</span>
                        {!profileEdit && <p>Alec Thompson</p>}
                        {profileEdit && <TextField
                            fullWidth
                            value={"Alec Thompson"}

                        />}
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box display="flex" flexDirection="column">
                        <span>Email</span>
                        {!profileEdit && <p>alecthompson@gmail.com</p>}
                        {profileEdit && <TextField
                            fullWidth
                            value={"alecthompson@gmail.com"}

                        />}
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box display="flex" flexDirection="column">
                        <span>Password</span>
                        {!profileEdit && <p>*******</p>}
                        {profileEdit && <TextField
                            ripple
                            fullWidth
                            value={"*******"}

                        />}
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box className="add-bio" mt={2}>
                        <div className="bio">
                            Bio
                        </div>
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
                <Button variant="outlined" onClick={()=>setDeleteAccount(true)}>Delete Account</Button>
            </Box>
            <Modal
                className="cancel-modal"
                open={deleteAccount}
                saveText="No"
                closeText="Yes"
                btnSaveVariant="outlined"
                maxWidth="xs"
                dialogActions="true"
                onSave={()=>setDeleteAccount(false)}
            >
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                <BsExclamationTriangle className="icon-exclamation" />
                <h3>Are you sure you want to delete your account</h3>
                <p>By canceling account you will lose
                    access to data.</p>
                    </Box>
            </Modal>
        </AccountMangementWrapper>
    )
}
export default Profile;