import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux";
import $ from 'jquery';
import './App.scss'



class BootstrapModal extends React.Component {

    static defaultProps = {
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };
    getMonthName(date) {
        if (date != null) {
            return (this.props.monthNames[date.getMonth()])
        }

    }
    getDayName(date) {
        if (date != null) {
            let dateNum = date.getDate();
            if (dateNum === 1 || dateNum === 11 || dateNum === 21 || dateNum === 31) {
                return (dateNum + "st " + this.props.weekDayNames[date.getDay()]);
            }
            else if (dateNum === 2 || dateNum === 12 || dateNum === 22) {
                return (dateNum + "nd " + this.props.weekDayNames[date.getDay()]);

            }
            else if (dateNum === 3 || dateNum === 13 || dateNum === 23) {
                return (dateNum + "rd " + this.props.weekDayNames[date.getDay()]);

            }
            else {
                return (dateNum + "th " + this.props.weekDayNames[date.getDay()]);

            }

        }

    }

    render() {
        return (

            <div className="modal" id="myModal" >
                <div className="modal-dialog-centered  m-auto" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-row">
                                <button type="button" className="close" onClick={() => $("#myModal").hide()} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label for="month">Month</label>
                                    <input type="text" id="month" placeholder={this.getMonthName(this.props.date)}></input>
                                </div>
                                <div className="form-group col-6">
                                    <label for="day">Day</label>
                                    <input type="text" id="day" placeholder={this.getDayName(this.props.date)}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        date: state.dates
    }
}

export default connect(mapStateToProps)(BootstrapModal)