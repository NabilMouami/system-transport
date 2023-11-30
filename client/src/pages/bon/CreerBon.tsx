import React, {useState,useEffect, Fragment } from 'react'
import {
    RiEdit2Line,
    RiShieldCheckLine,
    RiErrorWarningLine,
  } from "react-icons/ri";
import custom_axios from "../../axios/AxiosSetup";
import { getLoginInfo } from "../../utils/LoginInfo";
import { PostBon } from '../../models/BonBagage';
import { toast } from "react-toastify";
import PrintBon from './PrintBon';

const CreerBon : React.FC = () => {
  const userId  = getLoginInfo()?.userId;
  
  const [post, setPost] = useState<PostBon>({
    ville: "",
    date: "",
    telephoneClient: "",
    destinataire: "",
    telephoneDestinataire: "",
    expediteur: "",
    cin: "",
    nbrColis: 0,
    genreColis: "",
    poids: "",
    prix: 0,
    numBon: 1,
  });
 console.log(JSON.stringify(post))
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } =  e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let id : any = userId;
    custom_axios.post(`/bon/bons/${id}`, JSON.stringify(post),     
     { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    ).then(() => {
      toast.success("Ajoute Success De Bon Bagage!!", {
        position: "top-right",
      }); 
   });
  };
  return (
    <Fragment>
      <div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Validez Les Informations Sur Bagage:</h1>
        <hr className="my-8 border-gray-500/30" />
        <form onSubmit={submitHandler}>
       
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Ville <span className="text-red-500">*</span>
              </p>
            </div>
              <div className="w-[30%]">
                <input

                  type="text"
                  name="ville"
                  defaultValue={post.ville}
                  onChange={handleChange}

                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Ville En Europe:"
                />
              </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Date <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="date"
                className="py-2 px-4 outline-none rounded-lg bg-secondary-900"
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
             className="py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Telephone De Client:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Destinataire <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="destinataire"
                defaultValue={post.destinataire}
                onChange={handleChange}      
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Destinataire:"
              />
            </div>
          </div>
           <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
               Telephone Destinataire <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="telephoneDestinataire"
                defaultValue={post.telephoneDestinataire}
                onChange={handleChange}      
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Phone Destinataire:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Expediteur <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="expediteur"
                defaultValue={post.expediteur}
                onChange={handleChange}      
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Expediteur:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                C.I.N Expediteur <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="cin"
                defaultValue={post.cin}
                onChange={handleChange}      
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
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
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Nombre De Collis:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Genre de Collis <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="genreColis"
                defaultValue={post.genreColis}
                onChange={handleChange}      
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Genre De Collis:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Poids(Kg/L/...) <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="poids"
                defaultValue={post.poids}
                onChange={handleChange}      
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Poids:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Prix <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                step="any"
                name="prix"
                defaultValue={post.prix}
                onChange={handleChange}      
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Prix Par DH et sans virgule:"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Num Bon <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                step="any"
                name="numBon"
                defaultValue={post.numBon}
                onChange={handleChange}      
  
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Entrez Numero Bon:"
              />
            </div>
          </div>
          <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button type="submit" className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Ajoute Au Bon.
          </button>
        </div>
        </form>
       
      </div>     
       </div>
      <PrintBon />
    </Fragment>
  )
}

export default CreerBon
