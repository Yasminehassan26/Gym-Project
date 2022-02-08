package com.example.gymserver.mappers;

import com.example.gymserver.dto.ProductDTO;
import com.example.gymserver.models.Product;

public class ProductMapper {

    public static ProductDTO toProductDTO(Product product){
        return ProductDTO.builder().id(product.getId())
                .description(product.getDescription())
                .name(product.getName())
                .price(product.getPrice())
                .noInStock(product.getNoInStock())
                .imageURL(product.getImageURL())
                .build();
    }

}
