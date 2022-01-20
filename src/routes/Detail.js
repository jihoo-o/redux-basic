import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actionCreators } from '../store';

const Detail = ({ toDos, onBtnClick }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [todo, setTodo] = useState(
        toDos.find((todo) => todo.id === parseInt(id))
    );

    useEffect(() => {
        if (!todo) {
            navigateToHome();
        }
    }, [todo]);

    const navigateToHome = () => {
        navigate('/');
    };

    const handleDelete = () => {
        onBtnClick(id);
        setTodo(null);
    };

    return (
        <>
            <h1>{todo && todo.text}</h1>
            <h3>created at {todo?.id}</h3>
            <button onClick={() => handleDelete()}>X</button>
            <button onClick={navigateToHome}>back</button>
        </>
    );
};

const mapStateToProps = (state) => {
    return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBtnClick: (id) => {
            dispatch(actionCreators.deleteToDo(parseInt(id)));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
