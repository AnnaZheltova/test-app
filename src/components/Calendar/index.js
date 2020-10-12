import React from 'react';
import classnames from 'classnames';
import * as calendar from './calendar';
import "../App.scss";
import { select } from '../actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import BootstrapModal from '../Modal'

class Calendar extends React.Component {
   
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
    };


    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    };


    handleDayClick = date => {

        this.setState({ selectedDate: date });

        this.props.onChange(date);


    };




    render() {
        const {  monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar m-auto">
                <header className="m-auto">
                    <button className="border-0 bg-transparent" onClick={this.handlePrevMonthButtonClick}>{'<'}</button>
                    <p>{monthNames[this.month] + this.year}</p>
                    <button className="border-0 bg-transparent" onClick={this.handleNextMonthButtonClick}>{'>'}</button>

                </header>
                <hr className="m-auto"></hr>

                <BootstrapModal/>

                <table className="m-auto pt-3">
                    <tfoot>
                        <tr>
                            {weekDayNames.map(name =>
                                <td className="border_tfoot" key={name}>{name}</td>
                            )}
                        </tr>

                    </tfoot>
                    <tbody>
                        {monthData.map((week, index) =>

                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': calendar.areEqual(date, currentDate),
                                            'selected': calendar.areEqual(date, selectedDate)
                                        })}

                                        onClick={() => {
                                            this.props.select(date);
                                            $("#myModal").show();
                                            
                                        }}


                                    >
                                        {date.getDate()}

                                    </td>
                                    :
                                    <td key={index} />
                                )}
                            </tr>

                        )}
                    </tbody>

                </table>
            </div>

        );
    }
}




//const mapStateToProps = () => ({});
/*const mapStateToProps = store => {
    console.log(store.dates)

    return {
      dates: store.dates
    }
  }
*/

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ select: select }, dispatch)
}

function mapStateToProps(state) {
    return {
        dateSelected: state.dates
    }
   
}


export default connect(mapStateToProps, matchDispatchToProps)(Calendar)
