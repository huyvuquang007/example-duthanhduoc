import React from "react";

const formatDay = (date) => {
    return new Date(date).getDay();
};

function Comment(props) {
    return (
        <div>
            <div className="user-infor">
                <div className="user-name">{props.author.name}</div>
                <div className="user-age">{props.author.age}</div>
            </div>
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">{formatDay(props.date)}</div>
        </div>
    );
}

export default Comment;
