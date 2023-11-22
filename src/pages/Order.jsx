import shop from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Hook from '../Hook/Hook';
import Foodcart from './Foodcart';
const Order = () => {
    const [menu]=Hook()
    const ofered=menu.filter(item=>item.category === 'offered')
    const dessert=menu.filter(item=>item.category === 'dessert')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const salad=menu.filter(item=>item.category === 'salad')
    const soup=menu.filter(item=>item.category === 'soup')
    const drinks=menu.filter(item=>item.category==='drinks')
    return (
        <div className='mb-10'>
          <img src={shop} alt="" />
          <div className=' space-y-3  w-1/2 mx-auto p-10 text-white absolute -mt-96 ml-60'>
            <h1 className='text-6xl font-bold'>Our Shop</h1>
            <p className='text-xl font-bold'>Would Yoy Try to Dish</p>
          </div>
          <div className='my-5'>
          <Tabs>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Desserts</Tab>
      <Tab>Drinks</Tab>
      
    </TabList>

    <TabPanel>
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                 salad.map(items=><Foodcart key={items._id} items={items}></Foodcart>)
            }
        </div>
   
    </TabPanel>
    <TabPanel>
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                 pizza.map(items=><Foodcart key={items._id} items={items}></Foodcart>)
            }
        </div>
   
    </TabPanel>
    <TabPanel>
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                 soup.map(items=><Foodcart key={items._id} items={items}></Foodcart>)
            }
        </div>
   
    </TabPanel>
    <TabPanel>
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                 dessert.map(items=><Foodcart key={items._id} items={items}></Foodcart>)
            }
        </div>
   
    </TabPanel>
    <TabPanel>
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                 drinks.map(items=><Foodcart key={items._id} items={items}></Foodcart>)
            }
        </div>
   
    </TabPanel>
  </Tabs>
  </div>
        </div>
    );
};

export default Order;