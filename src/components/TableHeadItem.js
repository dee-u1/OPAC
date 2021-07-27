import React from "react";

class TableHeadItem extends React.Component{
    render(){
        return (
            <td>
                {this.props.item}
            </td>
        );
    }
};

export default TableHeadItem;