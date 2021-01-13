import React from "react";
const ModifyPost = (props) => {
  return (
    <><section className="create-post">
      <form>
      {props.isQuantumPhysicsOn == false  &&
        <h1>Modify Post</h1> }
        <h1>Modify comment</h1>
        <input type='text'
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.content}
          placeholder="content"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        {props.isQuantumPhysicsOn == false  &&  
        <button className="button" onClick ={props.updatePost}>Update Post</button> }
        <button className="button" onClick ={props.updatePost}>Update commment</button>
        </section>
      </form>
      </section>
    </>
  );
};
export default ModifyPost;