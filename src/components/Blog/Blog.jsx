import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  const{ photo ,curse_name, curse_description,price,credit}=blog;
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={photo} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{curse_name}</h2>
      <p>{curse_description}</p>
      <div className='flex-wrap justify-between '>
            <p>Price:{price}</p>
            <p>Credit:{credit}</p>
        </div> 
      <div className="card-actions">
     
        <button className="btn btn-primary">Select</button>
      </div>
    </div>
  </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object
}
export default Blog;