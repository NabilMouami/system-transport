import {Fragment} from 'react'
import { RiGpsFill } from 'react-icons/ri'

function PrintBon() {
  return (
    <Fragment>
        <div className='text-black bg-white p-4 w-full rounded-xl m-4'>
    <div className='flex items-center justify-between'> 
    <div className='flex flex-col gap-3 items-center justify-center'>
       <h1 className='text-4xl underline text-black font-bold'>HIBA TRANS</h1>
       <h3 className='text-black font-bold'>Import - Export</h3>
       <p className='text-center'>Transport de marchandises<br/>National et international pour compte d'autruit<br/>Transport de bagages et Colis.</p>
       <hr className="w-full border-solid border-indigo-500 border-2" />
        <p className='text-center flex items-center'><RiGpsFill className='text-3xl mb-4'/> <span>Pres de coissant-rouge<br/> Segangan-Nador.</span></p>
     </div>   
     <div className='flex flex-col gap-3 items-center justify-center'>
      <img src="/images/trans-bagage.jpg" alt="trans-bagages" width="150" height="150"/>
      <h2 className='uppercase font-bold'>bon bagage</h2>
      <h2 className='uppercase font-bold'>N:03577</h2>
    </div>   
    <div className='flex flex-col gap-3 items-center justify-center'>
         <div className='flex items-center justify-center gap-2'>
            <img src="/images/maroc.jpg" alt="flag1" width="30" height="30"/>
            <img src="/images/espagne.jpg" alt="flag2" width="30" height="30"/>
            <img src="/images/france.jpg" alt="flag3" width="30" height="30"/>
            <img src="/images/niderland.png" alt="flag4" width="30" height="30"/>
            <img src="/images/belgique.jpg" alt="flag5" width="30" height="30"/>
            <img src="/images/germany.jpg" alt="flag5" width="30" height="30"/>
            <img src="/images/europe.jpg" alt="flag5" width="30" height="30"/>

         </div>
         <span>Ville: Barcelone</span>  
     <span>Date: 30-11-2023</span>  
     <span>Tel: 063839928</span>  

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
            <td className="font-bold">Prix</td>
          </tr>
        </thead>
          <Fragment>
            <tbody>
              <tr className="h-10">
                <td>Amine bakouri</td>
                <td>0328488484</td>
                <td>walid farid</td>
                <td>s737389</td>
                <td>2</td>
                <td>zacht/a9rab</td>
                <td>10L+40kg</td>
                <td>2500DH</td>

              </tr>
            </tbody>
          </Fragment>
      </table>
      </div>
    </Fragment>
  )
}

export default PrintBon
