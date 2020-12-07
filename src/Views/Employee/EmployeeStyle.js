import {makeStyles} from "@material-ui/core/styles"

export const styles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        width: "80%",
    },
    button: {
        display: "none",
        position: "absolute",
        top: "40%",
        left: "25%"
    },
    list: {
        cursor: "pointer",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& :hover": {
            "& button": {
                display: "block"
            }
        }
    },
    card: {
        position: "relative",
        marginTop: 20,
        marginRight: 20,
        "& .title": {
            padding: 10,
            display: "flex",
            justifyContent: "space-between"
        },
        "& .subtitle": {
            padding: 10,
        }
    },
    table: {
        margin: "20px 0"
    }
}))
