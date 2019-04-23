import { connect } from "react-redux";
import AddExperience from "../components/AddCredentials/AddExperience";

import {
  changeExperienceInputCompany,
  changeExperienceInputTitle,
  changeExperienceInputLocation,
  changeExperienceInputFrom,
  changeExperienceInputTo,
  changeExperienceInputCurrent,
  changeExperienceInputDescription,
  addExperience
} from "../actions/experience/experienceActions";

const mapStateToProps = state => {
  const {
    company,
    title,
    experienceLocation,
    from,
    to,
    current,
    description,
    errors
  } = state.experienceReducer;
  return {
    company,
    title,
    experienceLocation,
    from,
    to,
    current,
    description,

    errors
  };
};

const mapDispatchToProps = {
  changeExperienceInputCompany,
  changeExperienceInputTitle,
  changeExperienceInputLocation,
  changeExperienceInputFrom,
  changeExperienceInputTo,
  changeExperienceInputCurrent,
  changeExperienceInputDescription,
  addExperience
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExperience);
