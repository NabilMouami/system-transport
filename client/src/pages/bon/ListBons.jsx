import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import custom_axios from "../../axios/AxiosSetup";
import { RiChatDeleteFill } from "react-icons/ri";
import { DataGrid } from "@mui/x-data-grid";
import { detailsAcc } from "../../actions/action";

import Box from "@mui/material/Box";

function ListBons() {
    const [listUsers,setListUsers] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(()=> {
      custom_axios.get("/bon",
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") }
     }
      ).then((res) => {
        setListUsers(res.data);
      });
    },[]);

    const details =(dts)=> {
      dispatch(detailsAcc(dts));
      navigate("/changer-user/" + dts.id)
   };
    const deleteEmployee = (id) => {
      custom_axios.delete(`/bon/${id}`,
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }

      ).then(() => {
        setListUsers(listUsers.filter((row)=> row.id !== id))
      });
    };
    function popup(id, fname, lname) {
      Swal.fire({
        title: "Êtes vous sûr?",
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Annuler",
        confirmButtonText: "Oui, supprimez " + fname + " " + lname,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteEmployee(id);
          Swal.fire("Supprimé!", "Bon Bagage a été supprimé.", "success");
        }
      });
    }
    const columns = [
        {
          field: "expediteur",
          headerName: "Expediteur:",
          headerClassName: "super-app-theme--cell",
    
          width: 160,
        },
        {
          field: "destinataire",
          headerName: "Destinatire:",
          headerClassName: "super-app-theme--cell",
    
          width: 160,
        },
        {
          field: "nbrColis",
          headerName: "Nbr.Colis:",
          headerClassName: "super-app-theme--cell",
    
          width: 100,
        },
        {
          field: "genreColis",
          headerName: "Genre De Colis:",
          headerClassName: "super-app-theme--cell",
    
          width: 180,
        },
        {
            field: "poids",
            headerName: "Poids:",
            headerClassName: "super-app-theme--cell",
      
            width: 140,
          },
          {
            field: "date",
            headerName: "Date:",
            headerClassName: "super-app-theme--cell",
      
            width: 140,
          },
        {
          field: "modification",
          headerName: "Modifications",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                <button className="collabListEdit" onClick={()=> details(params.row)}>Changer</button>
                <button className="collabListEdit" onClick={()=> details(params.row)}>Details</button>
                <RiChatDeleteFill
                  className="collabListDelete"
                  onClick={() => {
                    popup(params.row.id, params.row.destinataire, params.row.ville);
                  }}
                />
              </>
            );
          },
        },
      ];
    
  return (
    <div className="collabList">
      <h1 className="text-black text-3xl font-bold text-center">List Bons:</h1>
  <Box
    sx={{
      height: 600,
      width: "90%",
      marginLeft: "50px",
      "& .super-app-theme--cell": {
        backgroundColor: "#fff",
        color: "#1a3e72",
        fontWeight: "700",
      },
    }}
  >
    <DataGrid
      rows={listUsers}
      columns={columns}
      getRowId={(row) => row.id}
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>
</div>
  )
}

export default ListBons
