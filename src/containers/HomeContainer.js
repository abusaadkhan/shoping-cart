import Home from '../components/Home'
import {connect} from "react-redux"
import {addToCart, emptyCart} from '../services/Actions/actions'

const mapStateToProps= state =>({
    data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data =>dispatch(addToCart(data)),
    emptyCartHandler:data =>dispatch(emptyCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)