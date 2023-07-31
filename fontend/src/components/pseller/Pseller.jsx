import "./pseller.css";
import vendors from "../../db/vendor";



import SellerCard from "../sellercard/SellerCard";
import { BlockTitle1 } from "../blockTitle/BlockTitle";








//vendors
const Pseller = () => {

    return(
        <div className="pseller">
            <BlockTitle1 title="Our Popular Sellers" />

            <div className="scontainer">  

                {vendors.map(vendor => {
                    return(
                        <SellerCard key={vendor.id} sellerObj ={ vendor } />
                    )
                })}
            </div>
        </div>
    )
}

export default Pseller;