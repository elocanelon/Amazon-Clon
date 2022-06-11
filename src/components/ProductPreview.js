import React from 'react';
import styles from '../components/productPreview.module.css'

const ProductPreview = (props) => {
  const currentHour = new Date().getHours()
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()  
  
  return (
        <div className={styles.productPreview}>
            <img src={props.currentPreviewImage} alt="Vista producto" />
          
           { props.showHearbeatSeccion ? 
           <div className={styles.TimeSection}>
              <p>{`${currentHour}:${currentMinute}`}</p>
              </div>
               : 
               <div className={styles.HeartRate}>
               <i className="fa-solid fa-heart-pulse"></i>
         <p>78</p> 
               </div>
            }
          
        </div>
    )

}

export default ProductPreview