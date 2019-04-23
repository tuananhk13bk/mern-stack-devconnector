import { connect } from "react-redux";
import AddEducation from "../components/AddCredentials/AddEducation";

import {
  changeEduInputSchool,
  changeEduInputDegree,
  changeEduInputFieldOfStudy,
  changeEduInputFrom,
  changeEduInputTo,
  changeEduInputCurrent,
  changeEduInputDescription,
  createEdu
} from "../actions/education/educationActions";

const mapStateToProps = state => {
  const {
    school,
    degree,
    fieldOfStudy,
    from,
    to,
    current,
    description,

    errors
  } = state.educationReducer;
  return {
    school,
    degree,
    fieldOfStudy,
    from,
    to,
    current,
    description,

    errors
  };
};

const mapDispatchToProps = {
  changeEduInputSchool,
  changeEduInputDegree,
  changeEduInputFieldOfStudy,
  changeEduInputFrom,
  changeEduInputTo,
  changeEduInputCurrent,
  changeEduInputDescription,
  createEdu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEducation);
