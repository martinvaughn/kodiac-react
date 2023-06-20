import { 
    DataGrid, 
    GridCellParams,
    GridActionsCellItem,
    GridToolbar
} from "@mui/x-data-grid";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { FC, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { IApiData, IRow, IPrevRows } from '../IApiData/IApiData';
import { Button } from "@mui/material";

interface IParams {
  colDef: {
    field: string;
  }
  row: {
    id: number;
    status: string;
  };
}

const LeadGrid:FC<IApiData> = (props) => {
    const history = useHistory();

    const columns: any = [
      { field: 'name', headerName: 'Name', flex: .2, editable: false}, 
      { field: 'email', headerName: 'Email', width: 150, editable: false, hide: true},
      { field: 'phone', headerName: 'Phone', flex: .2, editable: false},
      { field: 'status', headerName: 'Status', flex: .2, editable: false},
      {
        field: "details",
        headerName: "Details",
        flex: .1,
        disableClickEventBubbling: true,
        renderCell: () => {
          return (
            <Button variant="contained" color="primary">
              Details
            </Button>
          );
      }},
      {
        field: 'actions',
        type: 'actions',
        width: 35,
        getActions: (params: IParams) => [
            <GridActionsCellItem
              icon={<RadioButtonUncheckedIcon />}
              label="Set Lead Interested"
              onClick={setStatus(params, "Interested")}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<CheckCircleOutlineIcon />}
              label="Set Lead Closed"
              onClick={setStatus(params, "Closed")}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<HighlightOffIcon />}
              label="Set Lead Dropped"
              onClick={setStatus(params, "Dropped")}
              showInMenu
            />,
        ]
      },
      { field: 'notes', headerName: 'Notes', width: 0, editable: false, hide: true},
    ];

    const setStatus = useCallback(
      (params: IParams, status: string) => () => {
        props.setRows((prevRows: IPrevRows) => {  
          const newRows = prevRows.rows.map((row: IRow) => {
            if (row.id === params.row.id) {
              row.status = status;
              return row;
            } 
            return row; 
          });
          return { rows: newRows };
        });
    },[],);
    

    const selected = (params: GridCellParams) => {
      const value = params.colDef.field;
      if (!(value === "details")) { 
        return;
      }
      const location = {
        pathname: "/lead/" + params.row.id,
        state: { row: params.row}
      }
      history.push(location);
    }
    
    return(
        <>
            <div style={{ height: 400, width: '95%', padding: "10px", margin: "auto"}}>
              <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                  <DataGrid 
                    columns={columns}
                    rows={props.rows}
                    onCellClick={selected}
                    disableSelectionOnClick
                    components={{
                      Toolbar: GridToolbar,
                    }}
                  />
                </div>
              </div>
            </div>
        </>
    );
}

export default LeadGrid;