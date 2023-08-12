import ImageUploader from "../Common/ImageUploader";
import "./styles/index.css";

const CreateForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="card">
          <div>
            <div className="formUpper">
              <div className="group-details">
                <label for="creatGroup">Create Group*</label>
                <input
                  type="text"
                  id="creatGroup"
                  name="createGroup"
                  required
                />
              </div>
              <ImageUploader />
            </div>
            <div className="description-container">
              <label for="description">Add Description*</label>
              <textarea
                id="description"
                name="description"
                required
                maxlength="50"
                placeholder="Describe the roles, responsibility, sklls required for the job and help candidate understand the role better."
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="formUpper"></div>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
