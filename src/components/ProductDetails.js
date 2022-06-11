import React from "react";
import styles from "../components/ProductDetails.module.css";


const ProductDetail = (props) => {
  const ColorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [styles.productImage]

    if (pos === props.currentPreviewImagePos) {
      classArr.push(styles.SelectedProductImage);
    }
    return (
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.OnColorOptionClick(pos)} />
    )
  })

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [styles.featureItem]

    if (pos === 1 && props.showHearbeatSeccion){
      classArr.push(styles.SelectedFeatureItem)
    } else if (pos === 0 && !props.showHearbeatSeccion){
      classArr.push(styles.SelectedFeatureItem)
    }

    return(
      <button key={pos} onClick={() => props.OnFeaturesButtonClick(pos)} className={classArr.join(' ')}>{item}</button>
    )
  })

  
    return(
        <div className={styles.ProductData}>
        <h1 className={styles.ProductTitle}>{props.data.title}</h1>
        <p className={styles.ProductDescription}>{props.data.description}</p>

        <h3 className={styles.OptionColor}>Select Color:</h3>
        <div>
          {ColorOptions}
        </div>
        
        <h3 className={styles.sectionHeading}>Features:</h3>
        <div>
          {featureList}
        </div> 

        <button className={styles.BuyNowBtn}>Buy Now</button>
      </div>
    )
}


export default ProductDetail