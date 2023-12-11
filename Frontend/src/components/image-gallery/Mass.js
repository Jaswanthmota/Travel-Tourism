import React from 'react';
import Gallery from './Gallery'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
function Mass() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
      <Masonry gitter='1rem'>
        {
            Gallery.map((item,index)=>(
                <img className="masonry__img" src={item} key={index} alt=" " style={{width:"90%",
               display:"block",borderRadius:"15px"}}/>
            ))
        }

      </Masonry>
    </ResponsiveMasonry>
  )
}

export default Mass;
