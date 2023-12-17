import React, { useState, useEffect, Fragment } from "react";
import { RiGpsFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import custom_axios from "../../axios/AxiosSetup";
function Details() {
  const Bon = useSelector((state: any) => state.Load);
  const { Col } = Bon;
  const [listBons, setListUsers] = useState([
    {
      id: 7,
      ville: "Paris",
      date: "2023-12-04",
      telephoneClient: "063993902",
      destinataire: "Amine skali",
      telephoneDestinataire: "0339949493",
      expediteur: "bilal lamkadam",
      cin: "s93030",
      nbrColis: 1,
      genreColis: "Carton",
      poids: "8kg",
      prix: 180,
      numBon: "41220231526",
      reste: 300,
      status: "impayer",
      user: {
        id: 1,
        firstName: "Nabil",
        lastName: "Mouami",
        email: "nabil.admin@gmail.com",
        password: "test",
        role: "ADMIN",
      },
    },
  ]);
  console.log(listBons);
  useEffect(() => {
    custom_axios
      .get(`/bon/bons/${Col.numBon}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setListUsers(res.data);
      });
  }, []);
  return (
    <Fragment>
      <div className="text-black bg-white p-4 w-full rounded-xl m-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="text-4xl underline text-black font-bold">
              HIBA TRANS
            </h1>
            <h3 className="text-black font-bold">Import - Export</h3>
            <p className="text-center">
              Transport de marchandises
              <br />
              National et international pour compte d'autruit
              <br />
              Transport de bagages et Colis.
            </p>
            <hr className="w-full border-solid border-indigo-500 border-2" />
            <p className="text-center flex items-center">
              <RiGpsFill className="text-3xl mb-4" />{" "}
              <span>
                Pres de coissant-rouge
                <br /> Segangan-Nador.
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <img
              src="/images/trans-bagage.jpg"
              alt="trans-bagages"
              width="150"
              height="150"
            />
            <h2 className="uppercase font-bold">bon bagage</h2>
            <h2 className="uppercase font-bold">N:{Col.numBon}</h2>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <img src="/images/maroc.jpg" alt="flag1" width="30" height="30" />
              <img
                src="/images/espagne.jpg"
                alt="flag2"
                width="30"
                height="30"
              />
              <img
                src="/images/france.jpg"
                alt="flag3"
                width="30"
                height="30"
              />
              <img
                src="/images/niderland.png"
                alt="flag4"
                width="30"
                height="30"
              />
              <img
                src="/images/belgique.jpg"
                alt="flag5"
                width="30"
                height="30"
              />
              <img
                src="/images/germany.jpg"
                alt="flag5"
                width="30"
                height="30"
              />
              <img
                src="/images/europe.jpg"
                alt="flag5"
                width="30"
                height="30"
              />
            </div>
            <span>Ville:{Col.ville}</span>
            <span>Date:{Col.date} </span>
            <span>Tel:{Col.telephoneClient}</span>
          </div>
        </div>
        <table width="100%" className="mt-10">
          <thead>
            <tr className="bg-gray-100 p-1">
              <td className="font-bold">Destinataire</td>
              <td className="font-bold">Telephone</td>
              <td className="font-bold">Expediteur</td>
              <td className="font-bold">C.I.N</td>
              <td className="font-bold">Nbr.Colis</td>
              <td className="font-bold">Genre De Colis</td>
              <td className="font-bold">Poids(Kg,L...)</td>
              <td className="font-bold">Prix(Dh)</td>
            </tr>
          </thead>
          {listBons.map(
            ({
              destinataire,
              telephoneDestinataire,
              expediteur,
              cin,
              nbrColis,
              genreColis,
              poids,
              prix,
              id,
            }) => (
              <Fragment key={id}>
                <tbody>
                  <tr className="h-10">
                    <td>{destinataire}</td>
                    <td>{telephoneDestinataire}</td>
                    <td>{expediteur}</td>
                    <td>{cin}</td>
                    <td>{nbrColis}</td>
                    <td>{genreColis}</td>
                    <td>{poids}</td>
                    <td>{prix}</td>
                  </tr>
                </tbody>
              </Fragment>
            )
          )}
        </table>
        <div className="flex items-center justify-between m-6">
          <p className="font-bold text-xl">
            User:
            <span className="text-blue-700">
              {" "}
              {listBons[0]?.user?.firstName} {listBons[0]?.user?.lastName}
            </span>
          </p>
          <p className="font-bold text-xl">
            Payer/Impayer:<span className="text-blue-700"> {Col.status}</span>
          </p>
          <p className="font-bold text-xl">
            Reste:<span className="text-orange-700"> {Col.reste}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Details;
