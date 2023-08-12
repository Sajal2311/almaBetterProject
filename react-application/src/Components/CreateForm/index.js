import ImageUploader from "../Common/ImageUploader";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import actions from "../../actions/flashCardActions";
import { useDispatch } from "react-redux";
import "./styles/index.css";

const CreateForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    createGroup: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    formArray: Yup.array().of(
      Yup.object().shape({
        arrayInput: Yup.string().required("Required"),
      })
    ),
  });

  const initialValues = {
    createGroup: "",
    groupImage: null,
    description: "",
    formArray: [{ term: "", defination: "", arrayImage: null }],
  };

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(actions.addFlashCard(values));
  };

  return (
    <div className="form-container">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({ values }) => (
          <Form>
            <div className="card">
              <div>
                <div className="formUpper">
                  <div className="group-details">
                    <label htmlFor="creatGroup">Create Group*</label>
                    <Field type="text" id="creatGroup" name="createGroup" />
                    <ErrorMessage
                      name="createGroup"
                      component="div"
                      className="error"
                    />
                  </div>
                  <Field name="groupImage">
                    {({ field, form }) => (
                      <ImageUploader
                        name={field.name}
                        onImageChange={(imageUrl) =>
                          form.setFieldValue(field.name, imageUrl)
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="groupImage"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="description-container">
                  <label htmlFor="description">Add Description*</label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    maxLength="50"
                    placeholder="Describe the roles, responsibility, sklls required for the job and help candidate understand the role better."
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <FieldArray name="formArray">
                {({ push, remove }) => (
                  <div className="array-field">
                    {values.formArray.map((_, index) => (
                      <div key={index} className="array-item">
                        <div className="array-input">
                          <label htmlFor={`formArray[${index}].term`}>
                            Enter term*
                          </label>
                          <Field
                            type="text"
                            name={`formArray[${index}].term`}
                          />
                          <ErrorMessage
                            name={`formArray[${index}].term`}
                            component="div"
                            className="error"
                          />
                          <label htmlFor={`formArray[${index}].defination`}>
                            Enter Defination*
                          </label>
                          <Field
                            type="text"
                            name={`formArray[${index}].defination`}
                          />
                          <ErrorMessage
                            name={`formArray[${index}].defination`}
                            component="div"
                            className="error"
                          />
                        </div>
                        <Field name={`formArray[${index}].arrayImage`}>
                          {({ field, form }) => (
                            <ImageUploader
                              name={field.name}
                              onImageChange={(imageUrl) =>
                                form.setFieldValue(field.name, imageUrl)
                              }
                            />
                          )}
                        </Field>

                        <button type="button" onClick={() => remove(index)}>
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        push({ term: "", defination: "", arrayImage: null })
                      }
                    >
                      + Add More
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <button type="submit" onClick={() => handleSubmit(values)}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateForm;
