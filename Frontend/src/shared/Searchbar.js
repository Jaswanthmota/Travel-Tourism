import React,{useRef} from 'react'
import "./search.css";
import {Col,Form,FormGroup} from 'reactstrap';
function Searchbar() {

  const locationref=useRef("")
  const distanceref=useRef(0)
  const maxGroupSizeref=useRef(0)

  const searchHandler =()=>{
      const location=locationref.current.value
      const distance=distanceref.current.value
      const maxGroupSize=maxGroupSizeref.current.value
      if (location===""||distance===''||maxGroupSize===''){
        alert("All fields are required")
      }
  }

  return (
    <Col lg='12'>
        <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                    <i class="ri-map-pin-line"></i>
                </span>
                <div>
                  <h6>Location</h6>
                  <input type="text" placeholder="Where are you going?" ref={locationref}/>
                </div>
            </FormGroup>
             <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                   <i class="ri-map-pin-range-line"></i>
                </span>
                <div>
                  <h6>Distance</h6>
                  <input type="text" placeholder="Distance k/m" ref={distanceref}/>
                </div>
            </FormGroup>
             <FormGroup className="d-flex gap-3 form__group form__group-last">
                <span>
                    <i class="ri-group-line"></i>
                </span>
                <div>
                  <h6>Max People</h6>
                  <input type="text" placeholder="0" ref={maxGroupSizeref}/>
                </div>
            </FormGroup>
            <span className="search__icon" type="submit" onClick={searchHandler}>
              <i class="ri-search-line"></i>  
            </span>
        </Form>
        </div>
    </Col>
  )
}

export default Searchbar;
