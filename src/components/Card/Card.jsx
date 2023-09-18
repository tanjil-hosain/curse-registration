import PropTypes from 'prop-types';
import Cards from '../Cards/Cards';

const Card = ({cards, totalCredit, totalHourRemaining, totalCost}) => {
    return (
        <div className='ml-10 mt-8 '>
            <div className='bg-gray-200 p-6 rounded-lg space-y-3'>
            <h5 className='text-blue-400  font-bold pb-2 border-b-2 border-gray-400'>Credit Hour Remaining : {totalHourRemaining}hr</h5>
           <div className='pb-2 border-b-2 border-gray-400' > 
            <h3 className='text-2xl font-bold'>Curse Name</h3>
           
           { 
               cards.map((blog , idx) =><Cards key={blog.id} blog={blog} idx={idx}> </Cards>
                   
               )
           }</div>
             <h3 className=' font-semibold pb-2 border-b-2 border-gray-400'>Total Credit Hour:{totalCredit}</h3>
            <h3 className='font-semibold'>Total Price:{totalCost} USD</h3>

            </div>
        </div>
    );
};
Card.propTypes={
        cards:PropTypes.array.isRequired,
        totalHourRemaining:PropTypes.number.isRequired,
        totalCost:PropTypes.number.isRequired,
        totalCredit:PropTypes.number.isRequired
}
export default Card;