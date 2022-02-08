package com.example.gymserver.controllers;

import com.example.gymserver.dto.CartDTO;
import com.example.gymserver.dto.ProductDTO;
import com.example.gymserver.services.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/shop")
public class ShopController {

    private final ShopService shopService;

    @Autowired
    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }


    @GetMapping("/show-products/{category}")
    public List<ProductDTO> showProducts(@PathVariable("category") String category){
        return shopService.showProducts(category);
    }

    @PostMapping("/confirmOrder/{userName}")
    public String confirmOrder(@PathVariable("userName") String userName,
                               @RequestBody CartDTO cartDTO){
        return shopService.confirmOrder(userName, cartDTO);
    }

}
