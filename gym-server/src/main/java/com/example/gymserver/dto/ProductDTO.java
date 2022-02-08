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
    private long id;
    private String name;
    private String description;
    private float price;
    private int noInStock;
    private String imageURL;
}
