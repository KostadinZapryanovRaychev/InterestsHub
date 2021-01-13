import React from "react";
const CreateNewPost = props => {
  return (
    <>
    <section className="create-post">
      <form onSubmit={props.savePost}>
      {props.isQuantumPhysicsOn == false  &&
        <h1>Create New Post</h1>
      }
      <h1>Enter your comment</h1>
      {props.isQuantumPhysicsOn == false  &&
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
      }
       <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Name"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder="Content"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        {props.isQuantumPhysicsOn == false  &&  
        <button className="button">Save Post</button> } 
        <button className="button">Save Comment</button>
        </section> 
      </form>
      </section>
    </>
  );
};
export default CreateNewPost;