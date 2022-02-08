package com.example.gymserver.services;

import com.example.gymserver.dto.CartDTO;
import com.example.gymserver.dto.OrderItemDTO;
import com.example.gymserver.dto.ProductDTO;
import com.example.gymserver.mappers.ProductMapper;
import com.example.gymserver.models.Product;
import com.example.gymserver.repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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

    @Transactional
    public String confirmOrder(String userName, CartDTO cartDTO) {
        if(!this.authenticationService.authenticateUser(cartDTO.getUserId(), userName))
            return "Invalid User!!";
        else{
            List<Product> products = new LinkedList<>();
            for(OrderItemDTO orderItemDTO : cartDTO.getOrderItems()){
                Product temp = shopRepository.findById(orderItemDTO.getProductId()).orElse(null);
                if(temp != null){
                    products.add(temp);
                    if(temp.getNoInStock() == 0)
                        return "Item " + temp.getName() + " is out of stock.";
                    else if(temp.getNoInStock() < orderItemDTO.getNoOfItems())
                        return "Item " + temp.getName() + " has only " + temp.getNoInStock() + " in stock.";
                }else return "Invalid product!!";
            }

            for(int i = 0; i < products.size(); i++){
                products.get(i).setNoInStock(products.get(i).getNoInStock() -
                        cartDTO.getOrderItems().get(i).getNoOfItems());
            }
            return "Order confirmed successfully!";
        }
    }
}
