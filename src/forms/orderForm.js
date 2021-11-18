import React from 'react'
import * as api from '../api/api';
import {Formik} from 'formik';
import * as yup from 'yup';

const OrderForm = () => {
    let validationSchema = yup.object().shape({
        email: yup.string().email(),
      });
    return (
        <Formik initialValues={
            {
                "email": "",
                "subject": "",
                "deadline":Date.now(),
                "instructions":"",
                "attachment": ""
            }
        } 
        validationSchema = {validationSchema}
        onSubmit={(values, { setSubmitting }) => {

            setTimeout(() => {
                api.sendForm(values);

              setSubmitting(false);   
            }, 400);
   
          }}
        >
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form id="order-form" className='card' onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">
                            Your e-mail 
                        </label>
                        <input
                            type='email'
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="subject">Subject</label>
                        <select name="subject" id="subject"
                                     onChange={handleChange}

                                     onBlur={handleBlur}
                        
                                     value={values.subject}
                        >
                            <option value="chem">Chemistry</option>
                            <option value="bio"> Biology</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="deadline">Deadline</label>
                        <input type='datetime-local' name="deadline" id="deadline"
                                     onChange={handleChange}

                                     onBlur={handleBlur}
                        
                                     value={values.deadline}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="instructions">Additional instructions?</label>
                        <textarea name="instructions" id="instructions" cols="20" rows="5"
                                     onChange={handleChange}

                                     onBlur={handleBlur}
                        
                                     value={values.instructions}></textarea>
                    </div>
                    <div className="input-group">
                        <label htmlFor="attachment">Attach file</label>
                        <input type="file" name="attachment" id="attachment" 
                                     onChange={handleChange}

                                     onBlur={handleBlur}
                        
                                     value={values.attachment}/>
                    </div>
                    <div className="input-group">
                        <input className='btn' type="submit" value="Submit"/>
                    </div>
                </form>
                )
            }
        </Formik>
        
    )
}

export default OrderForm;
