import * as React from 'react';
import { connect } from 'react-redux';
import { toBeDone } from '../../actions/index';

interface IDoneList {
    done: any;
    toBeDone: Function;
}

class DoneList extends React.Component<IDoneList, void> {

    render() {
        return (
            <div>
             <h4>Done</h4>
                <ul className="list-group">
                    {
                        this.props.done.map(item =>  {
                            return (
                                <li 
                                    key ={item.id} 
                                    className="list-group-item" 
                                    onClick={() => this.props.toBeDone(item.id)} 
                                >{item.todo}
                                <div
                                    className="list-item right-button"
                                >
                                <i 
                                    className="fa fa-check-square-o" 
                                    aria-hidden="true" 
                                />
                                </div>
                                </li>
                                
                            );
                        })
                    }                    
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        done : state.done
    };
}

export default connect(mapStateToProps, {toBeDone})(DoneList as any);
