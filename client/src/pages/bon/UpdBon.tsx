import React, { useState, Fragment } from "react";

import custom_axios from "../../axios/AxiosSetup";
import { getLoginInfo } from "../../utils/LoginInfo";
import { PostBon } from "../../models/BonBagage";
import { toast } from "react-toastify";
import { ajouteEnBon } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function UpdBon() {
  const { t } = useTranslation();

  const Bon = useSelector((state: any) => state.Load);
  const { Col } = Bon;

  const userId = getLoginInfo()?.userId;
  const dispatch = useDispatch();
  const [post, setPost] = useState<PostBon>({
    ville: Col.ville,
    date: Col.date,
    telephoneClient: Col.telephoneClient,
    destinataire: Col.destinataire,
    telephoneDestinataire: Col.telephoneDestinataire,
    expediteur: Col.expediteur,
    cin: Col.cin,
    nbrColis: Col.nbrColis,
    genreColis: Col.genreColis,
    poids: Col.poids,
    prix: Col.prix,
    numBon: Col.numBon,
    reste: Col.reste,
    unity: Col.unity,
  });
  const [status, setSelectPayer] = useState<string>(Col.status);
  const [unity, setSelectUnity] = useState<string>(Col.unity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSelectPayer = (e: any) => {
    setSelectPayer(e.target.value);
  };
  const handleSelectUnity = (e: any) => {
    setSelectUnity(e.target.value);
  };

  console.log(JSON.stringify({ ...post, status }));
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let id: any = userId;
    custom_axios
      .put(`/bon/${Col.id}`, JSON.stringify({ ...post, status, unity }), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res: any) => {
        toast.success("Changement Success De Bon Bagage!!", {
          position: "top-right",
        });
        dispatch(ajouteEnBon(res.data) as any);
      });
  };
  return (
    <Fragment>
      <div className="bg-gray-300 text-black p-8 rounded-xl mb-8">
        <h1 className="font-bold text-xl text-orange-500">
          Changez Les Informations Sur Bagage:
        </h1>
        <hr className="my-8 border-gray-500/30" />
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                {t("Bon.ville")} <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="w-[30%]">
              <input
                type="text"
                name="ville"
                defaultValue={post.ville}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Ville En Europe:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                {t("Bon.date")} <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="date"
                className="py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="dd/mm/yyyy"
                name="date"
                defaultValue={post.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Telephone <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="telephoneClient"
                defaultValue={post.telephoneClient}
                onChange={handleChange}
                className="py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Telephone De Client:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                {t("Bon.destinataire")} <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="destinataire"
                defaultValue={post.destinataire}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Destinataire:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Telephone {t("Bon.destinataire")}{" "}
                <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="telephoneDestinataire"
                defaultValue={post.telephoneDestinataire}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Phone Destinataire:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                {t("Bon.expediteur")} <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="expediteur"
                defaultValue={post.expediteur}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Expediteur:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                C.I.N {t("Bon.expediteur")}{" "}
                <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="cin"
                defaultValue={post.cin}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Cin Expediteur:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nbr Collis <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                step="any"
                name="nbrColis"
                defaultValue={post.nbrColis}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Nombre De Collis:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                {t("Bon.genre")} de Collis{" "}
                <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="genreColis"
                defaultValue={post.genreColis}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Genre De Collis:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                {t("Bon.poids")}(Kg/L/...){" "}
                <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="poids"
                defaultValue={post.poids}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Poids:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                {t("Bon.prix")} <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                step="any"
                name="prix"
                defaultValue={post.prix}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Entrez Numero Bon:"
              />
            </div>
            <div className="flex">
              <label className="ml-12 mb-2 block text-lg font-bold text-black">
                Dh ou Euro:
              </label>

              <select
                className="ml-12 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={unity}
                onChange={handleSelectUnity}
              >
                <option value="dh">DH</option>
                <option value="euro">Euro</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Num {t("Bon.num-bon")} <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                step="any"
                name="numBon"
                defaultValue={post.numBon}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Entrez Numero Bon:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                {t("Bon.reste")} <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                step="any"
                name="reste"
                defaultValue={post.reste}
                onChange={handleChange}
                className="w-full py-2 px-4 outline-none rounded-lg bg-white"
                placeholder="Entrez Numero Bon:"
              />
            </div>
            <div className="flex">
              <label className="ml-12 mb-2 block text-lg font-bold text-black">
                {t("Bon.status")}:
              </label>

              <select
                className="ml-12 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={status}
                onChange={handleSelectPayer}
              >
                <option value="payer">Payer</option>
                <option value="impayer">Impayer</option>
              </select>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30" />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-500/80 text-gray-100 py-2 px-4 rounded-lg hover:bg-red-500 transition-colors"
            >
              {t("Bon.button-changer")}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default UpdBon;
