package com.example.gymserver.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class CartDTO {
    private long userId;
    private List<OrderItemDTO> orderItems;
}
