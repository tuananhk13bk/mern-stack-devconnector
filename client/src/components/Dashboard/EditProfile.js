import React, { Component } from "react";
import Input from "../Input";
import Select from "../Select";
import TextArea from "../TextArea";
import PrependInput from "../PrependInput";
import { withRouter } from "react-router-dom";

class EditProfile extends Component {
  componentDidMount() {
    const { profile, history } = this.props;
    // on editing, if user reload page, all state will be lost,
    // so when reload, we push back to dashboard
    if (!profile) history.push("/dashboard");
  }

  componentWillUnmount() {
    const { clearAllProfileState } = this.props;
    clearAllProfileState();
  }
  render() {
    const {
      editMode,

      handle,
      status,
      company,
      website,
      profileLocation,
      skills,
      github,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      errors,

      changeProfileHandleInput,
      changeProfileStatusSelect,
      changeProfileCompanyInput,
      changeProfileWebisteInput,
      changeProfileLocationInput,
      changeProfileSkillsInput,
      changeProfileGithubInput,
      changeProfileBioInput,
      changeProfileTwitterInput,
      changeProfileFacebookInput,
      changeProfileLinkedinInput,
      changeProfileYoutubeInput,
      changeProfileInstagramInput,
      createProfile,

      history
    } = this.props;
    console.log(this.props);
    const personalInfoInputList = [
      {
        type: "text",
        name: "company",
        placeholder: "Company",
        value: company,
        disabled: false,
        onChange: changeProfileCompanyInput,
        info: "Could be your own company or one you work for",
        error: errors.company
      },
      {
        type: "text",
        name: "webiste",
        placeholder: "Website",
        value: website,
        disabled: false,
        onChange: changeProfileWebisteInput,
        info: "Could be your own or a company website",
        error: errors.website
      },
      {
        type: "text",
        name: "location",
        placeholder: "Location",
        value: profileLocation,
        disabled: false,
        onChange: changeProfileLocationInput,
        info: "City & state suggested (eg. Boston, MA)",
        error: errors.location
      },
      {
        type: "text",
        name: "skills",
        placeholder: "Skills",
        value: skills,
        disabled: false,
        onChange: changeProfileSkillsInput,
        info: "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)",
        error: errors.skills
      },
      {
        type: "text",
        name: "github",
        placeholder: "Github Username",
        value: github,
        disabled: false,
        onChange: changeProfileGithubInput,
        info:
          "If you want your latest repos and a Github link, include your username",
        error: errors.github
      }
    ];
    const socialNetworkInputList = [
      {
        name: "twitter",
        placeholder: "Twitter Profile URL",
        value: twitter,
        icon: "fab fa-twitter",
        iconColorClass: "text-primary",
        type: "text",
        onChange: changeProfileTwitterInput,
        error: errors.twitter
      },
      {
        name: "facebook",
        placeholder: "Facebook Page URL",
        value: facebook,
        icon: "fab fa-facebook",
        iconColorClass: "text-primary",
        type: "text",
        onChange: changeProfileFacebookInput,
        error: errors.facebook
      },
      {
        name: "linkedin",
        placeholder: "Linkedin Profile URL",
        value: linkedin,
        icon: "fab fa-linkedin",
        iconColorClass: "text-info",
        type: "text",
        onChange: changeProfileLinkedinInput,
        error: errors.linkedin
      },
      {
        name: "youtube",
        placeholder: "Youtube Channel URL",
        value: youtube,
        icon: "fab fa-youtube",
        iconColorClass: "text-danger",
        type: "text",
        onChange: changeProfileYoutubeInput,
        error: errors.youtube
      },
      {
        name: "instagram",
        placeholder: "Instagram Page URL",
        value: instagram,
        icon: "fab fa-instagram",
        iconColorClass: "text-warning",
        type: "text",
        onChange: changeProfileInstagramInput,
        error: errors.instagram
      }
    ];

    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];
    return (
      <div className="edit-profile">
        <div className="container my-4">
          <h1 className="display-4 text-center">
            {editMode ? "Edit" : "Create"} Your Profile
          </h1>
          <p className="lead text-center">
            Let's get some information to make your profile standout
          </p>
          <small className="d-block pb-3">* = required fields</small>
          <form
            onSubmit={event => {
              event.preventDefault();
              createProfile(
                {
                  handle,
                  status,
                  company,
                  website,
                  profileLocation,
                  skills,
                  github,
                  bio,
                  twitter,
                  facebook,
                  linkedin,
                  youtube,
                  instagram
                },
                history
              );
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <Input
                  type="text"
                  name="handle"
                  placeholder="* Profile handle"
                  value={handle}
                  disabled={false}
                  onChange={changeProfileHandleInput}
                  info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
                  error={errors.handle}
                />
                <Select
                  name="status"
                  value={status}
                  onChange={changeProfileStatusSelect}
                  options={options}
                  info="A unique handle for your profile URL. Your full name, company name, nick name"
                  error={errors.status}
                />
                {personalInfoInputList.map(item => (
                  <Input
                    key={item.placeholder}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    value={item.value}
                    disabled={item.disabled}
                    onChange={item.onChange}
                    info={item.info}
                    error={item.error}
                  />
                ))}
                <TextArea
                  type="text"
                  name="bio"
                  placeholder="A short bio of yourself"
                  value={bio}
                  disabled={false}
                  onChange={changeProfileBioInput}
                  info="Tell us a little about yourself"
                />
              </div>
              <div className="col-md-6">
                <div id="social-network-input">
                  {socialNetworkInputList.map(item => (
                    <PrependInput
                      key={item.placeholder}
                      name={item.name}
                      placeholder={item.placeholder}
                      value={item.value}
                      icon={item.icon}
                      iconColorClass={item.iconColorClass}
                      type={item.type}
                      onChange={item.onChange}
                      error={item.error}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between">
              <button className="btn btn-danger btn-block mr-2">Cancel</button>
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-0 ml-2"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EditProfile);
