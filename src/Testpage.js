import {Link} from 'react-router-dom';

const Testpage = () => {

    return (
        <div>
            <h1>Test Page</h1>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );

}

export default Testpage;