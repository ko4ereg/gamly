import HelpButton from '../components/common/HelpButton/HelpButton';
import Indicator from '../components/common/Indicator/Indicator';
import PaymentMethods from '../components/common/PaymentMethods/PaymentMethods';
import g from './../Globalstyles.module.css';


const SubscribePage = (props) => {


    return (
        <div className={g.container}>
            <PaymentMethods

            />

            <Indicator />

            <HelpButton small={true}/>
        </div>)
}

export default SubscribePage;