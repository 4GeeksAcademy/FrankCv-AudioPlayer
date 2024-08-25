import React from "react";

const List = (props) => {
    return (
        <div className="container p-2 border border-light" onClick={props.onClickHandler}>
            <a className="list-group-item list-group-item-action ps-0 bg-dark text-light" >
                <div className="container d-flex align-items-center p-0" >
                    <div className="d-flex justify-content-end me-3 ms-1 ps-0" style={{ minWidth: "20px" }} >
                        {props.order}
                    </div>
                    {props.song}
                </div>
            </a>
        </div>
    )
}
export default List;  