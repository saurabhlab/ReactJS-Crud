import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { GetPost, Update } from '../actions/index';
import alertify from 'alertify.js';
import GetMethod from '../actions/index';
//import AuthService from '../utils/AuthService';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = { opt: [], count: ["Maharastra", "Uttarakhand", "Bihar"] };
        this.cascading = this.cascading.bind(this);
    }

    //autopopulated dropdown at edied page
    cascading(event) {
        //seleted State and city
        var x = null;
        if (!event) {
            x = this.props.data.State;

        } else {
            x = event.target.value;
        }

        const options = [];
        const State = [{ 'Maharastra': ["Nagpur", "Pune", "Mumbai"] }, { 'Uttarakhand': ["Dehradun", "Nainital", "Barkot"] }, { 'Bihar': ["Patna", "Nalnda"] }];
        State.map((item) => {
            Object.keys(item).map(key => {
                if (x === key) {
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

    //use for history
    // static propTypes = {
    //     history: React.PropTypes.object
    // }

    //retrive the data in fields on edit page 
    Initial() {
        // console.log("timer");
        const initdata = {
            ID: this.props.data.ID,
            Name: this.props.data.Name,
            Age: this.props.data.Age,
            State: this.props.data.State,
            City: this.props.data.City
        }
        this.props.initialize(initdata);
    }




    //this method load before render edit page components
    componentWillMount() {
        //alert(this.props.match.params.ID);
        const id = this.props.nextState.match.params.ID;
        this.props.GetPost(id).then((request) => {
            this.Initial();
            Window.onload = this.cascading();
        });
    }

    //update button code
    Up(value) {
        // alert(this.props.page);
        this.props.Update(value).then((request) => {
            this.props.GetMethod(this.props.page);
            alertify.logPosition("top right");
            alertify.success("Suucefully Updated Record....");
        });
        this.props.nextState.history.push(`/`);
    }

    render() {
        if (!this.props.data) {
            return <h1>Loading</h1>;
        }
        const {handleSubmit} = this.props;
        return (
            <div className=" col-lg-offset-3 col-lg-9  col-md-offset-3 col-md-9 col-sm-offset-3 col-sm-9  col-xs-12 " style={{paddingTop:50}}>


    <div className="panel panel-primary">
                        <div className="panel-heading">Add Detail </div>
                        <div className="panel-body">

                <form className="form-horizontal animation2 jumbotron" onSubmit={handleSubmit((value) => this.Up(value))}>

                    <div className="form-group">
                        <label className="col-md-4 col-sm-4 control-label">Name</label>
                        <div className="col-md-4 col-sm-4">
                            <Field component="input" name="Name"
                              type="text" className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 col-sm-4 control-label">Age</label>
                        <div className="col-md-4 col-sm-4">
                            <Field component="input" name="Age"
                                type="text" className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 col-sm-4 control-label">Email</label>
                        <div className="col-md-4 col-sm-4">
                            <Field name="State" component="select" type="select"
                                className="form-control" onChange={this.cascading} >
                                <option value="">Please Select</option>
                                {this.state.count.map((val, key) => {
                                    return <option key={key} value={val}>{val}</option>
                                })}
                            </Field>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 col-sm-4 control-label">College</label>
                        <div className="col-md-4 col-sm-4">
                            <Field name="City" component="select" type="select" className="form-control">
                                <option value="" >Choose City</option>
                                {this.state.opt}
                            </Field>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

//use to redux form
const red = reduxForm({
    form: "editform"
})(Edit);


function mapStateToProps(state) {
    return {
        //retrive data of customer on ID
        data: state.getdata.getone,
        //get currnet page after edit button 
        page: state.getdata.page
    };
}

export default connect(mapStateToProps, { GetPost, GetMethod, Update })(red);