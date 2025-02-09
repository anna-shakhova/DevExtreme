import React from 'react';

interface TagProps {
  product: any;
  onMouseEnter: any;
  getAltText: any;
}

export default function Tag({ product, onMouseEnter, getAltText }: TagProps) {
  const isDisabled = product.Name === 'SuperHD Video Player';
  return (
    <React.Fragment>
      <div
        className={`dx-tag-content ${isDisabled && 'disabled-tag'}`}
        onMouseEnter={(e) => onMouseEnter(e, product)}
        aria-disabled={isDisabled}
      >
        <img
          src={product.ImageSrc}
          alt={getAltText(product.Name)}
          className="tag-img"
        />
        <span>{product.Name}</span>
        {!isDisabled && <div className="dx-tag-remove-button"></div>}
      </div>
    </React.Fragment>
  );
}
