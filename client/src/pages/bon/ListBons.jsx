import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import custom_axios from "../../axios/AxiosSetup";
import { RiChatDeleteFill, RiFilter2Fill } from "react-icons/ri";
import { DataGrid } from "@mui/x-data-grid";
import { detailsAcc } from "../../actions/action";
import Select from "react-select";

import Box from "@mui/material/Box";

function ListBons() {
  const [listUsers, setListUsers] = useState([]);
  const [listFiltred, setListFiltred] = useState([]);
  const [date, setDate] = useState("");
  const [status, setSelectPayer] = useState("Tous");
  const [selectVille, setSelectVille] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    custom_axios
      .get("/bon", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then(async (res) => {
        await setListUsers(res.data);
        await setListFiltred(res.data);
      });
  }, []);
  //Loading the city's in select

  const selOptions = [];
  // var test = [...new Set(projectsList)];
  // console.log("after: " + test);

  const ids = listFiltred.map((o) => o.ville);
  const filtered = listFiltred.filter(
    ({ ville }, index) => !ids.includes(ville, index + 1)
  );

  for (var i = 0; i < filtered.length; i++) {
    var obj = {};
    if (filtered.length > 0) {
      // obj["date"] = projectsList[i].date;
      obj["value"] = filtered[i].ville;
      obj["label"] = filtered[i].ville;
    }
    selOptions.push(obj);
  }
  const handle = (e) => {
    setSelectVille(e.label);
    const newFilter = listFiltred.filter((bon) => bon.ville === e.label);
    setListFiltred(newFilter);
  };
  const details = (dts) => {
    dispatch(detailsAcc(dts));
    navigate("/details-bon/" + dts.numBon);
  };
  const update = (dts) => {
    dispatch(detailsAcc(dts));
    navigate("/changer-bon/" + dts.id);
  };
  const deleteEmployee = (id) => {
    custom_axios
      .delete(`/bon/${id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then(() => {
        setListFiltred(listFiltred.filter((row) => row.id !== id));
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
  const filterDate = () => {
    if (date === "") {
      setListFiltred(listUsers);
    } else {
      const newFilter = listFiltred.filter((bon) => bon.date === date);
      setListFiltred(newFilter);
    }
  };
  const filterImpayer = (e) => {
    if (listUsers.length > 0) {
      setSelectPayer(e.target.value);
      if (listUsers.length > 0) {
        const newFilter = listUsers.filter(
          (bon) => bon.status === e.target.value
        );
        setListFiltred(newFilter);
        if (e.target.value === "Tous") {
          setListFiltred(listUsers);
          return;
        }
      }
    }
  };
  const Annuler = () => {
    setListFiltred(listUsers);
    setSelectPayer("Tous");
  };
  const columns = [
    {
      field: "expediteur",
      headerName: "Expediteur:",
      headerClassName: "super-app-theme--cell",

      width: 140,
    },
    {
      field: "destinataire",
      headerName: "Destinatire:",
      headerClassName: "super-app-theme--cell",

      width: 140,
    },
    {
      field: "genreColis",
      headerName: "Genre De Colis:",
      headerClassName: "super-app-theme--cell",

      width: 130,
    },
    {
      field: "nbrColis",
      headerName: "Nbr De Colis:",
      headerClassName: "super-app-theme--cell",

      width: 60,
    },
    {
      field: "poids",
      headerName: "Poids:",
      headerClassName: "super-app-theme--cell",

      width: 60,
    },
    {
      field: "unity",
      headerName: "Dh/Euro:",
      headerClassName: "super-app-theme--cell",

      width: 80,
    },

    {
      field: "status",
      headerName: "Payment:",
      headerClassName: "super-app-theme--cell",

      width: 110,
    },
    {
      field: "date",
      headerName: "Date:",
      headerClassName: "super-app-theme--cell",

      width: 100,
    },
    {
      field: "modification",
      headerName: "Modifications",
      width: 190,
      renderCell: (params) => {
        return (
          <>
            <button
              className="collabListEdit"
              onClick={() => update(params.row)}
            >
              Changer
            </button>
            <button
              className="collabListEdit"
              onClick={() => details(params.row)}
            >
              Details
            </button>
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
      <div className="font-sans p-4">
        <h1 className="text-blue-600 underline  text-3xl font-bold text-center m-2">
          List Bons:
        </h1>
        <div className="bg-white p-4 rounded-xl flex items-center justify-between">
          <div>
            <label className="ml-12 mb-2 block text-lg font-bold text-black">
              Status Bon:
            </label>

            <select
              className="ml-12 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={status}
              onChange={(e) => filterImpayer(e)}
            >
              <option value="Tous">Tous</option>
              <option value="payer">Payer</option>
              <option value="impayer">Impayer</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-black font-bold">Ville :</span>
            <Select
              className="selOptions"
              options={selOptions}
              onChange={handle}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold">
              Choisir une date a afficher:{" "}
            </label>
            <input
              type="date"
              className="p-4 m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500"
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
            <button
              className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors"
              onClick={filterDate}
            >
              <RiFilter2Fill /> Afficher
            </button>
          </div>
          <div>
            <button
              onClick={() => Annuler()}
              className="text-red-400 bg-secondary-100 p-2 rounded-xl"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
      <Box
        sx={{
          height: 800,
          width: "100%",
          "& .super-app-theme--cell": {
            backgroundColor: "#fff",
            color: "#1a3e72",
            fontWeight: "bold",
          },
          "& .payer": {
            color: "#3CB371",
            fontWeight: "700",
            fontSize: "22px",
          },
          "& .impayer": {
            color: "#FF0000",
            fontWeight: "700",
            fontSize: "22px",
          },
        }}
      >
        <DataGrid
          rows={listFiltred}
          columns={columns}
          getRowId={(row) => row.id}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getCellClassName={(params) => {
            switch (params.value) {
              case "payer":
                return "payer";
              case "impayer":
                return "impayer";
              default:
                return;
            }
          }}
        />
      </Box>
    </div>
  );
}

export default ListBons;
