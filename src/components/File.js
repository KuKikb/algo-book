/*
Component to be displayed as folder
*/

import React, { Fragment } from "react";
import Description from "@material-ui/icons/Description";
import {
    makeStyles,
    Button,
    Grid,
    Typography,
    Tooltip,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles({
    folder: {
        fontSize: "3rem",
        color: "grey",
    },
});

const File = ({ name, handler }) => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Fragment>
            <Tooltip title={name} arrow>
                <Button
                    onClick={() => {
                        handler(name);
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                        spacing={0}
                    >
                        <Grid item>
                            <Description className={classes.folder} />
                        </Grid>
                        <Grid item>
                            <Typography variant="button" display="block" noWrap>
                                {name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Button>
            </Tooltip>
        </Fragment>
    );
};

export default File;
