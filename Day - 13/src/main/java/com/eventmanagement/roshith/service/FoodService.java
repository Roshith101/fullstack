package com.eventmanagement.roshith.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventmanagement.roshith.model.Food;
import com.eventmanagement.roshith.repository.FoodRepository;

@Service
public class FoodService {
    @Autowired
    FoodRepository frepo;

    public String addfoods(Food e) {
        frepo.save(e);
        return "Food added Successfully";
    }

    public String updatefoods(Food e) {
        frepo.save(e);
        return "food updated successfully";
    }

    public String deletefoods(int id) {
        frepo.deleteById(id);
        return "deleted Successfully";
    }

    public List<Food> showfoods() {
        return frepo.findAll();
    }

    public List<Food> showfoodsbycuisine(String cuisine) {
        return frepo.findByCuisine(cuisine);
    }
}