// import { useParams } from "react-router-dom";
// import Menu from "../Component/Menu"
import Section from "../Component/Section";
import Hook from "../Hook.jsx/Hook";
import Menucategories from "./Menucategories";
import Menucover from "./Menucover";
const Ourmenu = () => {
    const [menu]=Hook()
    // const {category}=useParams()
    // console.log(category)
    const ofered=menu.filter(item=>item.category === 'offered')
    const dessert=menu.filter(item=>item.category === 'dessert')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const salad=menu.filter(item=>item.category === 'salad')
    const soup=menu.filter(item=>item.category === 'soup')
    return (
        <div className="space-y-10 ">
        
           
          <Menucover></Menucover> 

          <div>
            < div className=' w-1/2 mx-auto space-y-10 p-10'>
                <h1 className='text-yellow-500 font-bold border-b-4 pb-4 text-3xl'>---Don not Miss---</h1>
                
                <h1 className='text-4xl  border-b-4 pb-4  font-bold'>TODAYS OFFER</h1>
            </div>
            </div>

          <Menucategories items={ofered} ></Menucategories>
          <Section></Section>
          <Menucategories items={dessert} ></Menucategories>
          <Section></Section>
          <Menucategories items={pizza} ></Menucategories>
          <Section></Section>
          <Menucategories items={salad} ></Menucategories>
          <Section></Section>
          <Menucategories items={soup} ></Menucategories>
         
        
        
        </div>
    );
};

export default Ourmenu;