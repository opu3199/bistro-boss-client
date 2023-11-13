/* eslint-disable react/prop-types */

const Foodcart = ({items}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={items.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{items.name}</h2>
          <p>{items.recipe}</p>
          <p>{items.price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">ADD To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default Foodcart;