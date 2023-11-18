
const Additem = () => {

    const handleitem=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const category=e.target.category.value
        const price=e.target.price.value
        const recipe=e.target.recipe.value
        const image=e.target.image.value
        const newitem={name,category,price,recipe,image}
        console.log(newitem)
    }
    return (
        <div>
        

        <div className="">
        <h1 className="text-6xl text-center mb-6">Add Product</h1>

        <form onSubmit={handleitem} className=" mx-5 rounded-md  " >
            <div className="bg-stone-200">
            <div className=" md:flex gap-10 p-10  justify-center ">
        <div className="form-control w-full">
<label className="label">
<span className="label-text">Recipe Name</span>
</label>
<label className="input-group">
<input type="text" placeholder="Recipe Name" name="name" className="input input-bordered w-full " />

</label>
</div>

<div className="form-control w-full">
<label className="label">
<span className="label-text">Categories</span>
</label>
<label className="input-group">
{/* <input type="text" name="Categories" placeholder="Categories"  className="input w-full input-bordered" /> */}
<select className="select select-bordered  w-full max-w-xs" name="category">
  <option disabled selected>Categories</option>
  <option value="Salad">Salad</option>
  <option value="Pizza">Pizza</option>
  <option value="Soup">Soup</option>
  <option value="Desserts">Desserts</option>
  <option value="Drinks">Drinks</option>
</select>

</label>
</div>
</div>
<div className="  gap-10 p-10 bg-stone-200 justify-center ">
        <div className="form-control w-full">
<label className="label">
<span className="label-text">Price</span>
</label>
<label className="input-group">
<input type="text" placeholder="price" name="price" className="input input-bordered w-full " />

</label>
</div>

<div className="form-control w-full">
<label className="label">
<span className="label-text">Short description</span>
</label>
<label className="input-group">
<textarea placeholder="bio" className="w-full h-20" name="recipe"></textarea>
</label>
</div>

</div>
<div className="flex justify-start mb-5 p-10">
<input type="file" name="image" className="file-input file-input-bordered w-full max-w-xs" />
</div>
</div>


<button className="btn btn-block bg-stone-600 text-white">Add Item</button>
        </form>
    </div>
    </div>
    );
};

export default Additem;