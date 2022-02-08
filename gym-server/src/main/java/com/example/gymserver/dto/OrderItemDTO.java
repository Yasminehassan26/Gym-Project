package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class OrderItemDTO {
    private String name;
    private long productId;
    private float price;
    private int noOfItems;
    private int noInStock;
}
