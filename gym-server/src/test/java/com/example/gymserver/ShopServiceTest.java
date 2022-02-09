package com.example.gymserver;

import com.example.gymserver.controllers.ShopController;
import com.example.gymserver.dto.CartDTO;
import com.example.gymserver.dto.OrderItemDTO;
import com.example.gymserver.dto.ProductDTO;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.LinkedList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ActiveProfiles("test")
public class ShopServiceTest {

    @Autowired
    private ShopController shopController;
    @Autowired
    private UserRepository userRepository ;

    private static UserDTO registeredUser;

    @Test
    public void showProductsClothesCategory(){
        List<ProductDTO> products = this.shopController.showProducts("Clothes");
        assertEquals(9,products.size());
    }

    @Test
    public void showProductsEquipmentCategory(){
        List<ProductDTO> products = this.shopController.showProducts("Equipments");
        assertEquals(9,products.size());
    }

    @Test
    public void showProductsSuppliesCategory(){
        List<ProductDTO> products = this.shopController.showProducts("Supplies");
        assertEquals(9,products.size());
    }

    @Test
    public void validConfirmOrder(){

    }

    @Test
    public void invalidConfirmOrderOutOfStock(){

    }

    @Test
    public void invalidConfirmOrderQuantityNotEnough(){

    }

    @Test
    public void unauthenticatedUserConfirmOrder(){
        List<OrderItemDTO> orderItems = new LinkedList<>();
        orderItems.add(new OrderItemDTO("Leggings medium", 2, 300f, 1, 100, 300f));
        CartDTO cartDTO = new CartDTO(2, orderItems);
        String actual = this.shopController.confirmOrder("mariam", cartDTO);
        assertEquals("Invalid User!!", actual);
    }
}
