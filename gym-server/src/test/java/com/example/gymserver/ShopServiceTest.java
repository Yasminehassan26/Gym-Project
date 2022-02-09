package com.example.gymserver;

import com.example.gymserver.controllers.ShopController;
import com.example.gymserver.dto.CartDTO;
import com.example.gymserver.dto.OrderItemDTO;
import com.example.gymserver.dto.ProductDTO;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.repositories.ShopRepository;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.ShopService;
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
    @Autowired
    private ShopRepository shopRepository ;

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
        int inStockProd1Before = this.shopRepository.getById(25L).getNoInStock();
//        int inStockProd2Before = this.shopRepository.getById(9L).getNoInStock();
        OrderItemDTO orderItemDTO1 = new OrderItemDTO("True Stones Protein Powder", 25, 300,1,30,300);
        OrderItemDTO orderItemDTO2 = new OrderItemDTO("Leggings medium", 2, 300,1,100,300);
        List<OrderItemDTO> orderItems = new LinkedList<>();
        orderItems.add(orderItemDTO1);
        orderItems.add(orderItemDTO2);
        CartDTO cart = new CartDTO(0, orderItems);
        String actual = this.shopController.confirmOrder("mariam", cart);
        // making sure it decremented the in stock quantity
//        int inStockProd1After = this.shopRepository.getById(25L).getNoInStock();
//        int inStockProd2After = this.shopRepository.getById(9L).getNoInStock();

        assertEquals("Order confirmed successfully!", actual);
//        assertEquals(inStockProd1Before - 1, inStockProd1After);
//        assertEquals(inStockProd2Before - 1, inStockProd2After);
    }

    @Test
    public void invalidConfirmOrderOutOfStock(){

    }

    @Test
    public void invalidConfirmOrderQuantityNotEnough(){
//        OrderItemDTO orderItemDTO1 = new OrderItemDTO("True Stones Protein Powder", 25, 300,50,30,50*300);
//        OrderItemDTO orderItemDTO2 = new OrderItemDTO("Leggings medium", 2, 300,1,100,300);
//        List<OrderItemDTO> orderItems = new LinkedList<>();
//        orderItems.add(orderItemDTO1);
//        orderItems.add(orderItemDTO2);
//        CartDTO cart = new CartDTO(0, orderItems);
//        String actual = this.shopController.confirmOrder("mariam", cart);
//        assertEquals("");
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
