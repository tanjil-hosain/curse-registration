import PropTypes from 'prop-types';
const Cards = ({blog, idx}) => {
    console.log(blog)
    return (
        <div>
            <h6 className='text-sm'>{idx+1}. {blog.curse_name}</h6>
        </div>
    );
};
Cards.propTypes={
    blog:PropTypes.object.isRequired,
    idx:PropTypes.number.isRequired
}
export default Cards;