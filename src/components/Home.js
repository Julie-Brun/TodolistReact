import React from 'react';
import { withRouter} from 'react-router-dom';
import List from './List';

class Home extends React.Component {
    render() {
        return (
            <div>
                <List name="list_one" />
            </div>
        );
    }
}

export default withRouter(Home);
