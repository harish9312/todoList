import * as React from 'react';
import { connect } from 'react-redux';
import { doneTodo, moveUp, moveDown } from '../../actions/index';
interface IItems {
    items: any;
    doneTodo: Function;
    moveUp: Function;
    moveDown: Function;
}
class TODOList extends React.Component<IItems, void> {
    render() {
        return (
            <div>
                <h4>TODO Items</h4>
                <ul className="list-group">
                    {
                        this.props.items.map(item => {
                            return (
                                <li 
                                    key={item.id}
                                    className="list-group-item" 
                                >
                                {item.todo}
                                    <div
                                        className="list-item left-button" 
                                    >
                                        <i
                                            onClick={() => this.props.moveUp(item.id)}
                                            className="fa fa-chevron-up" 
                                            aria-hidden="true" 
                                        />

                                    </div>
                                    &nbsp;
                                    <div
                                             className="list-item left-button"
                                    >
                                        <i
                                            onClick={() => this.props.moveDown(item.id)}
                                            className="fa fa-chevron-down" 
                                            aria-hidden="true" 
                                        />
                                    </div>
                                    <div
                                        className="list-item right-button"
                                    >
                                        <i
                                            onClick={() => this.props.doneTodo(item.id)}
                                            className="fa fa-square-o" 
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
        items: state.todo
    };
}

export default connect(mapStateToProps, { doneTodo, moveUp, moveDown })(TODOList as any);
