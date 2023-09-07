import React, { useState  } from 'react';

const Create = () => {
    const [state, setState] = useState({
        title: '',
        content: '',
        user: ''
    });


    const { title, content, user } = state;

    const handleChange = name => event => {
        console.log('name', name, 'event', event.target.value);
        setState({
             ...state, [name]: event.target.value
        });
    };

  return (
    <div className="container p-5">
        <h1>CREATE POST</h1>
        <br />
        <form>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Post title" 
                required 
                onChange={handleChange('title')}
                value={title}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Content</label>
                <textarea 
                type="text" 
                className="form-control" 
                placeholder="Write something.." 
                required 
                onChange={handleChange('content')}
                value={content}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">User</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Your name" 
                required 
                onChange={handleChange('user')}
                value={user}
                />
            </div>
            <div>
                <button className="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
  )
}

export default Create