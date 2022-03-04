import axios from 'axios';
import React, { Component } from 'react'
import { Table, Button } from "reactstrap";
import Students from '../Services/Students';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import  ReactPaginate   from 'react-paginate';

export default class ListViewCourses extends Component {
  constructor(props) {
    super(props)
    console.log("props value--", props.location.state);
    this.state = {
      id1: this.props.match.params.id,
     students:[],
     offset: 0,
     tableData: [],
     orgtableData: [],
     perPage: 3,
     currentPage: 0


    }
    this.delete = this.delete.bind(this)

    this.handlePageClick = this.handlePageClick.bind(this);

  }

  /*componentDidMount()
{
Students.getstudentsdetail().then((res)  =>{
this.setState({students:res.data})

});
}
*/

  delete(id) {

    alert(id);




    const updateBankUrl = "http://localhost:8083/api/delete/" + id;

    //console.log("bhhhhhhhh"+this.state);


    axios.request({
      method: "DELETE",
      url: updateBankUrl,

    }).then(Response => Response)

    toast.success("data is deleted!!!");
    <Link to={`/ListviewCourses`}></Link>


  }
//added for pagination

handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.loadMoreData()
  });

};

loadMoreData() {
const data = this.state.orgtableData;
const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
this.setState({
pageCount: Math.ceil(data.length / this.state.perPage),
tableData:slice
})

}

//----------------------------------
  componentDidMount() {

    const base_url_api = "http://localhost:8083/api/getdata";
    axios.get(base_url_api).then(Response => {
      console.log(Response);
      var tdata = Response.data;

      console.log('data-->'+JSON.stringify(tdata))
				 var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)

      this.setState({
        pageCount: Math.ceil(tdata.length / this.state.perPage),
        orgtableData : tdata,
        tableData:slice

      })
      //toast.success("data is loaded");

    })
  }

  changehandler = e => {
    this.setState({ [e.target.name]: e.target.value })

  }

  render() {

    const { students } = this.state;
  
    return (
      <div style={{ height: "500px", width: "300px", border: "2px" }}>

        <h2 className="text-center">Students details</h2>
        <input type="text" placeholder="Serching....." id="myInput" onKeyUp="datafilter()"></input>
        <Table dark pagenation={true}>
          <thead>
            <tr style={{ color: 'yellow', width: '100px' }}>
              <th>ID</th>
              <th>Student Name</th>
              <th>Age</th>
              <th>Place</th>
              <th>MobileNo</th>
              <th>Colleageame</th>
              <th>Gender</th>
              <th>PinCode</th>
              <th>Bankname</th>
              <th>Edit Record</th>
              <th>Delete Record</th>
            </tr>
          </thead>
          <tbody>
            {
             this.state.tableData.map((tdata, i) =>
                <tr>
                  <td>{tdata.id}</td>
                  <td>{tdata.studentname}</td>
                  <td>{tdata.age}</td>
                  <td>{tdata.place}</td>
                  <td>{tdata.mobileno}</td>
                  <td>{tdata.colleagename}</td>
                  <td>{tdata.gender}</td>
                  <td>{tdata.pincode}</td>
                  <td>{tdata.bankname}</td>
                  <td>
                    <Button border> <Link style={{ color: 'white' }} to={`/edit/${tdata.id}`}>Edit Record</Link></Button>
                  </td>
                  <td>
                    <Button border onClick={() => this.delete(tdata.id)}>Delete Record</Button>
                  </td>
         
                </tr>
              )

             }
           </tbody>
        </Table>
        <ReactPaginate
                   
                    
                   previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                


      </div>




    )
  }
}
