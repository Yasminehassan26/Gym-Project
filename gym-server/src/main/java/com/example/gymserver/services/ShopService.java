package com.example.gymserver.services;

import com.example.gymserver.dto.CartDTO;
import com.example.gymserver.dto.ProductDTO;
import com.example.gymserver.mappers.ProductMapper;
import com.example.gymserver.models.Product;
import com.example.gymserver.repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class ShopService {

    private final ShopRepository shopRepository;
    private final AuthenticationService authenticationService;

    @Autowired
    public ShopService(ShopRepository shopRepository, AuthenticationService authenticationService) {
        this.shopRepository = shopRepository;
        this.authenticationService = authenticationService;
    }


    public List<ProductDTO> showProducts(String category) {
        List<Product> products = shopRepository.findProductsByCategory(category).orElse(null);
        List<ProductDTO> productDTOS = new LinkedList<>();
        for(Product product : products){
            productDTOS.add(ProductMapper.toProductDTO(product));
        }
        return productDTOS;
    }

    public String confirmOrder(String userName, CartDTO cartDTO) {
        if(!this.authenticationService.authenticateUser(cartDTO.getUserId(), userName))
            return "Invalid User";
        else{
            for()

        }
    }
}
