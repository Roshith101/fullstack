package com.eventmanagement.roshith.controller;

import java.util.List;
// import java.util.Optional;
// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import com.eventmanagement.roshith.model.VenueDetails;
// import skcet.project.eventnest.model.Events;
// import skcet.project.eventnest.model.Users;
import com.eventmanagement.roshith.service.VDservice;

@RestController
@Tag(name = "VD Controller")
public class VDcontroller {
    @Autowired
    VDservice service;

    // @Hidden
    @GetMapping("/showEvents")
    public List<VenueDetails> showVDetails() {
        return service.showevents();
    }

    // @GetMapping("/showEventsByLocation/{location}")
    // public List<VenueDetails> showEventsByLocation(@PathVariable String location) {
    //     return service.showEventsByLocation(location);
    // }

    @PostMapping("/addEvents")
    public String addEvents(@RequestBody VenueDetails e) {
        return service.addEvent(e);
    }

    // @Hidden
    @PutMapping("/updateEvents")
    public String UpdateEvents(@RequestBody VenueDetails e) {
        return service.updateEvent(e);
    }

    // @Hidden
    @DeleteMapping("/deleteEvents/{id}")
    public String deleteEvents(@PathVariable int id) {
        return service.deleteEvent(id);
    }

    // @Hidden
    // @GetMapping("/showBooking")
    // public List<Booking> showBooking() {
    // return service.showBooking();
    // }

    // // @Hidden
    // @GetMapping("/showBookingById/{id}")
    // public Optional<Booking> showBookingById(@PathVariable int id) {
    // return service.showBookingByid(id);
    // }

    // // @Hidden
    // @PostMapping("/addBooking")
    // public String addBooking(@RequestBody Booking e) {
    // return service.addBooking(e);
    // }

    // // @Hidden
    // @PutMapping("/updateBooking")
    // public String UpdateBooking(@RequestBody Booking e) {
    // return service.updateBooking(e);
    // }

    // // @Hidden
    // @DeleteMapping("/deleteBooking/{id}")
    // public String deleteBooking(@PathVariable int id) {
    // return service.deleteBooking(id);
    // }
    // @GetMapping("/getProfile/{id}")
    // public Optional<Users> getProfile(String id){
    // return service.getProfile(id);
    // }

}
