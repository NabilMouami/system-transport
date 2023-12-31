import { Fragment, useEffect, useState, useRef, useCallback } from "react";
import {
  RiGpsFill,
  RiPhoneFill,
  RiPhoneFindFill,
  RiPhoneLine,
} from "react-icons/ri";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { toast } from "react-toastify";
import { resetBon } from "../../actions/action";
import { useDispatch } from "react-redux";
function PrintBon({ date, ville, telephoneClient, NumBon, post, setPost }) {
  const Bon = useSelector((state) => state.Bon);
  const { cart } = Bon;
  const [totalBon, setTotalBon] = useState(0);
  const dispatch = useDispatch();
  const componentRef1 = useRef();

  const handlePrint = () => {
    window.print();
  };
  function toPrecision(num, precision) {
    num = Math.trunc(num * 10 ** precision) / 10 ** precision;
    return num;
  }

  const handleAfterPrint = useCallback(() => {
    dispatch(resetBon()); // tslint:disable-line no-console
  }, []);
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotalBon(sum);
      }
    }
  });

  return (
    <Fragment>
      <ReactToPrint
        trigger={() => (
          <button
            className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            onClick={() => handlePrint()}
          >
            Print / Download
          </button>
        )}
        content={() => componentRef1.current}
        onAfterPrint={handleAfterPrint}
      />
      <div
        ref={componentRef1}
        className="h-auto text-black bg-white p-4 w-full rounded-xl m-4"
      >
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
            <hr className="w-full border-solid border-indigo-500 border-1" />
            <p className="text-center flex items-center">
              <RiGpsFill className="text-3xl mb-4" />{" "}
              <span>
                Pres de coissant-rouge
                <br /> Segangan-Nador.
              </span>
            </p>
            <hr className="w-full border-solid border-indigo-500 border-1" />
            <div className="flex items-center flex-row gap-5">
              <p className="flex items-center">
                <RiPhoneFill /> <span>07.63.78.19.53</span>
              </p>
              <p className="flex items-center">
                <RiPhoneFill /> <span>06.43.10.04.39</span>
              </p>
              <p className="flex items-center">
                <RiPhoneLine /> <span>0034632065676</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <img
              src="/images/trans-bagage.jpg"
              alt="trans-bagages"
              width="150"
              height="150"
            />
            <h2 className="uppercase font-bold">bon bagage</h2>
            <h2 className="uppercase font-bold">N: {NumBon}</h2>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center justify-center gap-2 mr-3">
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
            <p>
              <span className="font-bold underline">Ville:</span> {ville}
            </p>
            <p>
              <span className="font-bold underline">Date:</span> {date}
            </p>
            <p>
              <span className="font-bold underline">Tel:</span>{" "}
              {telephoneClient}
            </p>
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
          {cart.map(
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
              <Fragment>
                <tbody key={id}>
                  <tr className="h-10">
                    <td>{destinataire}</td>
                    <td>{telephoneDestinataire}</td>
                    <td>{expediteur}</td>
                    <td>{cin}</td>
                    <td>{nbrColis}</td>
                    <td>{genreColis}</td>
                    <td>{poids}</td>
                    <td className="amount">{prix}</td>
                  </tr>
                </tbody>
              </Fragment>
            )
          )}
        </table>
        <div className="flex items-center justify-between m-4">
          <p>
            <span className="font-bold sans underline">Signature:</span>
          </p>
          <p>
            <span className="font-bold sans">Total Prix: {totalBon}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default PrintBon;
