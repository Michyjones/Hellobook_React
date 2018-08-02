import React, {Component, Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import {getSingleBook} from '../actions/bookActions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Header from "./Header";


class singleBook extends Component{
    constructor(props){
        super(props);
    this.state = {
        book: {
            serial_no: '',
            book_name: '',
            category: '',

        }
        }
    };

    _getSingleBook = () =>{
        const book_id = this.props.match.params.id;
        const token = localStorage.getItem('token');
        console.log("----book---->.", book_id)
        let book = this.props;
        this.props.getSingleBook({book_id, token});
    };

    updateBookState = (field, e) =>{
        let newBookState = Object.assign( {}, this.state.book);
        newBookState [field] = e.target.value;
        this.setState({ book: newBookState });
    };

    submitForm = (e) => {
        e.preventDefault();
        this.props.editNewBook(this.state.book);

    };
    componentDidMount(){
        this._getSingleBook();
    }

    render() {
        const book = this.props.book.details;

        return(
            <Fragment>
                <Header/>
                <div className="container">
                {book?
                <table>
                    <thead>
                    <tr>

                        <th>Book Id</th>
                        <th className="hidden-xs">Serial No</th>
                        <th> Book Name</th>
                        <th className="hidden-xs">Category</th>
                        <th className="hidden-xs">Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    <td >{book.id}</td>
                <td >{book.serial_no}</td>
                <td>{book.book_name}</td>
                <td> {book.category}</td>
                <td> {book.availabilty?
                        <b className="text-success">Available</b>:<b className="text-danger">Not Available</b>
                    }</td>
                    </tbody>
                </table>:

                <h4>Loading ...</h4>}
                </div>
            </Fragment>
        );
    }


}

const mapStateToProps = (state) => ({book:state.book});

const mapDispatchToProps = (dispatch) => ({
        getSingleBook: data => dispatch (getSingleBook(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(singleBook);
