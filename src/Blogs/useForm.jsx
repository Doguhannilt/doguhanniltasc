import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/dark.css'
import javascript from 'highlight.js/lib/languages/javascript';
import { Link } from '@chakra-ui/react';
hljs.registerLanguage('javascript', javascript);


const introductionList = ["Manage form state, including handling form data and submission.", "Define validation rules for form fields and display error messages based on user input.", "Register form inputs, access their values, and handle form submission events."]

const useFormList = ["register: This function is used to manage input fields in a form. It allows you to define input fields as part of the form. For example, you can use this function to validate an input field or to retrieve its value.",
  "handleSubmit: This function handles form submission. It typically includes the actions to be taken when a form is submitted. For example, you can use this function to send form data to an API or process it in some way.",
  "errors: This object contains validation errors that occur during form validation. For instance, it holds errors related to required fields or specific validation rules for form inputs."]

const useformListDetail = ["<form onSubmit={handleSubmit(onSubmit)}>: This sets up a form with a submit event handler that calls the handleSubmit function when the form is submitted. The onSubmit function is passed as an argument to handleSubmit.",
  "<input type='text' name='name' ref={register({ required: true })} />: This is an input field for the user's name. It uses the register function from react-hook-form to register the input field with validation rules (in this case, required: true means the field is required). The name attribute is used to identify the input in the form data.", "{errors.name && <span>This field is required</span>}: This line checks if there's an error for the 'name' input field (e.g., if it's empty when it's required). If there's an error, it displays a message saying 'This field is required'.", "<button type='submit'>Submit</button>: This is a submit button that users can click to submit the form."]

const useForm = () => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);


  return (
    <div className='text-white xl:pl-60 xl:pr-60 font-mono'>
      {/* HEADER */}
      <div className='text-3xl mt-10 mb-4'>
        <h1>Create a form using useForm()</h1>
      </div>
      {/* INTRODUCTION TEXT*/}
      <div className='mb-6 mt-2 grid grid-rows-1 text-wrap '>
        <span className='tracking-tighter'>
          useForm is a custom React hook provided by the react-hook-form library. It is used to simplify form management and validation in React applications. With useForm, you can:
        </span>
        <div className='list-none mt-4 font-mono text-wrap'>
          {introductionList.map((list) => (
            <li className='mt-2'>- {list}</li>
          ))}
        </div>
      </div>
      <span><i>Note:</i> Don't forget to install useForm</span>
      <pre><code>npm install react-hook-form</code></pre>
      <div className='text-2xl  mt-10 mb-2'>
        <span>
          USAGE
        </span>
      </div>
      <pre className="language-javascript mt-4 ">
        <code>
          {`import React from 'react';
          import { useForm } from 'react-hook-form';

          const MyForm = () => {
            const { register, handleSubmit, errors, reset } = useForm();

            return (

            );
          };

          export default MyForm;`}
        </code>
        <div className='list-none mt-4 font-mono text-wrap'>
          {useFormList.map((list) => (
            <li className='mt-2'>{list}</li>
          ))}
        </div>
      </pre>

      {/* SECTION 2 */}
      <pre className="language-javascript mt-4 ">
        <code>
          {`import React from 'react';
          import { useForm } from 'react-hook-form';

          const MyForm = () => {
            const { register, handleSubmit, errors, reset } = useForm();

            return (
              <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Name:
                <input type="text" name="name" ref={register({ required: true })} />
                {errors.name && <span>This field is required</span>}
              </label>
        
              <label>
                Email:
                <input type="email" name="email" ref={register({ required: true })} />
                {errors.email && <span>This field is required</span>}
              </label>
        
              <button type="submit">Submit</button>
            </form>
            );
          };

          export default MyForm;`}
        </code>
        <div className='list-none mt-4 font-mono text-wrap'>
          {useformListDetail.map((list) => (
            <li className='mt-2'>- {list}</li>
          ))}
        </div>
      </pre>
      <div className='mt-10'>
        <span className=''>Also, I will share my repo that I used useform()</span>
        <div className='ml-6 mb-10'>
          <Link href='https://github.com/Doguhannilt/Hotel-books/tree/master/frontend/src/forms/ManageHotelForm' color='teal.500' isExternal>
            - Hotel Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default useForm;
