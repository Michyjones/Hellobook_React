import React, {Component, Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import Header from "./Header";
import {fetchBooks, getSingleBook} from '../actions/bookActions';
import { Link } from "react-router-dom";
import {connect} from "react-redux";



class Views extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){this.props.fetchBooks()}
    render(){
        const {books}= this.props;
        return(
            <Fragment>
            <Header/>
                <div className="container">
                    <div className="row">

                        <p></p>
                        <h1><center>Available books in the store</center></h1>
                        <center><p>Edit book information and add the the books that are not in the library. Also delete the outdated copies from the library </p>
                        <p>Inform us about the book that you would like to be in the store and its not available at the moment</p>
                        <p></p><p></p>
                        </center>

                        <div className="col-md-10 col-md-offset-1">

                            <div className="panel panel-default panel-table">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col col-xs-6">
                                            <h3 className="panel-title">Available books</h3>
                                        </div>
                                        <div className="col col-xs-6 text-right">
                                            <button type="button" className="btn btn-sm btn-primary btn-create"><Link to="/addbook">Add New Book</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    {books.loading ?
                                       <h1></h1>:
                                        <table className="table table-striped table-bordered table-list">
                                            <thead>
                                            <tr>
                                                <th><em className="fa fa-cog"></em></th>
                                                <th>Status</th>
                                                <th className="hidden-xs">Serial No</th>
                                                <th> Book Name</th>
                                                <th className="hidden-xs">Category</th>
                                                <th className="hidden-xs">Availability</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {books.books.map((book)=>(
                                            <tr>
                                                <td align="center">
                                                    <div className="btn-group">
                                                        {/*<a className="btn btn-primary"><em*/}
                                                            {/*className="fa fa-pencil"></em></a><Link to="/editbook">X</Link>*/}
                                                        {/*<a className="btn btn-danger"></i></a>*/}
                                                        <button onClick={()=>alert(book.id)}><a className="btn btn-danger"><i className="fa fa-trash"></i></a></button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link
                                                    to={`/book/${book.id}`}
                                                    className="btn btn-warning link">
                                                    Details <i className="fa fa-angle-right" />
                                                    </Link>
                                                </td>
                                                <td className="hidden-xs">{book.serial_no}</td>
                                                <td>{book.book_name}</td>
                                                <td className="hidden-xs">{book.category}</td>
                                                <td className="hidden-xs">
                                                    {book.availabilty?
                                                    <b className="text-success">Available</b>:<b className="text-danger">Not Available</b>
                                                }</td>
                                            </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    }
                                </div>
                                <div className="panel-footer">
                                    <div className="row">
                                        <div className="col col-xs-4">Page 1 of 5
                                        </div>
                                        <div className="col col-xs-8">
                                            <ul className="pagination hidden-xs pull-right">
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                            </ul>
                                            <ul className="pagination visible-xs pull-right">
                                                <li><a href="#">«</a></li>
                                                <li><a href="#">»</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div></Fragment>

        );
    }


}

const mapStateToProps = (state) => ({books:state.books});

const mapDispatchToProps = (dispatch) => (
    {
        fetchBooks: () => fetchBooks(dispatch),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Views);
