import { useRef, useState } from 'react';


function Blog() {
  const messageRef = useRef();

  const [message, setMessage] = useState(
    'If your name is less than 3 characters, it will be rejected.'
  );

  // this function will be triggered when the input changes
  const inputChangeHandler = (e) => {
    const enteredText = e.target.value;

    // In the beginning or when the user deletes everything, use the default style
    if (enteredText.length === 0) {
      setMessage(
        'If your name is less than 3 characters, it will be rejected.'
      );
      messageRef.current.classList.remove('message--error', 'message--success');
      messageRef.current.classList.add('message--default');
    } else if (enteredText.length < 3) {
      setMessage('Your name is too short.');
      messageRef.current.classList.remove(
        'message--default',
        'message--success'
      );
      messageRef.current.classList.add('message--error');
    } else {
      setMessage('Your name is valid.');
      messageRef.current.classList.remove('message--default', 'message--error');
      messageRef.current.classList.add('message--success');
    }
  };

  // this function is called when the button gets clicked
  const buttonClickHandler = (e) => {
    e.currentTarget.classList.toggle('button--dark');
    e.currentTarget.classList.toggle('button--light');
  };

  return (
    <>
      <div className='container'>
        <div>
          <h2>Welcome to KindaCode.com</h2>
          <input
            type='text'
            onChange={inputChangeHandler}
            placeholder='Enter your name'
            className='input'
          />
        </div>
        <div ref={messageRef} className='message message--default'>
          {message}
        </div>

        <button onClick={buttonClickHandler} className='button button--light'>
          Toggle My Color
        </button>
      </div>
    </>
  );
}

export default Blog;