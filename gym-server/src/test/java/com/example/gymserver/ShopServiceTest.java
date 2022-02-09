package com.example.gymserver;

import com.example.gymserver.controllers.ShopController;
import com.example.gymserver.controllers.SignInController;
import com.example.gymserver.controllers.SignUpController;
import com.example.gymserver.controllers.TraineeController;
import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

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

    }

    @Test
    public void showProductsEquipmentCategory(){

    }

    @Test
    public void showProductsSuppliesCategory(){

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
}
