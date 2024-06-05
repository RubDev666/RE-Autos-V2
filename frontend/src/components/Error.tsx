import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHeartCrack
} from '@fortawesome/free-solid-svg-icons';

export default function Error({title, message}: {title: string, message: string}) {
    return(
        <div className="error">
            <FontAwesomeIcon icon={faHeartCrack} className="error-icon color-1"/>
            <h1 className="t-family">{title}</h1>
            <p className="p-family color-4">{message}</p>
        </div>
    )
}