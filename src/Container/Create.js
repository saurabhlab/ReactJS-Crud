import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
//import Notifications, {notify} from 'react-notify-toast';
import GetMethod from '../actions/index';
import validate from '../validation/validate';
import alertify from 'alertify.js';

//validation code 
const renderField = ({input, type, meta: {touched, error, warning}}) => {
    return <div>
        <input {...input} type={type} className="form-control input-md" />
        {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>

}

class CreateNew extends Component {
    constructor(props) {
        super(props);
        this.cascading = this.cascading.bind(this);
        this.state = { opt: [], count: ["Maharastra", "Uttarakhand", "Bihar"] };
    }

//dropdown autopopulated  code
    cascading(event) {
        const options = [];
        const country = [{ 'Maharastra': ["Nagpur", "Pune", "Mumbai"] },
                         { 'Uttarakhand': ["Dehradun", "Nainital", "Barkot"] }, 
                         { 'Bihar': ["Patna", "Nalnda"] }];

        country.map((item) => {
            Object.keys(item).map(key => {
                if (event.target.value === key) {
                    let i = item[key].length - 1;
                    for (var s = 0; s <= i; s++) {
                        options.push(<option key={item[key][s]} value={item[key][s]}>{item[key][s]}</option>);
                    }
                }
                return true;
            });

            return true;
        });
        this.setState({ opt: options });
    }

//onsubmit saved record
    onSubmit(props) {
        //  this.setState({ form: props });
        this.props.createPost(props).then((request) => {
            this.props.GetMethod(1);
            alertify.logPosition("top right");
            alertify.success("Suucefully added....");
        })
        this.props.nextState.history.push(`/`);
        // let myColor = { background: 'green', text: "white" };
        //notify.show("Recored saved !", "custom", 5000, myColor);
    }

// use to storeing the history
    // static propTypes = {
    //     history: React.PropTypes.object
    // }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <div className=" container " style={{paddingTop:50}}>
                <div className=" col-lg-offset-3 col-lg-9  col-md-offset-3 col-md-9 col-sm-offset-3 col-sm-9  col-xs-12 ">
                    <div>
                        <NavLink to="/" className='btn btn-danger pull-right'>Back to Home</NavLink>
                    </div>

                    <div className="panel panel-primary">
                        <div className="panel-heading">Add Detail </div>
                        <div className="panel-body">
                            <form className=" form-horizontal animation2 jumbotron " onSubmit={handleSubmit((v) => this.onSubmit(v))}>


                                <div className="form-group">
                                    <label className="col-md-4 col-sm-4 control-label">Name</label>
                                    <div className="col-md-4 col-sm-4">
                                        <Field component={renderField} name="Name"
                                            type="text" className="form-control input-md" placeholder="Name" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="col-md-4 col-sm-4 control-label">Age</label>
                                    <div className="col-md-4 col-sm-4">
                                        <Field component={renderField} name="Age"
                                            type="text" className="form-control input-md" placeholder="Age" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 col-sm-4 control-label">State</label>
                                    <div className="col-md-4 col-sm-4">
                                        <Field name="State" component="select" type="select" className="form-control" onChange={this.cascading} >
                                            <option value="">--Select State--</option>
                                            {this.state.count.map((val, key) => {
                                                return <option key={key} value={val}>{val}</option>
                                            })}
                                        </Field>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 col-sm-4 control-label">City</label>
                                    <div className="col-md-4 col-sm-4">
                                        <Field name="City" component="select" type="select" className="form-control">
                                            <option value="">-- Select City--</option>
                                            {this.state.opt}
                                        </Field>
                                    </div>
                                </div>

                                 <button type="submit" className='btn btn-primary'>Submit</button> &nbsp;


                        <button type="button" className='btn btn-success' disabled={pristine || submitting} onClick={reset}>Clear Values
                       </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const CreateMyForm = reduxForm({ form: "Postformnew", validate }, null, { createPost })(CreateNew);

export default connect(null, { createPost, GetMethod })(CreateMyForm);

// function mapStateToProps(state) {
//     // console.log("123445676",state)
//     return {
//         page: state.getdata.page
//     };

// }

// const CreateMyForm = reduxForm({ form: "Postformnew", validate, }, mapStateToProps, { createPost })(CreateNew);

// export default connect(mapStateToProps, { createPost, GetMethod })(CreateMyForm);





