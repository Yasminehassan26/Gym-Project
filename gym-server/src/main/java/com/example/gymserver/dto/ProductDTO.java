package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ProductDTO {
    private long productId;
    private String name;
    private String description;
    private float price;
    private int noInStock;
    private String imageURL;
}
