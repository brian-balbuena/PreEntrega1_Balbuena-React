import { FormControl, Stack, TextField, Typography } from "@mui/material";

const PurchaseRecord = () => {

   
    return (<>
        <FormControl style={{width: "50%"}}>
            <Typography variant="h5">Detalles de envio</Typography>
            <TextField  id="margin-none" label={"Nombre"}type="text" color="success" style={{margin: "10px"}}/>
            <TextField id="margin-none" label={"Mail"} type="email" color="success" style={{margin: "10px"}}/>
            <TextField id="margin-none"  label="Dirección" type="text" color="success" style={{margin: "10px"}}/>
        </FormControl>
    </>);
}

export default PurchaseRecord;