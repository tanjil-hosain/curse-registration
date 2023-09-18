import PropTypes from 'prop-types';

const Blog = ({blog ,  handleBtnCard}) => {
  const{ photo ,curse_name, curse_description,price,credit}=blog;
    return (
  <div className='bg-white rounded-lg p-4 w-[280px] space-y-3 shadow-x1'>
      <div className='card   shadow-xl'>
    <figure className=" px-3 pt-3">
      <img  src={photo} alt="" className="rounded-xl w-80" />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">{curse_name}</h2>
      <small>{curse_description}</small>
      <div className='flex justify-between '>
        <p>$ Price: {price}</p>
        <p>Credit: {credit}hr</p>
          
      </div>

      <div className="">
     
        <button 
        onClick={() => handleBtnCard(blog)}
        className="btn  bg-blue-700 w-[190px] font-semibold">Select</button>
      </div>
    </div>
  </div>
  </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBtnCard:PropTypes.func.isRequired
}
export default Blog;