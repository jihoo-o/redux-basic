import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = ({ toDos }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const todo = toDos.find((todo) => todo.id === parseInt(id));

    useEffect(() => {
        if (!todo) {
            navigateToHome();
        }
    }, []);

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <>
            <h1>{todo && todo.text}</h1>
            <h3>created at {todo?.id}</h3>
            <button onClick={navigateToHome}>back</button>
        </>
    );
};

const mapStateToProps = (state) => {
    return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
