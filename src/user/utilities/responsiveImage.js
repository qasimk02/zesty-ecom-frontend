// This function, responsiveImages, takes the `imageName` and `productId` obtained from the backend
// and generates an HTML `img` element with responsive image sources based on screen size.
// It constructs the image URLs using the provided AWS_S3_BASE_URL and the image's base name and extension.
// The `srcSet` attribute specifies different image sources for various screen widths,

import { AWS_S3_BASE_URL } from "../../config/awsConfig";

// and the `sizes` attribute sets the maximum image width for each source.
export const ResponsiveImages = ({ imageName, id, classess }) => {
  if (!imageName) {
    return null;
  }

  const imageBaseName = imageName.substring(0, imageName.lastIndexOf("."));
  const extension = imageName.substring(imageName.lastIndexOf(".") + 1);

  return (
    <img
      className={`${classess}`}
      width="150"
      src={`${AWS_S3_BASE_URL}/products/${id}/${imageBaseName}-large.${extension}`}
      alt={imageBaseName}
      srcSet={`
            ${AWS_S3_BASE_URL}/products/${id}/${imageBaseName}-small.${extension} 300w, 
            ${AWS_S3_BASE_URL}/products/${id}/${imageBaseName}-medium.${extension} 700w, 
            ${AWS_S3_BASE_URL}/products/${id}/${imageBaseName}-large.${extension} 1200w`}
      sizes="(max-width: 300px) 300px, (max-width: 700px) 700px, 1200px"
    />
  );
};
