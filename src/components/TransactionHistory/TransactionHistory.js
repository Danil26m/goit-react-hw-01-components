import PropTypes from 'prop-types';
import "./TransactionHistory.css"
const TransactionHistory = ({items}) =>{
    return(
        <table className="transaction-history">
        <thead >
            <tr className='dd'>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {
            items.map(({id,type,amount,currency})=>{
                return(
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )
            })        
            }
        </tbody>
        </table>
    );
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}
export default TransactionHistory;