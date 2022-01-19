import React, { useState } from 'react';

const Home = (props) => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText('');
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input value={text} type="text" onChange={onChange} />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    );
};

export default Home;
